#!/bin/bash

# Check if SSH key already exists
if [ ! -f ~/.ssh/id_rsa ]; then
  echo "Generating SSH key..."
  ssh-keygen -t rsa -b 4096 -C "kushagra746@gmail.com" -N "" -f ~/.ssh/id_rsa
  echo "SSH key generated."

  # Start the ssh-agent in the background
  eval "$(ssh-agent -s)"

  # Add the SSH private key to the ssh-agent
  ssh-add ~/.ssh/id_rsa

  # Display the public key
  echo "Here is your public key:"
  cat ~/.ssh/id_rsa.pub
else
  echo "SSH key already exists."
fi

echo "Hello, World!"

git add .
git commit -m "Upload"
git push origin master