'use strict';

import helpers from './helpers/helpers';

/**
 * @class
 * An awesome script
 */
class Greeting {
  constructor(name = 'Dear Coder', text = 'hi there') {
    this.name = name;
    this.text = text;
  }
  get message() {
    return `${this.text} ${this.name}!`;
  }
  set message(text) {
    this.text = helpers.trim(text);
  }
}

export default {
  helpers,
  Greeting
};