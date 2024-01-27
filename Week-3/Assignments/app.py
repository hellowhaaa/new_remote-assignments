from flask import (Flask, redirect, url_for, render_template,
                   request, make_response, jsonify)
import json

app = Flask(__name__)
app.secret_key = 'sdfjiohdgssdkghnlsdhidfs'


@app.route('/')
def index():
    word = 'Hello, My Server'
    return render_template('first_page.html', word=word)


@app.route('/data', methods=['GET', 'POST'])
def data():
    ls = []
    number = request.args.get('number')
    if number is None:
        number = 'Lack of Parameter'
    elif number.isalpha():
        number = 'Wrong Parameter'
    else:
        number = int(number)
        number = ((1+number) * number) // 2
    ls.append(number)
    return jsonify(ls[0])


@app.route('/sum.html', methods=['GET', 'POST'])
def sum():
    return render_template('sum.html')


@app.route('/myName', methods=['GET', 'POST'])
def myName():
    info = get_saved_data()
    return render_template('myname.html', saves=info)


@app.route('/trackName', methods=['POST'])
def trackName():
    response = make_response(redirect(url_for('myName')))
    info = get_saved_data()
    info.update(dict(request.form.items()))
    response.set_cookie('Name1', json.dumps(info))
    return response


def get_saved_data():
    try:
        info = json.loads(request.cookies.get('Name1'))
    except TypeError:
        info = {}
    return info


if __name__ == "__main__":
    app.run(debug=True, port=3000)