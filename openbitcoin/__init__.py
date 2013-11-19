from flask import Flask


def create_app(**kwargs):
    app = Flask(__name__, **kwargs)

    # Routes
    from openbitcoin.views.pages import pages, home
    app.register_blueprint(pages, url_prefix='/pages')

    app.add_url_rule('/', 'home', home)


    return app