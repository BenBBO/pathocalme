/**
 * Parse a date string (YYYY-MM-DD) into a Date object at midnight local time.
 */
export function parseEventDate(dateStr) {
  return new Date(dateStr + "T00:00:00");
}

/**
 * Format a date string (YYYY-MM-DD) as a human-readable French date.
 */
export function formatEventDate(dateStr) {
  return parseEventDate(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
