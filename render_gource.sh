#!/bin/bash
cd /home/hans/.openclaw/workspace/projects/wanderers-guide
rm -f /tmp/gource_render.ppm gource.mp4
echo "=== gource render start ==="
gource -1280x720 -f -i 0.5 -t 60 -o /tmp/gource_render.ppm 2>/tmp/gource_err.log
echo "gource exit=$?"
echo "=== gource err ==="
cat /tmp/gource_err.log
echo "=== ppm file ==="
ls -lh /tmp/gource_render.ppm 2>/dev/null || echo "Geen PPM gegenereerd"
echo "=== PPM header (first 100 bytes) ==="
head -c 100 /tmp/gource_render.ppm 2>/dev/null | xxd | head -5
echo "=== ffmpeg encode start ==="
if [ -f /tmp/gource_render.ppm ] && [ -s /tmp/gource_render.ppm ]; then
  ffmpeg -y -f image2pipe -r 30 -vcodec ppm -i /tmp/gource_render.ppm -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p -movflags +faststart gource.mp4 2>&1 | tail -10
  echo "ffmpeg exit=$?"
else
  echo "GEEN GELDIG PPM - skip encode"
fi
echo "=== result ==="
ls -lh gource.mp4 2>/dev/null || echo "GEEN MP4"
if [ -f gource.mp4 ]; then
  ffprobe -v error -show_entries format=duration,size:stream=width,height,codec_name -of default=noprint_wrappers=1 gource.mp4 2>&1 | head -10
fi
