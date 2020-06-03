'use strict';

const test = require( 'ava' ),
   { ModuleError } = require( './index' );

class TestError extends ModuleError {

   constructor( params ) {

      super( params );

      this.name = 'TestError';
   };
};

test( 'test error', async t => {

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
