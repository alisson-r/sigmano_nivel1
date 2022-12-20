function ImportaDNA(dna) {
  var tamLinhaMatriz = 0;
  var tamColunaMatriz = dna.length;
  var matrizDNA = setMatrizDNA(dna);

  tamLinhaMatriz = getTamLinha(dna);

  function getTamLinha(dna) {
    dna.map((baseNitrogenada) => {
      if (tamLinhaMatriz < baseNitrogenada.length) {
        tamLinhaMatriz = baseNitrogenada.length;
      }
    });

    return tamLinhaMatriz;
  }

  function setMatrizDNA(dna) {
    return dna.map((baseNitrogenada) => baseNitrogenada.split(""));
  }

  return [matrizDNA, tamLinhaMatriz, tamColunaMatriz];
}

export default ImportaDNA;
