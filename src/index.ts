//Convert numbers
function convertToPersian(number: number | string): string {
  return number
    .toString()
    .replace(
      /\d/g,
      (x: string | number) =>
        ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"][x as number]
    );
}

export default convertToPersian;
