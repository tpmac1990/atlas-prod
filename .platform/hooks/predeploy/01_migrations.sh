#!/bin/bash

source /var/app/venv/*/bin/activate
cd /var/app/staging

python manage.py migrate gp
python manage.py migrate
