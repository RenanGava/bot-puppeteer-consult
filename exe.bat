@REM Instala o chocolatey no pc
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

@REM  instala o Nodejs no pc na versão recomendada
choco install -y --force nodejs@18.16.0

@REM instala o npm de forma global
npm i -g npm

@REM // instala as dependências da aplicação
npm install

@REM faz a programa executar
npm run dev