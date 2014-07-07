'use strict';

import helpers from './helpers/helpers';

/**
 * @class
 * An awesome script
 */
class Greeging {
  constrictor() {
    this.message = 'hi there!';
  }
  get message() {
    return this.message;
  }
  set message(message) {
    this.message = message;
  }
}

/*
 * This example returns an object,
 * but the module can return a function as the exported value.
 * @api
 */
export default {
  helpers,
  /**
   * Returns a welcome string
   * @return { String }
   */
  Greeging
};