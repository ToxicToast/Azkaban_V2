const dateFormatters: { [key: string]: Intl.DateTimeFormat } = {};

const getDateFormatterInstance = (
  language: string,
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat => {
  const key = `${language}-${JSON.stringify(options)}`;
  if (!dateFormatters[key]) {
    dateFormatters[key] = new Intl.DateTimeFormat(language, options);
  }
  return dateFormatters[key];
};

export function shortDateFormater(date: Date, language: string): string {
  return getDateFormatterInstance(language, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}
