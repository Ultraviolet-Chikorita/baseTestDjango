from django.shortcuts import render
from django.http import JsonResponse, Http404
import json
from pathlib import Path


def guess_view(request):
    return render(request, 'game/guess.html')


def farcaster_manifest_view(request):
    """Serve the Farcaster/Base mini-app manifest at /.well-known/farcaster.json"""
    # Look for the manifest in the static folder
    manifest_path = Path(__file__).resolve().parent.parent.parent / 'static' / '.well-known' / 'farcaster.json'
    try:
        with manifest_path.open('r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        raise Http404("Manifest not found")
    return JsonResponse(data)
