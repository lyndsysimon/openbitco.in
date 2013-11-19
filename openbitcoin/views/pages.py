from flask import Blueprint, render_template

pages = Blueprint('pages', __name__)


def home():
    return render_template('/pages/home.html')