from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from serpapi import GoogleSearch
from openai import OpenAI
# import serpapi
import json
from . import constants

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def get_web_results(request, search_query):
    print("get_web_results_called")
    params = {
        "q": search_query,
        "hl": "en",
        "gl": "in",
        "google_domain": "google.com",
        "api_key": constants.SERP_API_KEY
    }
    s = GoogleSearch(params).get_dict()
    print(s)
    # print(type(s))
    # s = serpapi.search(params)
    # knowledge_graph
    # organic_results
    res_data = {}
    try:
        res_data["Key Points"] = s["knowledge_graph"]
    except:
        print("no key points")
    complete_data = consolidate_text(s["organic_results"])
    summary = summarize(complete_data)
    res_data["summary"] = summary
    return JsonResponse(res_data)

def consolidate_text(organic_results):
    whole_summary=""
    for result in organic_results:
        print(result.keys())
        try:
            whole_summary = whole_summary + result.get('snippet')
        except:
            print("no data")
    return whole_summary

def summarize(whole_summary):
    client = OpenAI(
        # This is the default and can be omitted
        api_key=constants.OPENAI_API_KEY
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"summarize the following text - {whole_summary}"
            }
        ],
        model="gpt-3.5-turbo",
    )

    return chat_completion.choices[0].message.content
