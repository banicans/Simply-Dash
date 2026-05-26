#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

echo "Opening http://localhost:3000 in your browser..."
case "$(uname -s)" in
  Linux*)  xdg-open "http://localhost:3000" ;;
  Darwin*) open "http://localhost:3000" ;;
  *)       echo "Please open http://localhost:3000 manually" ;;
esac

echo "Starting server on http://localhost:3000"
python3 -m http.server 3000
