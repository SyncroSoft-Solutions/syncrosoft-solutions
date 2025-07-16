#!/bin/bash

# Add and commit changes
echo "Staging all changes..."
git add .

echo "Enter commit message:"
read commit_message

git commit -m "$commit_message"

# Show existing branches and ask user to select one
echo "Available branches:"
git branch

echo "Enter the branch you want to push:"
read selected_branch

# Check if branch exists
if git show-ref --quiet refs/heads/"$selected_branch"; then
  echo "Switching to $selected_branch..."
  git checkout "$selected_branch"
else
  echo "❌ Branch '$selected_branch' does not exist locally."
  exit 1
fi

# Ask for push type: normal or force
echo "Do you want to force push this branch? (y/n)"
read force_push

# Array of remotes and their host configs
declare -a remotes=(
    # "git@github-ajaysyncrosoft:ajaysyncrosoft/syncrosoft.git"
    "git@github.com:SyncroSoft-Solutions/syncrosoft-solutions.git"
    # "git@github-ajay120503:Ajay120503/syncrosoft.git"
)

# Loop through each remote, push based on chosen option
for remote in "${remotes[@]}"; do
  echo "Setting remote origin to $remote..."
  git remote remove origin 2>/dev/null
  git remote add origin "$remote"

  if [[ "$force_push" == "y" || "$force_push" == "Y" ]]; then
    echo "Force pushing $selected_branch to $remote..."
    git push --force -u origin "$selected_branch" || {
      echo "❌ Force push failed for $remote"
      exit 1
    }
    echo "✅ Force pushed $selected_branch to $remote"
  else
    echo "Pushing $selected_branch to $remote..."
    git push -u origin "$selected_branch" || {
      echo "❌ Push failed for $remote"
      exit 1
    }
    echo "✅ Successfully pushed $selected_branch to $remote"
  fi
done

echo "🎉 All remotes pushed successfully!"
