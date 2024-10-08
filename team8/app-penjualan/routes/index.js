var express = require('express');
var router = express.Router();

// Route untuk menampilkan form pemesanan
router.get('/pemesanan', function(req, res, next) {
  res.render('pemesanan', { title: 'Form Pemesanan', layout:'main'})
  //res.send('tes');
});

// Route untuk menangani pengiriman form pemesanan
router.post('/pemesanan', function(req, res, next) {
  const { nama, email, produk, jumlah } = req.body;

  // Logika untuk menangani pemesanan (misalnya, simpan ke database, dll.)
  console.log(`Pemesanan dari ${nama}, Email: ${email}, Produk: ${produk}, Jumlah: ${jumlah}`);

  res.render('pemesanan', {
    title: 'Form Pemesanan',
    // layout: 'main',
    successMessage: 'Pemesanan berhasil dilakukan!'
  });
});

module.exports = router;
