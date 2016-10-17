var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.setPrimaryPhoto', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.setPrimaryPhoto({ photoset_id: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.setPrimaryPhoto({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.setPrimaryPhoto({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('calls the correct API method');

});
