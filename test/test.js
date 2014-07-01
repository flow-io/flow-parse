
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pStream = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'json/parse', function tests() {
	'use strict';

	it( 'should export a factory function', function test() {
		expect( pStream ).to.be.a( 'function' );
	});

	// For additional tests, see https://github.com/dominictarr/JSONStream/tree/master/test

});