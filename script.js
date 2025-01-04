function kirimPesan() {
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    const nomorWA = '+6282164503296';

    if (nama && pesan) {
        const urlWA = `https://api.whatsapp.com/send?phone=${nomorWA}&text=Halo,%20saya%20${encodeURIComponent(nama)}.%0A%20%20${encodeURIComponent(pesan)}`;
        window.open(urlWA,'_blank');
    } else {
        alert('Silakan isi nama dan pesan terlebih dahulu.');
    }
}