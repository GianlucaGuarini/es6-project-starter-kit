/* global Greeter */
describe('Core', function() {
  it('Greeter exsists', () => expect(Greeter).is.not.undefined )

  it('it can send friendly messages', () => {
    var greeter = new Greeter()
    expect(greeter.message).is.equal('hi there Dear Coder!')
    // these white spaces will be trimmed
    greeter.message = '   goodbye         '
    expect(greeter.message).is.equal('goodbye Dear Coder!')
  })
})