export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")    // hilangkan karakter aneh
    .replace(/\s+/g, "-")            // ganti spasi jadi -
    .replace(/-+/g, "-");            // hilangkan multiple -
}
