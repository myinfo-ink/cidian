fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        window.wordsData = json;

        if (window.init) {
            window.init();
        }
    })
