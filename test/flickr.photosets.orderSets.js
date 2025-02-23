var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.orderSets', function () {

	it('requires "photoset_ids"', function () {

		assert.throws(function () {
			flickr.photosets.orderSets({});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_ids"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.orderSets({
			photoset_ids: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photosets.orderSets');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.photoset_ids, '_');
	});

});
