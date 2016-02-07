import helpers from './helpers/helpers'

/**
 * An awesome script
 */
export default class {
  constructor(name = 'Dear Coder', text = 'hi there') {
    this.name = name
    this.text = text
  }
  get message() {
    return `${this.text} ${this.name}!`
  }
  set message(text) {
    this.text = helpers.trim(text)
  }
}