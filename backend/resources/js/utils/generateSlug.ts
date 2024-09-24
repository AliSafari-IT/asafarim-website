// Generate a slug from a string
// D://Ampps/www/source/projects/asafarim/backend/resources/js/utils/generateSlug.ts
const generateSlug = (target: string, existingSlugs: Set<string> = new Set()) => {
  // Ensure the target is a string
  if (typeof target !== 'string') {
    target = String(target); // Convert non-string target to string
  }

  const text = target.toLowerCase();
  // Delete all but number and alphabet string
  const filterdText = text.replace(/[^a-zA-Z0-9]/g, ' ');
  let textArray = filterdText.split(/\s|\n\t/g);
  textArray = textArray.filter((text: string) => text !== '');

  let slug = textArray.join('-');

  // If the slug already exists in the set, then
  if (existingSlugs.has(slug)) {
    existingSlugs.delete(slug); // Keep track of slugs to detect duplicates
  }
  return slug;
};

export default generateSlug;
