export function normalizeString(str: string) {
  return str
    .toLocaleLowerCase('tr-TR')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ı/g, 'i')
    .replace(/i/g, 'i')
    .replace(/I/g, 'i')
}
