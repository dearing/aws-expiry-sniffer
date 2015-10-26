/*

The seance cookie decoded is an object as below:

{
  "accountId": "REDACTED-AWS-ACCOUNT",
  "iam": true,
  "services": [
    "AWSCodeCommit",
    "AWSCodeDeploy",
    "AWSCodePipeline",
    "AWSServiceCatalog",
    "AmazonEC2",
    "AmazonRDS",
    "AmazonWAM",
    "ResourceAllocationService",
    "cloudformation",
    "codecommit",
    "codedeploy",
    "codepipeline",
    "ec2",
    "marketplace",
    "servicecatalog"
  ],
  "status": "ACTIVE",
  "exp": 1445813887000
}
*/

// create a channel to exchange information to the background.js
var port = chrome.runtime.connect({
    name: "exchange"
});

function handleCookies(element, index, array) {
    obj = JSON.parse(decodeURIComponent(element.value));
    //console.log(obj)

    var myDate = new Date(obj.exp);
    console.log("credentials expire at " + myDate.toTimeString())

    // TODO: edit the page contents
    document.title = myDate.toTimeString()

}

// we should get only one cookie but I wanted to keep this easy to hack
port.onMessage.addListener(function(msg) {
    msg.forEach(handleCookies)
});

// call for the seance cookie for this domain
port.postMessage({
    domain: "console.aws.amazon.com",
    name: "seance"
})