AWS Sniffer
============

[![forthebadge](http://forthebadge.com/images/badges/for-sharks.svg)](http://forthebadge.com)

Published
---------
- [changelog]
- [releases]

About
---------
When working with federated logins with AWS you may find the 1 hour time out token annoying. So this extension will signal the `background.js` to for a particular cookie and extract the `"exp"` value, format it into something human readable, and when those credentials will expire under the account pulldown at the console.

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

Install
---------
- fork, clone to a working folder.
- load unpacked extension with chrome via chrome://extensions/ with developer mode enabled
- visit a AWS Console page verify the cookie was sniffed out

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
