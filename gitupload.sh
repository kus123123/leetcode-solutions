#!/bin/bash

# Set the GitHub repository URL
REPO_URL="git@github.com:kus123123/newbuild.git"

# Add all changes to git
git add .

# Commit the changes
git commit -m "Upload changes"

# Push the changes to GitHub
git push $REPO_URL master