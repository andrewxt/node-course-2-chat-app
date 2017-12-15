var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Hanna';
    var text = 'Hey boo';
    var res = generateMessage(from, text);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from,text});
  });
});

describe('generateLocationMessage', () =>  {
  it('should generate correct location object', () => {
    var from = 'Han';
    var latitude = 15;
    var longitide = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitide);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});

  });
});
