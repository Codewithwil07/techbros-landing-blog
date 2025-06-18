export function formatDate(dateString: string | Date | null): string {
  if (!dateString) return "Tanggal tidak tersedia";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Tanggal tidak valid";

  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",    
  });
}
