export function toRupiah(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(price);
}

export function shortTitle(title) {
  const words = title.split(" ");
  return words.slice(0, 2).join(" ");
}
