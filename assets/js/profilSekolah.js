const visi =
  "Terwujudnya lulusan SMK Hang Tuah 1 Jakarta yang Nasionalis, Religius, Mandiri, Kompeten, Juara, Berjiwa Bahari, dan Berwawasan Global sehingga Mampu BMW (Bekerja, Melanjutkan Kuliah dan Wirausaha).";

const misi = [
  "Menyelenggarakan pendidikan yang berorientasi untuk membentuk karakter peserta didik yang Nasionalis, Religius, Mandiri, Kompeten, dan Juara",
  "Membekali peserta didik dengan IMTAQ & IPTEK, jiwa bahari dan wawasan global",
  "Meningkatkan mutu pendidik, tenaga kependidikan, sarana/prasrana sekolah, dan manajemen sekolah unluk meningkatkan pelayananyan yang unggul",
  "Meningkatkan kolaborasi dengan mitra industri dan pemangku kepentingan lainnya dalam mendukung program-program sekolah",
  "Memfasilitasi peserla didik agar Mampu BMW (Bekeria, Melanjulkan Kuliah atau Wirasuaha)",
];

const sarana =[
  "Kelas ber-AC", "Lab.Komputer", "Perpustakaan", "Teaching Factory", "Lapangan Olahraga", "Mesjid", "Kantin"
]

const container = document.getElementById("visi-misi-container");

const visiCard = `
                <div class="card">
                    <h2>Visi</h2>
                    <p>${visi}</p>
                </div>
        `;

const misiItems = misi.map((item) => `<li>${item}</li>`).join("");

const misiCard = `
            <div class="card">
                <h2>Misi</h2>
                <ul class="misi-list">
                ${misiItems}
                </ul>
            </div>
        `;

container.innerHTML = visiCard + misiCard;


// const sarana = [
//  "Kelas ber-AC", "Lab.Komputer", "Perpustakaan", "Teaching Factory", "Lapangan Olahraga", "Mesjid", "Kantin"
// ];

// const container = document.getElementById('sarana-container');

// saranaPembelajaran.forEach((item, index) => {
//   const card = document.createElement('div');
//   card.className = 'card';
//   card.innerHTML = `<h3>${item}</h3>`;
//   container.appendChild(card);
// });
