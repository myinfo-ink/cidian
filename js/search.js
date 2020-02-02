document.querySelector('#q').oninput = function() {
    var v = this.value.trim();

    document.querySelector('#search-result').innerHTML = '';

    if (v === '') return;

    for (var i in wordsData) {
        if (i.indexOf(v) !== -1) {
            document.querySelector('#search-result').innerHTML += '<a href="word.html?s=' + i + '"><div>' + i + '</div></a>';
        }
    }
}

document.querySelector('#q').onkeypress = function(e) {
    if (e.keyCode == 13) {
        var v = this.value.trim();

        if (v === '') return;

        if (wordsData[v]) {
            location.href = 'word.html?s=' + v;
        } else {
            var w;
            for (var i in wordsData) {
                if (i.indexOf(v) !== -1) {
                    location.href = 'word.html?s=' + i;
                    return;
                }
            }

            alert('没有此网络用语');
        }
    }
}
