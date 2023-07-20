export function compareDatesDesc(a: string, b: string) {
  const dateA = new Date(a.replace(/(\d+)(st|nd|rd|th)/, "$1"));
  const dateB = new Date(b.replace(/(\d+)(st|nd|rd|th)/, "$1"));
  return dateB.valueOf() - dateA.valueOf();
}
