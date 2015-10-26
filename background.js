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
