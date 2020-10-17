#!/usr/bin/env bash
# sync lock files

rm -rf node_modules 
lerna clean -y 
yarn install
lerna bootstrap
