/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    // This is the RSS Feeds test suite
    describe("RSS Feeds", function() {
      // Tests if allfeeds has been defined and that it is not empty
      it("feeds are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      // Tests if allFeeds have a url and that the url is not empty
      it("urls are defined", function() {
        for (var i = 0; i < allFeeds.length; i++) {
          expect(allFeeds[i].url).toBeDefined();
          expect(allFeeds[i].url.length).not.toBe(0);
        }
      });

      // Tests if allFeeds have a name and that the name is not empty
      it("names are defined", function() {
        for (var i = 0; i < allFeeds.length; i++) {
          expect(allFeeds[i].name).toBeDefined();
          expect(allFeeds[i].name.length).not.toBe(0);
        }
      });
    });

    // The Menu test suite
    describe("The Menu", function() {
      // Tests for the class of 'menu-hidden' in the body tag. If true,
      // then the menu is hidden
      it("menu element is hidden", function() {
        expect($("body").hasClass("menu-hidden")).toEqual(true);
      });

      // Toggles on click event if the menu appears or disappears
      it("working toggle on click event", function() {
        // Calls the class of 'menu-icon-link'
        $(".menu-icon-link").trigger("click");
        expect($("body").hasClass("menu-hidden")).toBe(false);
        $(".menu-icon-link").trigger("click");
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
    });

    /// Initial Entries test suite
    describe("Initial Entries", function() {
      // Calls a function to do an asynchronous request
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      // Tests if the loadFeed function has at least a single '.entry' within
      // the '.feed' container
      it("define if feed has at least a single entry", function() {
        expect($(".feed .entry").length).toBeGreaterThan(0);
      });
    });

    // New Feed Selection test suite
    describe("New Feed Selection", function() {
      var firstFeed, secondFeed;

      // Tests to see if the new feed is loaded via the loadFeed function
      beforeEach(function(done) {
        loadFeed(1, function() {
          // Tests if first feed is loaded
          console.log("First feed loaded!");

          // Loads first entry and checks
          firstFeed = $(".feed").html();
          loadFeed(2, function() {
            // Tests if second feed is loaded
            console.log("Second feed loaded!");
            done();
          });
        });
      });

      afterEach(function() {
        loadFeed(0);
      });

      // Tests to see if two entries are not equal
      it("checks if two feeds are different", function() {
        // Checks second feed
        secondFeed = $(".feed").html();
        expect(firstFeed).not.toEqual(secondFeed);
      });
    });
  })()
);
