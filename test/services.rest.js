var Subject = require('../services/rest');
var Request = require('../lib/request').Request;
var assert = require('assert');
var parse = require('url').parse;

describe('services/rest', function () {
	var subject;

	function auth() { /* noop for tests */ }

	beforeEach(function () {
		subject = new Subject(auth);
	});

	it('does not require "new"', function () {
		assert(Subject(auth) instanceof Subject);
	});

	it('returns a superagent Request', function () {
		assert(subject._('flickr.test.echo') instanceof Request);
	});

	it('throws if required parameters are not provided', function () {
		assert.throws(function () {
			new Subject(); // eslint-disable-line no-new
		}, function (err) {
			return err.message === 'Missing required argument "auth"';
		});

		assert.doesNotThrow(function () {
			new Subject(auth); // eslint-disable-line no-new
		});
	});

	it('can provide the host as an option', function () {
		var req, url;

		subject = new Subject(auth, {
			host: 'www.flickr.com'
		});

		req = subject._('GET', 'flickr.test.echo');
		url = parse(req.url);

		assert.equal(url.host, 'www.flickr.com');
	});

	it('adds default request headers', function () {
		var req = subject._('GET', 'flickr.test.echo').request();

		/*
			TODO user-agent
		*/

		assert.equal(req.getHeader('x-flickr-api-method'), 'flickr.test.echo');
	});

	it('uses the correct path', function () {
		var req = subject._('GET', 'flickr.test.echo');
		var url = parse(req.url);

		assert.equal(url.pathname, '/services/rest');
	});

	it('uses the correct host', function () {
		var req = subject._('GET', 'flickr.test.echo');
		var url = parse(req.url);

		assert.equal(url.host, 'api.flickr.com');
	});

	it('adds default query string arguments', function () {
		var req = subject._('GET', 'flickr.test.echo').request();
		var url = parse(req.path, true);

		assert.equal(url.query.method, 'flickr.test.echo');
		assert.equal(url.query.format, 'json');
		assert.equal(url.query.nojsoncallback, '1');
	});

	it('adds additional query string arguments', function () {
		var req = subject._('GET', 'flickr.test.echo', { foo: 'bar' }).request();
		var url = parse(req.path, true);

		assert.equal(url.query.method, 'flickr.test.echo');
		assert.equal(url.query.format, 'json');
		assert.equal(url.query.nojsoncallback, '1');
		assert.equal(url.query.foo, 'bar');
	});

	it('joins "extras" if passed as an array', function () {
		var req = subject._('GET', 'flickr.test.echo', {
			extras: [
				'foo',
				'bar',
				'baz'
			]
		}).request();

		var url = parse(req.path, true);

		assert.equal(url.query.method, 'flickr.test.echo');
		assert.equal(url.query.format, 'json');
		assert.equal(url.query.nojsoncallback, '1');
		assert.equal(url.query.extras, 'foo,bar,baz');
	});

});
