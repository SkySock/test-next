# Generated by Django 5.2.3 on 2025-06-26 05:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_layout_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='layout',
            old_name='houseNumber',
            new_name='rooms',
        ),
    ]
