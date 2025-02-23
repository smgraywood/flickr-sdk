var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.collections.getInfo', function () {

	it('requires "collection_id"', function () {

		assert.throws(function () {
			flickr.collections.getInfo({});
		}, function (err) {
			return err.message === 'Missing required argument "collection_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.collections.getInfo({
			collection_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.collections.getInfo');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.collection_id, '_');
	});

});
