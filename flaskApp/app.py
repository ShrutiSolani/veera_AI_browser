from flask import Flask
from serpapi import GoogleSearch
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    search_query="tea"
    print("get_web_results_called")
    params = {
        "q": search_query,
        "hl": "en",
        "gl": "in",
        "google_domain": "google.com",
        "api_key": "4d03670231e965ce2fb2c63f8e5ee3cc7430e27165ecaa2abb9f71834a2b97ac"
    }
    s = GoogleSearch(params).get_dict()
    # print(s)
    # print(type(s))
    # s = serpapi.search(params)
    # knowledge_graph
    # organic_results
    # consolidate_text(s["organic_results"])
    return "hi"

