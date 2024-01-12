from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/minha_database'
mongo = PyMongo(app)

@app.route('/api/gravar_dados', methods=['POST'])
def gravar_dados():
    data = request.get_json()

    if not data or 'nome' not in data or 'idade' not in data:
        return jsonify({'message': 'Dados incompletos'}), 400

    # Conectar ao MongoDB
    db = mongo.db

    # Gravar dados na coleção 'dados'
    dados_collection = db.dados
    novo_dado = {
        'nome': data['nome'],
        'idade': data['idade']
    }
    dados_collection.insert_one(novo_dado)

    return jsonify({'message': 'Dados gravados com sucesso'}), 201

@app.route('/api/listar_dados', methods=['GET'])
def listar_dados():
    # Conectar ao MongoDB
    db = mongo.db

    # Buscar todos os dados na coleção 'dados'
    dados_collection = db.dados
    dados = list(dados_collection.find({}, {'_id': 0}))

    return jsonify({'dados': dados}), 200

if __name__ == '__main__':
    app.run(debug=True)


