// Data dummy pengumuman
const pengumuman = [
    {
      judul: "Ujian Laporan PKL",
      isi: "Ujian akan dilaksanakan mulai tanggal 17 Mei 2025. Mohon seluruh siswa mempersiapkan diri.",
      tanggal: "17 Mei 2025"
    },
    {
      judul: "Cuti Bersama",
      isi: "Sekolah akan libur pada tanggal 12-13 Mei 2025 dalam rangka Hari Kenaikan Isa Almasih.",
      tanggal: "13 Mei 2025"
    },
    {
      judul: "Bimbingan Laporan PKL",
      isi: "Bimbingan Laporan PKL dibuka hingga 15 Mei 2025. Silakan Bimbingan dengan guru pembimbing masing masing.",
      tanggal: "4 Mei 2025"
    }
  ];
  
  // Menampilkan card ke halaman
  const container = document.getElementById("pengumuman-container");
  
  pengumuman.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.judul}</h3>
      <p>${item.isi}</p>
      <p class="date">Tanggal: ${item.tanggal}</p>
    `;
    container.appendChild(card);
  });
  