# One-time setup script for the portfolio project.
# Run from the lukas-portfolio folder in PowerShell:
#   cd C:\Users\Lukas\Desktop\Website\lukas-portfolio
#   .\setup.ps1

Write-Host "==> Cleaning any partial .git directory..." -ForegroundColor Cyan
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
}

Write-Host "==> Initializing git repo..." -ForegroundColor Cyan
git init -b main
git config user.email "lukas.siemers123@gmail.com"
git config user.name "Lukas Siemers"

Write-Host "==> Installing dependencies (this takes ~1 min)..." -ForegroundColor Cyan
npm install

Write-Host "==> Creating initial commit..." -ForegroundColor Cyan
git add -A
git commit -m "Initial scaffold: Next.js 15 + TS + Tailwind + MDX portfolio"

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Create a new repo on GitHub (Don't initialize with a README):"
Write-Host "     https://github.com/new"
Write-Host ""
Write-Host "  2. Connect this folder to that repo:"
Write-Host "     git remote add origin https://github.com/YOUR_USERNAME/lukas-portfolio.git"
Write-Host "     git push -u origin main"
Write-Host ""
Write-Host "  3. Start the dev server:"
Write-Host "     npm run dev"
Write-Host "     Then open http://localhost:3000"
Write-Host ""
