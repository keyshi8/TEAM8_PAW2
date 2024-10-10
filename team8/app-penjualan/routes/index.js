var express = require('express');
var router = express.Router();

// Route untuk menampilkan form pemesanan
router.get('/pemesanan', function(req, res, next) {
  res.render('pemesanan', { title: 'Form Pemesanan', layout: 'main' });
});

// Route untuk menangani pengiriman form pemesanan
router.post('/pemesanan', function(req, res, next) {
  const { nama, email, pesanan, jumlah, total } = req.body;

  // Logika untuk menangani pemesanan (misalnya, simpan ke database, dll.)
  console.log(`Pemesanan dari ${nama}, Email: ${email}, Pesanan: ${pesanan}, Jumlah: ${jumlah}, Total: ${total}`);

  res.render('pemesanan', {
    title: 'Form Pemesanan',
    successMessage: 'Pemesanan berhasil dilakukan!',
    layout: 'main' // Keep the layout for consistency
  });
});

module.exports = router;
