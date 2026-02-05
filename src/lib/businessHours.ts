export const toBusinessHoursKey = (slug: string) =>
  slug.replaceAll(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());
