# Be.Vegan
Aplikacja na programowanie zespołowe 2k19/2k20

Aby włączyć wirtualne środowisko użyj skryptu Be.Vegan/start
```bash	
source start
````
Aby pobrać wszystkie potrzebne biblioteki do uruchomienia serwera Backendowego użyj 
```
pip3 install -r requirements.txt --user
````
Aby uruchomić serwer Backendowy 
- przejdź do katalogu ```src```
- uruchom komendę ```python3 manage.py runserver````

Aby pobrać wszystkie potrzebne biblioteki do uruchomienia serwera Frontendowego 
- przejdź do katalogu ```wegamania-web```
- użyj komendy ```npm install```

Aby uruchomić serwer Frontendowy 
- przejdź do katalogu ```wegamania-web```
- użyj komendy ```npm start```


# Virtualenv
Ponieważ nasza aplikacja korzysta z wielu różnych bibliotek, korzystamy z virtualenv, aby ułatwić proces korzystania z aplikacji.
Aktywacja środowiska:
``` source env/bin/activate ```
``` source nenv/bin/activate ```

Po prawidłowym wykonaniu komend shell powinien wyglądać następująco:

(nenv)(env) user@shell:~
