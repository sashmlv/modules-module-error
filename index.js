'use strict';

/**
 * Module Error class
 **/
class ModuleError extends Error {

   /**
    * Create a error
    * @param {object} params
    * @param {string} params.name
    * @param {string} params.message
    * @param {string} params.code
    * @param {number} params.status
    * @param {string} params.level
    * @param {*} params.data
    **/
   constructor( params ) {

      super();

      const {
         name,
         message,
         code,
         status,
         level,
         data,
      } = params;

      this.name = name || 'ModuleError';
      this.message = message || 'An error occurred';
      this.code = code || 'ERROR';
      this.status = status || 500;
      this.level = [ 'trace', 'debug', 'info', 'warn', 'error', 'fatal', ].includes( level ) ? level : 'error';
      this.data = data;

      if( Error.captureStackTrace ) {

         Error.captureStackTrace( this, this.constructor );
      }
      else {

         this.stack = ( new Error()).stack;
      };
   };
};

export {

   ModuleError
};