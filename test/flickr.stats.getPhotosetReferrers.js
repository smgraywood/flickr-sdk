var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.stats.getPhotosetReferrers', function () {

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetReferrers({
				domain: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "domain"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetReferrers({
				date: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "domain"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getPhotosetReferrers({
			date: '_',
			domain: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.stats.getPhotosetReferrers');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.date, '_');
		assert.equal(req.params.domain, '_');
	});

});
