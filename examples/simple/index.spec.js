/* eslint-env mocha */

console.log('running');
describe('main', function () {
    console.log('inside describe');
    describe('#endsWith()', function () {
        console.log('inside endswith');
        it('should return true when the value ends with the suffix', function () {
            assert.equal(true, endsWith("abcd", "cd"));
        });

        it('should return false when the value does not end with the suffix', function () {
            assert.equal(false, endsWith("abcd", "cde"));
        });
    });
});
