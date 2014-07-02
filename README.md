flow-parse
==========

Thin wrapper for [JSONStream](https://github.com/dominictarr/JSONStream) parse.


## Installation

``` bash
$ npm install flow-parse
```


## Examples

``` javascript
var eventStream = require( 'event-stream' ),
	pStream = require( 'flow-parse' );

// Create a new stream, passing along an optional error handler:
var stream = pStream()
	.stream( onError );

// Create the pipeline:
stream.pipe( eventStream.stringify() )
	.pipe( process.stdout );

// Write data to the stream:
stream.write( "{ \"x\": 0, \"y\": 0 }" );
stream.end();

// Error handler:
function onError( error ) {
	if ( error ) {
		console.error( error.stack );
		throw new Error( 'Error!!!' );
	}
}
```

## Tests

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions.

Assuming you have installed Mocha, execute the following command in the top-level application directory to run the tests:

``` bash
$ mocha
```

All new feature development should have corresponding unit tests to validate correct functionality.


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.

