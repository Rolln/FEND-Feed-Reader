# Project Overview

In this test-driven development (TDD) project I am given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! I am here to finish testing the entire application. 

## How to run this project

Download the repo: [JavaScript TDD](https://github.com/Rolln/FEND-Feed-Reader.git).

Next open the `index.html` file and run the tests. 

## Tests implemented for this project

1. Tests for `allFeeds` object was defined and the URLs are not empty.
2. Tests for `allFeeds` object was defined and it has a name defined and that the name is not empty.
3. A new test suite named `"The menu"` is described
    * Test for `menu-hidden` element was definted and is hidden by default.
    * Test for `click` event was defined and toggles menu as hidden or not.
4. Test suite named `"Initial Entries"` is described
    * Test `loadFeed` is defined and there is at least a single `.entry` element within the `.feed` container.
5. Test suite named `"New Feed Selection"` is described
    * Test for `feed` element is defined to check and see if the first feed is different from the next feed, that no two feeds are equal.


# MIT LICENSE

Copyright (c) 2019 Roland Lopes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
