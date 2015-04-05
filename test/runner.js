(function() {
  'use strict';

  if (window._phantom) {
    return;
  }

  var runner;

  runner = mocha.run();

  var failedTests = [];

  function logFailure(test, err) {
    var flattenTitles = function(tmpTest) {
      var titles = [];
      while (tmpTest.parent.title) {
        titles.push(tmpTest.parent.title);
        tmpTest = tmpTest.parent;
      }
      return titles.reverse();
    };

    failedTests.push({
      name: test.title,
      result: false,
      message: err.message,
      stack: err.stack,
      titles: flattenTitles(test)
    });
  }

  runner.on('end', function () {
    window.mochaResults = runner.stats;
    window.mochaResults.reports = failedTests;
  });

  runner.on('fail', logFailure);
}());