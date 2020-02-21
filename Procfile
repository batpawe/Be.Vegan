release: python3 src/manage.py migrate
release: python3 src/manage.py makemigrations 
web: gunicorn --chdir src/ be_vegan.wsgi:application --preload --log-file -
