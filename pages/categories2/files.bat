@ECHO ON

::: Implicitly Written
SET FileList=List.txt

FOR /F "TOKENS=*" %%F IN (%FileList%) DO (

    ECHO ^0>"%%~F.html"

)
GOTO EOF