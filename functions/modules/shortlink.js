var request = require("request");
const functions = require('firebase-functions');
exports.linkshor = functions.https.onRequest((res, req) =>{
    let pathlink = document.getElementById("linkpath");
    let apiKey = document.getElementById("apiKey");
    let title = document.getElementById("title");
    let longLink = document.getElementById("longLink");
    var options = {
        method: 'POST',
        url: 'https://api.short.cm/links',
        headers: {
            authorization: apiKey,
            'content-type': 'application/json'
        },
        body: {
            originalURL: longLink,
            path: pathlink,
            title: title,
            allowDuplicates: false,
            redirectType: 302,
            domain: 'go.osismpksmaniwa.web.id'
        },
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
});