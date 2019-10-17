#! /bin/bash
echo "module.exports = { repoUrl: '$1', blogTitle: '$2', deployRepoUrl: '$3' }" > env.production.js
