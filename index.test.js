'use strict';

const test = require( 'ava' ),
   fs = require( 'fs' ),
   jsdom = require( 'jsdom' ),
   { JSDOM } = jsdom,
   { ModuleError } = require( './dist' ),
   lib = fs.readFileSync( './dist/index.js', 'utf8' );

test( 'test error', async t => {

   const test = `
const { ModuleError } = moduleError;

class TestError extends ModuleError {

   constructor( params ) {

      super( params );

      this.name = 'TestError';
   };
};

const error = new TestError({

      name: 'unsuccessful',
      message: 'msg',
      code: 'TEST_ERROR',
      status: 200,
      level: 'strange',
   });

window.test = {

   error,
   isInstance: error instanceof TestError,
};`;

   const dom = new JSDOM( `<script>${ lib }${ test }</script>`, { runScripts: 'dangerously' });

   t.deepEqual( dom.window.test.error.name, 'TestError' );
   t.deepEqual( dom.window.test.error.message, 'msg' );
   t.deepEqual( dom.window.test.error.code, 'TEST_ERROR' );
   t.deepEqual( dom.window.test.error.status, 200 );
   t.deepEqual( dom.window.test.error.level, 'error' );
   t.deepEqual( dom.window.test.isInstance, true );

   class TestError extends ModuleError {

      constructor( params ) {

         super( params );

         this.name = 'TestError';
      };
   };

   const error = new TestError({

      name: 'unsuccessful',
      message: 'msg',
      code: 'TEST_ERROR',
      status: 200,
      level: 'strange',
   });

   t.deepEqual( error.name, 'TestError' );
   t.deepEqual( error.message, 'msg' );
   t.deepEqual( error.code, 'TEST_ERROR' );
   t.deepEqual( error.status, 200 );
   t.deepEqual( error.level, 'error' );
   t.truthy( error instanceof TestError );
});
