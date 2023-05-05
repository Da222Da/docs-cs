#!/usr/bin/env sh

# 忽略 error
set -e

pnpm docs:build

cd ./.vitepress/dist
git init
git add --all
git commit -m 'deploy'
git push -f git@github.com:Da222Da/docs-cs.git master:gh-pages

cd -

rm -rf ./.vitepress/dist

