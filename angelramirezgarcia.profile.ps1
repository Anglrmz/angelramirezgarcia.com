param(
  [string]$Message = "Update site"
)

Set-Location "C:\Users\angel\Desktop\angelramirezgarcia-site"

git add -A

# only commit if something changed
if (-not (git diff --cached --quiet)) {
    git commit -m $Message
} else {
    Write-Host "No staged changes to commit." -ForegroundColor Yellow
}

# push current branch
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
git push -u origin $branch