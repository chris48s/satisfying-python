#!/bin/bash

set -euo pipefail

curl --silent "https://raw.githubusercontent.com/actions/python-versions/main/versions-manifest.json" \
    | jq '[.[].version]' \
    | node src/parse-versions.js \
    > src/versions.json
