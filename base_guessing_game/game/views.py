from django.shortcuts import render


def guess_view(request):
    return render(request, 'game/guess.html')
