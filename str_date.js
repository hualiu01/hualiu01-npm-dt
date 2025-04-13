import { format } from 'date-fns';

/**
 * Formats a given date as a string based on the provided format options.
 *
 * @param {Date} date - The date to format.
 * @param {string} [formatOptions] - An string of format tokens to customize the output.
 * Supported values:
 * - 'i': ISO day of the week as a number (1 = Monday, 7 = Sunday).
 * - 'ii': Padded ISO day of the week (e.g., "01", "07").
 * - 'iii': Abbreviated day name (e.g., "Mon", "Tue").
 * - 'iiii': Full day name (e.g., "Monday", "Tuesday").
 *
 * @returns {string} - The formatted date string.
 */
export function formatDateOfWeekAsString(date, formatOptions) {
    return format(date, formatOptions)
}

/**
 * Formats the date for a specific number of days ago.
 *
 * @param {Date} date - The reference date from which to calculate.
 * @param {number} n - The number of days to subtract from the reference date.
 *
 * @returns {Date} - The date of n days agon.
 *
 * @example
 * // Example usage:
 * const formattedDate = formatNDaysAgo(new Date(), 7);
 * console.log(formattedDate); // Outputs the date 7 days ago.
 */
export function getNDaysAgo(date, n) {
    let nDaysAgo = new Date(date);
    nDaysAgo.setDate(nDaysAgo.getDate() - n);
    return nDaysAgo
}

/**
 * Formats a given date as a string based on the provided format options.
 *
 * @param {Date} date - The date to format.
 * @param {string} formatOption - A string of format tokens to customize the output.
 * Supported format tokens:
 * - 'yyyy-MM-dd': Full year, month, and day (e.g., "2025-04-13").
 * - 'yy-MM-dd': Two-digit year, month, and day (e.g., "25-04-13").
 * - 'MMMM d, yyyy': Full month name, day, and year (e.g., "April 13, 2025").
 * - 'EEE, MMM d, yyyy': Abbreviated weekday, abbreviated month, day, and year (e.g., "Sun, Apr 13, 2025").
 * - 'hh:mm:ss a': Hour, minute, second, and AM/PM (e.g., "02:45:30 PM").
 * - 'HH:mm:ss': Hour, minute, and second in 24-hour format (e.g., "14:45:30").
 *
 * @returns {string} - The formatted date string.
 *
 * @example
 * // Example usage:
 * const now = new Date();
 * console.log(formatDatetime(now, 'yyyy-MM-dd')); // Outputs: "2025-04-13"
 * console.log(formatDatetime(now, 'hh:mm:ss a')); // Outputs: "02:45:30 PM"
 */
export function formatDatetime(date, formatOption) {
    return format(date, formatOption);
}

if (import.meta.url === `file://${process.argv[1]}`) {
    // This block will only run if the file is executed directly
    console.log("This script str_date.js is being run directly.");

    const divN = 20

    console.log('-'.repeat(divN));
    const today = formatDateOfWeekAsString(new Date(), "iiii");
    console.log(`Today is a ${today}`);

    console.log('-'.repeat(divN));
    const nDaysAgo = getNDaysAgo(new Date(), 7);
    console.log(`7 days ago was ${nDaysAgo}`);

    console.log('-'.repeat(divN));
    console.log(formatDatetime(nDaysAgo,'yyyy-MM-dd'));
    console.log(formatDatetime(nDaysAgo,'yy-MM-dd'));
    console.log(formatDatetime(nDaysAgo,'MMMM d, yyyy'));
    console.log(formatDatetime(nDaysAgo,'EEE, MMM d, yyyy'));
    console.log(formatDatetime(nDaysAgo,'hh:mm:ss a'));
    console.log(formatDatetime(nDaysAgo,'HH:mm:ss'));
} else {
    // This block will run if the file is imported as a module
    console.log("This script str_date.js is being imported as a module.");
}