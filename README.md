AWS Expiry Sniffer
============

*intended to be forked and customized to taste*

[![forthebadge](http://forthebadge.com/images/badges/for-sharks.svg)](http://forthebadge.com)

Published
---------
- [changelog]
- [releases]

About
---------
When working with federated logins with AWS you may find the 1 hour time out token annoying. So this extension will signal the `background.js` to for a particular cookie and extract the `"exp"` value, format it into something human readable, and insert that the account pulldown at the console.  Finally, a timeout function is calculated to 5 minutes before the session exipiration to display a desktop notification.

```javascript
{
  "accountId": "REDACTED",
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
```
Fork this for more elaborate needs.
  
Install
---------
From Source: 
  - fork, clone to a working folder.
  - enable developer mode then load the unpacked extension in Chrome via chrome://extensions/
  - customize to taste and reload the extension

From Release:
  - visit [releases] and download the crx file and drop it into your chrome://extensions/ page

Finally:
  - visit a AWS Console page verify the cookie was sniffed out by clicking the account pulldown

TODO & Help Wanted
------------
 - see [issues]

Contributing
------------
1. Fork the repository on Github
2. Create a named feature branch (like `add_component_x`)
3. Write your change
4. Write tests for your change (if applicable)
5. Run the tests, ensuring they all pass
6. Submit a Pull Request using Github

License and Authors
-------------------
Author: Jacob Dearing // jacob.dearing@gmail.com

```
The MIT License (MIT)

Copyright (c) 2015 Jacob Dearing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

[changelog]: https://github.com/dearing/aws-sniffer/blob/master/CHANGELOG.md
[issues]: https://github.com/dearing/aws-sniffer/issues
[releases]: https://github.com/dearing/aws-sniffer/releases
