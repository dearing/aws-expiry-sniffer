/*  The seance cookie decoded is an object as below:
{
  "accountId": "REDACTED-AWS-ACCOUNT",
  "iam": true,
  "services": [
    "AWSCodeCommit",
    "AWSCodeDeploy",
    "AWSCodePipeline",
    ...
    "servicecatalog"
  ],
  "status": "ACTIVE",
  "exp": 1445813887000
}
*/

var cookieRequest = chrome.runtime.connect({
    name: "cookie"
});
var notifyRequest = chrome.runtime.connect({
    name: "notify"
});

function handleCookies(element) {
    myDate = new Date(JSON.parse(decodeURIComponent(element.value)).exp);
    var expires = myDate.toLocaleDateString() + ' ' + myDate.toLocaleTimeString()

    console.log("credentials expire at " + expires)

    // inject this expires string cleanly into the account pull down tab
    var section = document.getElementById('awsc-login-account-section'),
        child = document.createElement('div');
    child.innerHTML = '<div id="awsc-login-display-name-label-expires" class="awsc-username-display-name-label">Expires: ' + expires + '</div>'
    section.insertBefore(child, section.firstChild);

    warnDelay = (myDate - Date.now()) - 300000
    console.log(warnDelay)

    window.setTimeout(function() {
            notifyRequest.postMessage({
                message: "Your AWS session will expire in 5 minutes."
            })
        }, warnDelay)
    }

    // we should get only one cookie but I wanted to keep this easy to hack
    cookieRequest.onMessage.addListener(function(msg) {
        msg.forEach(handleCookies)
    });

    // call for the seance cookie for this domain
    cookieRequest.postMessage({
        domain: "console.aws.amazon.com",
        name: "seance"
    })