import DOMPurify from 'dompurify';

// Check if window object is defined to determine if it's a browser environment
const isBrowser = typeof window !== 'undefined';

/**
 * Sanitize markup or text when used inside dangerouslySetInnerHTML
 *
 * @param {string} content Plain or HTML string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
  return isBrowser ? DOMPurify.sanitize(content) : content;
};

/**
 * Get Singular or plural text.
 *
 * @param {Int} count Count.
 * @param {String} text Text.
 *
 * @returns {string} Singular or plural form of text.
 */
export const getSingularOrPluralText = (count, text) => {
  return count > 1 ? `${text}s` : text;
};
