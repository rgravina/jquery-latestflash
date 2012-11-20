jQuery Latest Flash Plugin 
===================

A jQuery plugin which returns the latest version of Flash for a given operating system, version and browser.

Usage
-----

Call with OS, OS version, and browser. As of this writing, Windows is the only platform where OS version effects the latest flash version:

```javascript
$.latestFlash('windows', '7', 'ie')
"11.5.502.110"

$.latestFlash('windows', '8', 'ie')
"11.3.376.12"
```

For all other operating systems, the version number is effectively ignored - so passing in null is OK.

```javascript
$.latestFlash('mac', null, 'chrome')
"11.5.31.2"
$.latestFlash('mac', '10.7', 'chrome')
"11.5.31.2"
```

List of OS and Browser names
-----

OS names must be one of 'windows', 'mac' , 'linux' or 'solaris'.

Browser names must be one of "firefox", "mozilla", "netscape", "opera", "safari" or "seamonkey".

Notes
-----
There are many good libraries for detecting the users OS, version and browser so this functionality not provided by this libarary.

This is not automatically updated from [Adobe's site](http://www.adobe.com/software/flash/about/), but requires manually updating whenever Adobe changes their latest version numbers. To the best of my knowledge, there is no machine readable form of these values.

If you have updated the latest versions yourself, or have implemeneted a way to updating these from Adobe's site - please submit a pull request!

Copyright and License
---------------------
jquery.latestflash.js © 2012 by Robert Gravina. jquery.latestflash.js is licensed under the MIT license. Please see the LICENSE document for more information.
