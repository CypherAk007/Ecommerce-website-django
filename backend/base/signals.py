#This can fire action BEFORE the model finishes the save process.
from django.db.models.signals import pre_save

from django.contrib.auth.models import User

def updateUser(sender,instance,**kwargs):
    # sender - object that sends the signal 
    # instance - actual object 
    print('Signal Triggerd')

pre_save.connect(updateUser,sender=User)