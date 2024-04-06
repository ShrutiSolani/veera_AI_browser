from django.shortcuts import render
from django.http import HttpResponse
from serpapi import GoogleSearch
# import serpapi
import json
from . import constants

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def get_web_results(request, search_query):
    params = {
        "q": search_query,
        "hl": "en",
        "gl": "in",
        "google_domain": "google.com",
        "api_key": constants.SERP_API_KEY
    }
    s = GoogleSearch(params).get_dict()
    # print(s)
    # print(type(s))
    # s = serpapi.search(params)
    # knowledge_graph
    # organic_results
    consolidate_text(s["organic_results"])
    return HttpResponse(json.dumps(s))

def consolidate_text(organic_results):
    whole_summary=""
    for result in organic_results:
        print(result.keys())
        # whole_summary = whole_summary + result.get('snippet')
    print(whole_summary)

