const teknisiData = {
  "Lumajang": [
    "Budi Elektronik - 0812-xxx",
    "Slamet Service TV - 0821-xxx"
  ],
  "Tempeh": [
    "Rudi Elektrik - 0813-xxx"
  ],
  "Yosowilangun": [
    "Anto - 0896-xxx"
  ],
  "Klakah": [
    "Wawan Audio - 0877-xxx"
  ]
};

function showTechs(kecamatan) {
  const output = document.getElementById('output');
  const data = teknisiData[kecamatan];
  if (data) {
    output.innerHTML = `<h2>Teknisi di ${kecamatan}</h2><ul>` +
      data.map(nama => `<li>${nama}</li>`).join('') +
      `</ul>`;
  } else {
    output.innerHTML = `<p>Belum ada data teknisi untuk ${kecamatan}.</p>`;
  }
}
