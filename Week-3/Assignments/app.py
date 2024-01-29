from flask import (Flask, render_template, request, url_for,make_response, jsonify, redirect)

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
    name = request.cookies.get('name')
    return render_template("myname.html", name=name)



@app.route('/trackName', methods=['POST','GET'])
def trackName():
    if request.method == 'POST':
        name = request.form['name']
        response = make_response(redirect(url_for('myName')))
        response.set_cookie('name', name)
        return response
    else:
        name = request.args.get("name")
        return render_template('myname.html', name=name)


if __name__ == "__main__":
    app.run(debug=True, port=3000)