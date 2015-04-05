/* global Greeter */
describe('Core', function() {
  'use strict';
  it('Greeter exsists', function() {
    expect(Greeter).is.not.undefined;
  });
  it('it can send friendly messages', function() {
    var greeter = new Greeter();
    expect(greeter.message).is.equal('hi there Dear Coder!');
    // these white spaces will be trimmed
    greeter.message = '   goodbye';
    expect(greeter.message).is.equal('goodbye Dear Coder!');
  });
});