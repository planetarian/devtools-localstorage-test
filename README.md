## devtools-localstorage-test

This is a simple extension to test whether localStorage changes are being propagated from a content page to custom devtools panels.

### Usage

1. Load the unpacked extention
2. Click the extension's icon and click 'content.html' in the popup
3. The content page will open, and it will set localStorage.foo to 'bar'. The result will be displayed on the page.
4. With the page still focused, open devtools to the DevTools Test tab.

In the custom panel page that opens (devtools.html), it will display the current value of localStorage.foo, which should be the same on both pages.

