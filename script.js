document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nomor = document.getElementById('nomor').value;
  const paket = document.getElementById('paket').value;
  const pesan = `Halo admin, saya mau beli paket:\n\nNomor XL: ${nomor}\nPaket: ${paket}\n\nSudah saya bayar ke 082338559968 (Jovian R).`;
  const url = `https://wa.me/6282338559968?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
});
