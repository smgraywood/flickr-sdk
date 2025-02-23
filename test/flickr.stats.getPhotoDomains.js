var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.stats.getPhotoDomains', function () {

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoDomains({});
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getPhotoDomains({
			date: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.stats.getPhotoDomains');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.date, '_');
	});

});
