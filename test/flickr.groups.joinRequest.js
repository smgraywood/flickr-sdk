var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.joinRequest', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.joinRequest({
				message: '_',
				accept_rules: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "message"', function () {

		assert.throws(function () {
			flickr.groups.joinRequest({
				group_id: '_',
				accept_rules: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "message"';
		});

	});

	it('requires "accept_rules"', function () {

		assert.throws(function () {
			flickr.groups.joinRequest({
				group_id: '_',
				message: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "accept_rules"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.joinRequest({
			group_id: '_',
			message: '_',
			accept_rules: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.groups.joinRequest');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.group_id, '_');
		assert.equal(req.params.message, '_');
		assert.equal(req.params.accept_rules, '_');
	});

});
