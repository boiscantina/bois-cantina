@echo off
cd /d "%~dp0"
echo ========================================================
echo   Subiendo codigo de BOIS Cantina a GitHub...
echo ========================================================
echo.
git push -u origin main
echo.
echo ========================================================
echo   Si finalizo con exito, presiona cualquier tecla para salir.
echo ========================================================
pause
