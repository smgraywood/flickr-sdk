var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.setTags', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.setTags({ photo_id: '_', tags: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setTags({ api_key: '_', tags: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "tags"', function () {

		assert.throws(function () {
			flickr.photos.setTags({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tags"';
		});

	});

	it('calls the correct API method');

});
