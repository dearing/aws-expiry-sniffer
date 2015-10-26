chrome.cookies.onChanged.addListener(function(info) {
    console.log("onChanged" + JSON.stringify(info));
});

if (!chrome.cookies) {
    chrome.cookies = chrome.experimental.cookies;
}

function getCookies(domain, name, callback) {
    chrome.cookies.get({
        "url": domain,
        "name": name
    }, function(cookie) {
        if (callback) {
            callback(cookie.value);
        }
    });
}

// add a listener for incoming requests for cookies
chrome.runtime.onConnect.addListener(function(port) {

	// react to requests on 'exchange' only
    console.assert(port.name == "exchange");

    // function to use the supplied cookie filters
    port.onMessage.addListener(function(msg) {
        chrome.cookies.getAll(msg, function(id) {
            port.postMessage(id)
        });
    });
});