/**
 * Truncates a text string to a specified maximum length.
 *
 * @param {string} txt - The text to be sliced.
 * @param {number} max - The maximum number of characters allowed.
 * @returns {string} The sliced text with "..." appended if it exceeds the max length.
 */

export function txtSlicer(txt: string,max :number){
    if(txt.length >= max) return `${txt.slice(0,max)} ...`;
    return txt;
}