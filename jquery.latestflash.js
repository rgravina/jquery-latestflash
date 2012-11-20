(function($) {
  /* List of latest flash versions from: http://www.adobe.com/software/flash/about/ */
  $.latestFlash = function(os, os_version, browser) {
    if ($.inArray(os, ["windows", "mac", "linux", "solaris"]) == -1) {
      $.error("OS must be one of: 'windows', 'mac' , 'linux' or 'solaris'.");
      return;
    }
    
    switch(os) {
      case "windows":
        if (browser == "ie") {
          if (os_version == 8) {
            return "11.3.376.12";
          } else {
            return "11.5.502.110";
          }
        };
        if ($.inArray(browser, ["firefox", "mozilla", "netscape", "opera"]) != -1) {
          return "11.5.502.110";
        };
        if (browser == "chrome") {
          return "11.5.31.2";
        };
        break;
      case "mac":
        if ($.inArray(browser, ["firefox", "opera", "safari"]) != -1) {
          return "11.5.502.110";
        };
        if (browser == "chrome") {
          return "11.5.31.2";
        };
        break;
      case "linux":
        if ($.inArray(browser, ["firefox", "mozilla", "seamonkey"]) != -1) {
          return "11.2.202.251";
        };
        if (browser == "chrome") {
          return "11.5.31.2";
        };
        break;
      case "solaris":
        return "11.2.202.223";
        break;
      default:
        $.error("Unknown OS, OS version and browser combination.");
    }
  };
})(jQuery);