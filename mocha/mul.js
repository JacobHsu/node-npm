var assert = require('assert');

function mul(a, b) {
    // return the product of a and b without using *
    if (b == 0) {
        return 0;
    }
    var product = 0;
    for (var i = 0; i < b; ++i) {
        product = product + a;
    }

    return product;
}


describe('#product', function () {
    it('return the product of two integers', function () {
        assert.equal(mul(1, 0), 0);
        assert.equal(mul(0, 1), 0);
        assert.equal(mul(1, 0), 0);
        assert.equal(mul(2, 2), 4);
        assert.equal(mul(5, 5), 25);
    });
});
