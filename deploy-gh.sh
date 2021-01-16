set -e
git checkout gh-pages
git merge main -m "merge main and prepare to deploy"
ember build --environment production
git add dist --force
git commit -m "deploy to gh-pages"
git subtree push --prefix dist origin gh-pages
git checkout main