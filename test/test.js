const expect = require('chai').expect;

describe('test', () => {
  it('should return a string', () => {
    expect('CI with Travis').to.equal('CI with Travis');
  });
});
