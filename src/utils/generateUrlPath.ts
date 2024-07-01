// Türkçe karakterleri İngilizce karakterlere çevirme haritası
const turkishToEnglishMap: { [key: string]: string } = {
  ç: 'c',
  ğ: 'g',
  ı: 'i',
  ö: 'o',
  ş: 's',
  ü: 'u',
  Ç: 'C',
  Ğ: 'G',
  İ: 'I',
  Ö: 'O',
  Ş: 'S',
  Ü: 'U',
};

export function generateUrlPath(text: string): string {
  const convertTurkishChars = (char: string) =>
    turkishToEnglishMap[char] || char;

  return text
    .split('')
    .map(convertTurkishChars)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
