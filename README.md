![image](https://user-images.githubusercontent.com/60052718/229382428-575e63f8-3986-40e6-b56b-f036d479bb9c.png)

# MyTeacher

The goal of this project is to provide a platform where users can browse a list of available teachers, view their profiles and book appointments for lessons with them. The project is built with React.js for the frontend and Django for the backend, which is implemented as a RESTful API.


### :computer: Tools 

- [React.js](https://reactjs.org/docs/)
- [Django](https://docs.djangoproject.com/en/3.2/)
- [SQLite](https://www.sqlite.org/docs.html)
- [MaterialUI](https://material-ui.com/getting-started/installation/)

### :wrench: Installation
To run this project locally, you need to have Node.js and Python 3 installed on your machine.
Clone this project:
```
git clone https://github.com/lumamontes/myteacher.git
```
Install the dependencies:
```
npm install
```
Run the frontend server:
```
npm run dev
```
Backend
```
cd backend
python3 -m venv .venv
source ./venv/bin/activate
pip install django
pip install django_rest_framework
pip install django-cors-headers
python manage.py runserver
pip install django-cors-headers
```
