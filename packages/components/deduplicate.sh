#!/usr/bin/env bash
# deduplicate references in all yarn.lock files

npx lerna list -p -a | awk -F packages '{printf "\"packages%s/yarn.lock\"\n", $2} END{printf "./yarn.lock"}' | xargs -L 1 npx yarn-deduplicate
