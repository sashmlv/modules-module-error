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
    * @param {*} params.data
    **/
   constructor( params ) {

      super();

      const {
         name,
         message,
         code,
         status,
         data,
      } = params;

      this.name = name || 'ModuleError';
      this.message = message || 'An error occurred';
      this.code = code || 'ERROR';
      this.status = status || 500;
      this.data = data;
      this.stack = ( new Error()).stack;
   };
};

module.exports = ModuleError;