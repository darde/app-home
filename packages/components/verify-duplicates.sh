#!/usr/bin/env bash

# Verifies that yarn.lock is in its cleanest possible state

set -e
set -o pipefail

duplicates=`npx lerna list -p -a | awk -F packages '{printf "\"packages%s/yarn.lock\" ", $2} END{ print "yarn.lock" }' | xargs npx yarn-deduplicate --list`

if [[ $duplicates ]]; then
    echo ''
    echo '---------------------------------------'
    echo ''
    echo "Found duplicate blocks in yarn.lock which can be cleaned up. Please run 'ci/deduplicate'"
    echo ""
    echo "$duplicates"
    exit 1  
else
    exit 0
fi
