from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)
DATABASE = 'database.db'

def get_db():
    conn = sqlite3.connect(DATABASE)
    return conn

@app.route('/data', methods=['GET'])
def get_data():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM your_table")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)