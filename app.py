import time
from flask_cors import CORS
from flask import Flask, request
from flask_restful import Resource, Api
app = Flask(__name__)
CORS(app)
api = Api(app)


items = [{
    "name": "Richard"
}]


class Item(Resource):
    def get(self, name):
        for item in items:
            if item['name'] == name:
                time.sleep(5) # 過5秒後傳送
                datas = [{'id':1,'name':'Richard'},{'id':2,'name':'Kelly'}]
                return datas
        return {'item': None}, 404

    def post(self, name):
        item = {'name': name, 'price': 12.00}
        items.append(item)
        return item, 201


api.add_resource(Item, '/item/<string:name>')
app.run(port=5000, debug=True)