# Reddold

Reddold is a WebExtension which redirects reddit urls like
`https://www.reddit.com/*` to `https://old.reddit.com/*`.

It has been tested on Firefox and Vivaldi, but it should also be compatible with at least Chrome/Chromium and Edge.

The redirection happens before the original request completes.
That is, it doesn't wait for `https://www.reddit.com/*` to load before redirecting
to `https://old.reddit.com/*`.

#### Install

Install it from addons.mozilla.org [here](https://addons.mozilla.org/en-US/firefox/addon/reddold/) or manually download a
release from [here](https://github.com/foresterre/reddold/releases).

#### License

Reddold is licensed under the terms of the [ISC license](LICENSE).

