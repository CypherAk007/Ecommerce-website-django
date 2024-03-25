## React-Router-Dom Changes for new version 
- https://stackoverflow.com/questions/70290770/react-typeerror-cannot-read-properties-of-undefined-reading-params

## Activate Venv
- source venv/bin/activate

## Django Rest Framework
- https://www.django-rest-framework.org/api-guide/views/#api_view

## CORS
- https://pypi.org/project/django-cors-headers/

## Django Admin Panel
- http://127.0.0.1:8000/admin/auth/user/

## Database user model
- python manage.py createsuperuser

## SQL Schmea 
- https://drawsql.app/teams/cypherak/diagrams/ecommerce-udemy

## Add Image Feild to db - need image processing lib - pillow
- pip install pillow
- image = models.ImageField(null=True,blank=True)

## Redux Imports
- npm install redux react-redux  redux-thunk 
- npm install redux-devtools-extension --legacy-peer-deps     

## React Navigation b/w pages
- import { useNavigate } from 'react-router-dom';
- navigate(`/cart/${id}?qty=${qty}`) 

## Querry Parameter 
- const location = useLocation()
- const queryParams = new URLSearchParams(location.search)
- const value = queryParams.get('qty')

## JWT Auth 
- https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html
- Token access : http://127.0.0.1:8000/api/users/login/
- decode your token: https://jwt.io/
- Change LifeSpan of token : https://django-rest-framework-simplejwt.readthedocs.io/en/latest/settings.html#access-token-lifetime
