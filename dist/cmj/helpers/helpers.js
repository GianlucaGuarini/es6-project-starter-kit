exports.__esModule = true;
/**
 * @module hepers
 * All the helper functions needed in this project
 */
exports['default'] = {
  /**
   * Returns a new string in which all leading and trailing occurrences of a set of specified characters from the current String object are removed.
   * @param  { String } string
   * @return { String }
   */
  trim: function trim(string) {
    return string.replace(/^\s+|\s+$/gm, '');
  }
};
module.exports = exports['default'];