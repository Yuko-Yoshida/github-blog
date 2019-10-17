#! bin/bash
echo "module.exports = { repoUrl\: '$1', token\: '$2', blogTitle\: '$3', deployRepoUrl\: '$4' }" > env.production.js
