window.init = function() {
    window.word = decodeURI(getQueryVariable('s'));

    if (!wordsData[word]) {
        alert('没有这个流行词语！将跳转回首页');
        location.href = 'index.html';
        return;
    }

    document.querySelector('title').innerText += ' - ' + word;

    document.querySelector('#q').value = word;

    document.querySelector('#title').innerText = word;

    document.querySelector('#exp').innerText = wordsData[word].definition;

    document.querySelector('#banner').innerHTML = '<img height="100%" width="100%" src="img/banner/' + word + '.png" onerror="this.src=\'img/banner/default.png\'">';
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
