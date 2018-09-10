// Copyright 2018 foresterre [https://github.com/foresterre]
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
// SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
// OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
// CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

// Perhaps the regex can be completer; but it will do for my purposes for now :)
console.log("Addon reddold is running...")

function rewriteRedditUrl(req) {
  var re = /^(https?:\/\/)www.(reddit.com[/?#]\S*?)$/i
  var url = req.url; //window.location.href;
  var rewrite = url;

  var found = url.match(re);

  if (found != null && found[1] != null && found[2] != null) {
    var old_reddit = found[1] + "old." + found[2];
    console.log("redirecting: " + url + " to: " + rewrite);

    rewrite = old_reddit;
  }

  return {
    redirectUrl: rewrite
  };
}

browser.webRequest.onBeforeRequest.addListener(
  rewriteRedditUrl,
  {urls: ["*://www.reddit.com/*"]}, // redirect this url
  ["blocking"]
);

// docs:
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns