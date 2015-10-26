/*
	Background just sits with a listener ready to pass information it can
	read back to a content script.  

	When cookies: we are taking a passed options object and making a call
	for cookies on behalf of the content caller.

	When notify: we are taking a message value and injecting it into a new
	notification.

*/
chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        switch (port.name) {
            case "cookie":
                chrome.cookies.getAll(msg, function(id) {
                    port.postMessage(id)
                });
                break;
            case "notify":
                options.message = msg.message
                chrome.notifications.create('notify1', options, null);
                break;
        }
    });
});

var options = {
    type: "basic",
    title: "AWS Expiry Sniffer",
    iconUrl: "icon.png",
    message: "intentionally left blank"
}