from flask import Flask, render_template, request
from entities.palindromo import Palindromo
from entities.animal import animal
from entities.Sorteo import SorteoClass


app = Flask(__name__)

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/mates')
def mates():
    return render_template('mates.html')

@app.route('/Azulejos')
def Azulejos():
    return render_template('Azulejos.html')

@app.route('/animales')
def animales():
    return render_template('animales.html', animals = animal.get_list())

@app.route('/Money')
def Money():
    return render_template('Money.html')

@app.route('/Sorteo',  methods=['GET', 'POST'])
def Sorteo():
     if request.method == 'POST':
        primero = request.form.get("input-primero")
        segundo = request.form.get("input-segundo")
        tercero = request.form.get("input-tercero")

        s = SorteoClass(primero,segundo,tercero)
        

        resultadillo = s.Verquepedo()

        return render_template('SorteoResultado.html', resultadoSorteo = resultadillo)
     
     return render_template('Sorteo.html')

@app.route('/palindromo', methods=['GET', 'POST'])
def palindromo():
    if request.method == 'POST':
        frase = request.form.get('input-frase', '')

        p = Palindromo(frase)
        result = p.is_palindromo()
        return render_template('result.html', resultado = result)
    return render_template('palindromo.html')

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5147)