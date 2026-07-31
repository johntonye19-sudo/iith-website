#!/bin/bash
# PurgeCSS / Tailwind build metrics for IITH website
# Usage: bash ./scripts/purge-metrics.sh

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_CSS="$ROOT/css/styles.css"
INPUT_CSS="$ROOT/src/input.css"
REPORT="$ROOT/scripts/purge-report.txt"

echo "========================================"
echo " Tailwind / PurgeCSS Performance Report"
echo " IITH Yenagoa Website"
echo " Generated: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo "========================================"
echo ""

if [ ! -f "$OUT_CSS" ]; then
  echo "ERROR: $OUT_CSS not found. Run: npm run build"
  exit 1
fi

OUT_BYTES=$(wc -c < "$OUT_CSS" | tr -d ' ')
OUT_LINES=$(wc -l < "$OUT_CSS" | tr -d ' ')
OUT_KB=$(awk "BEGIN {printf \"%.2f\", $OUT_BYTES/1024}")

INPUT_BYTES=0
INPUT_KB="0.00"
if [ -f "$INPUT_CSS" ]; then
  INPUT_BYTES=$(wc -c < "$INPUT_CSS" | tr -d ' ')
  INPUT_KB=$(awk "BEGIN {printf \"%.2f\", $INPUT_BYTES/1024}")
fi

echo "--- Output CSS ---"
echo "  Path:           css/styles.css"
echo "  Size:           ${OUT_KB} KB (${OUT_BYTES} bytes)"
echo "  Lines:          ${OUT_LINES}"
echo ""
echo "--- Input CSS ---"
echo "  Path:           src/input.css"
echo "  Size:           ${INPUT_KB} KB (${INPUT_BYTES} bytes)"
echo ""

RULES=$(grep -c '{' "$OUT_CSS" 2>/dev/null || echo 0)
MEDIA=$(grep -c '@media' "$OUT_CSS" 2>/dev/null || echo 0)
DARK=$(grep -c '\.dark' "$OUT_CSS" 2>/dev/null || echo 0)

echo "--- CSS Structure ---"
echo "  Approximate rules:     ${RULES}"
echo "  @media blocks:         ${MEDIA}"
echo "  .dark references:      ${DARK}"
echo ""

CDN_REF_KB=3000
RATIO="n/a"
if [ "$OUT_BYTES" -gt 0 ] 2>/dev/null; then
  RATIO=$(awk "BEGIN {printf \"%.1f\", ($CDN_REF_KB*1024)/$OUT_BYTES}")
fi

echo "--- Purge Effectiveness (approx) ---"
echo "  Full Tailwind (CDN-scale ref): ~${CDN_REF_KB} KB"
echo "  Your built CSS:                ${OUT_KB} KB"
echo "  Approximate reduction factor:  ${RATIO}x smaller"
echo ""

echo "--- Health Checks ---"
STATUS="PASS"
if [ "$OUT_BYTES" -gt 100000 ] 2>/dev/null; then
  echo "  [WARN] Output > 100 KB — review unused utilities or safelist"
  STATUS="WARN"
elif [ "$OUT_BYTES" -gt 50000 ] 2>/dev/null; then
  echo "  [OK]   Output 50-100 KB — acceptable for multi-page site"
else
  echo "  [OK]   Output < 50 KB — excellent purge result"
fi

if grep -qE 'opacity-0|translate-y-6|shadow-md' "$OUT_CSS" 2>/dev/null; then
  echo "  [OK]   Runtime (safelist) classes present in output"
else
  echo "  [INFO] Safelist utilities not in file (expected for hand-written CSS; OK after CLI build)"
fi

echo ""
echo "Overall: ${STATUS}"
echo "========================================"

echo "date=$(date -u '+%Y-%m-%dT%H:%M:%SZ')" > "$REPORT"
echo "out_bytes=${OUT_BYTES}" >> "$REPORT"
echo "out_kb=${OUT_KB}" >> "$REPORT"
echo "out_lines=${OUT_LINES}" >> "$REPORT"
echo "rules=${RULES}" >> "$REPORT"
echo "media=${MEDIA}" >> "$REPORT"
echo "dark_refs=${DARK}" >> "$REPORT"
echo "status=${STATUS}" >> "$REPORT"

echo "Report saved: scripts/purge-report.txt"
