/**
 * @module hepers
 * All the helper functions needed in this project
 */
export default {
  /**
   * Returns a new string in which all leading and trailing occurrences of a set of specified characters from the current String object are removed.
   * @param  { String } string
   * @return { String }
   */
  trim: function(string) {
    return string.replace(/^\s+|\s+$/gm, '');
  }
};