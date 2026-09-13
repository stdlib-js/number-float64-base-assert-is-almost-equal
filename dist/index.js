/** @license Apache-2.0 */

'use strict';

/**
* Test if two double-precision floating-point numbers are approximately equal within a specified number of ULPs (units in the last place).
*
* @module @stdlib/number-float64-base-assert-is-almost-equal
*
* @example
* var EPS = require( '@stdlib/constants-float64-eps' );
* var isAlmostEqual = require( '@stdlib/number-float64-base-assert-is-almost-equal' );
*
* var bool = isAlmostEqual( 1.0, 1.0+EPS, 1 );
* // returns true
*
* bool = isAlmostEqual( 1.0+EPS, 1.0, 1 );
* // returns true
*
* bool = isAlmostEqual( 1.0, 1.0+EPS+EPS, 1 );
* // returns false
*
* bool = isAlmostEqual( 1.0, 1.0+EPS, 0 );
* // returns false
*
* bool = isAlmostEqual( 0.0, -0.0, 0 );
* // returns true
*
* bool = isAlmostEqual( 1.0, NaN, 1 );
* // returns false
*
* bool = isAlmostEqual( NaN, NaN, 1 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
