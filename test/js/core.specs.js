/* global MyScript */
describe('Core', function() {
  'use strict';
  it('MyScript exsists', function() {
    expect(MyScript).is.not.undefined();
  });
  it('it can send friendly messages', function() {
    var greeting = new MyScript.Greeting();
    expect(greeting.message).is.equal('hi there Dear Coder!');
    // these white spaces will be trimmed
    greeting.message = '   goodbye';
    expect(greeting.message).is.equal('goodbye Dear Coder!');
  });
});