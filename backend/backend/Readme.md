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

## Customize JWT Auth Tokens
- https://django-rest-framework-simplejwt.readthedocs.io/en/latest/customizing_token_claims.html
- ![img_custom_jwt_token](resources/custom_jwt_access_token.png)
- https://github.com/jazzband/djangorestframework-simplejwt/blob/master/rest_framework_simplejwt/serializers.py#L69

## Getting user data with token
- Without token
- ![Alt text](resources/postman_without_accesstoken.png)
- With Token
- ![Alt text](resources/postman_user_retrival.png)

## Get Custom name, _id, isAdmin with serilizer and not modifing db
- Admin att official docs https://docs.djangoproject.com/en/5.0/ref/contrib/auth/
- ![postmanimg](resources/custom_ser.png)

## New Seriliazer for token regenerate - 
- ![Alt text](resources/newtoken.png)

## Getting all users from db
- adding endpoint and also view to get users
- ![Alt text](resources/getusersendpt.png)

