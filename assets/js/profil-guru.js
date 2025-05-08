const guruData = {
    nip: "1234567890",
    nama: "Vinda, S.Pd",
    ttl: "Jakarta, 1 Januari 1985",
    agama: "Islam",
    alamat: "Jl. Raya No. 10, Jakarta",
    mataPelajaran: "Rekayasa Perangkat Lunak"
};

document.getElementById('guru-photo').src = guruData.foto;
document.getElementById('nip').textContent = guruData.nip;
document.getElementById('nama').textContent = guruData.nama;
document.getElementById('ttl').textContent = guruData.ttl;
document.getElementById('agama').textContent = guruData.agama;
document.getElementById('alamat').textContent = guruData.alamat;
document.getElementById('mata-pelajaran').textContent = guruData.mataPelajaran;