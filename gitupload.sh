#!/bin/bash

node new.js


# Set the GitHub repository URL
REPO_URL="git@github.com:kus123123/leetcode-solutions.git"



# Add all changes to git
git add .

# Commit the changes
git commit -m "Upload changes"

# Push the changes to GitHub
git push $REPO_URL main --force