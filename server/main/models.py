from django.core.validators import FileExtensionValidator
from django.db import models

from main.validators import FileSizeValidator

def get_path_upload_post_file(instance, file):
    return f'layouts/{file}'

# Create your models here.
class Layout(models.Model):
    class Rooms(models.TextChoices):
        Studio = 'Студия'
        One = '1'
        Two = '2'
        Three = '3'
        Four = '4+'
    title = models.CharField()
    price = models.IntegerField(default=0)
    image = models.FileField(
        upload_to=get_path_upload_post_file,
        validators=[
            FileExtensionValidator(allowed_extensions=['jpg', 'png', 'jpeg', ]),
            FileSizeValidator(megabyte_limit=32)
        ],)
    street = models.CharField()
    houseNumber = models.CharField(default="")
    rooms = models.CharField(choices=Rooms.choices, default=Rooms.One)
    description = models.TextField(default="")
