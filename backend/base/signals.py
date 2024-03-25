#This can fire action BEFORE the model finishes the save process.
from django.db.models.signals import pre_save

from django.contrib.auth.models import User

def updateUser(sender,instance,**kwargs):
    # sender - object that sends the signal 
    # instance - actual object 
    # Here we are overriding user model 
    # before saving username to db it saves username=email to db 
    user = instance
    if user.email!='':
        user.username = user.email
    print('Signal Triggerd')

pre_save.connect(updateUser,sender=User)