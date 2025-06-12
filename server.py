from flask import Flask, render_template

app = Flask(__name__, template_folder='.')  # Use '.' to point to the current folder

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/photography')
def photography():
    return render_template('photography.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)