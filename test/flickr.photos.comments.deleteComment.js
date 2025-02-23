var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.comments.deleteComment', function () {

	it('requires "comment_id"', function () {

		assert.throws(function () {
			flickr.photos.comments.deleteComment({});
		}, function (err) {
			return err.message === 'Missing required argument "comment_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.comments.deleteComment({
			comment_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.comments.deleteComment');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.comment_id, '_');
	});

});
