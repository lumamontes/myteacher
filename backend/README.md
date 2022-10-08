
1- Criar e ativar virtualenv

python3 -m venv .venv

flag -m: model
venv: lib venv 
.venv: nome da virtual env

source ./venv/bin/activate

desativar: deactivate

2- instalar django: pip install django 

3 - criar projeto:

django-admmin startproject nome_projeto nome_arquivo


4 - startar servidor:

python manage.py runserver

framework para criar API com django:

como instalar: pip djangorestframework

django rest_framwork

criar migration:

python manage.py makemigrations

rodar migration: 

python manage.py migrate 


