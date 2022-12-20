function IdentificaSigmano(matrizDNA, tamLinhaMatriz, tamColunaMatriz) {
  var flagSigmano = false;

  verificaLinha();

  if (!flagSigmano) {
    verificaColuna();
  }

  if (!flagSigmano) {
    verificaDiagonal();
  }

  function verificaLinha() {
    var caractereAnteriorLinha;
    var contadorLinha;

    for (var i = 0; i < tamColunaMatriz; i++) {
      caractereAnteriorLinha = null;
      contadorLinha = 0;

      for (var j = 0; j < tamLinhaMatriz; j++) {
        if (j == 0) {
          caractereAnteriorLinha = matrizDNA[i][j];
          contadorLinha++;
        } else {
          if (contadorLinha < 4) {
            if (caractereAnteriorLinha !== matrizDNA[i][j]) {
              caractereAnteriorLinha = matrizDNA[i][j];
              contadorLinha = 1;
            } else {
              contadorLinha++;
            }
          } else {
            flagSigmano = true;
            contadorLinha++;
          }
        }
      }
    }
  }

  function verificaColuna() {
    var caractereAnteriorColuna;
    var contadorColuna;

    for (var j = 0; j < tamLinhaMatriz; j++) {
      caractereAnteriorColuna = null;
      contadorColuna = 0;

      for (var i = 0; i < tamColunaMatriz; i++) {
        if (j == 0) {
          caractereAnteriorColuna = matrizDNA[i][j];
          contadorColuna++;
        } else {
          if (contadorColuna < 4) {
            if (caractereAnteriorColuna !== matrizDNA[i][j]) {
              caractereAnteriorColuna = matrizDNA[i][j];
              contadorColuna = 1;
            } else {
              contadorColuna++;
            }
          } else {
            flagSigmano = true;
            contadorColuna++;
          }
        }
      }
    }
  }

  function verificaDiagonal() {
    var caractereAnteriorLinha;
    var contadorLinha;

    for (var i = 0; i < tamLinhaMatriz; i++) {
      caractereAnteriorLinha = null;
      contadorLinha = 0;

      for (var j = 0; j < tamColunaMatriz; j++) {
        try {
          if (
            matrizDNA[i][j] == matrizDNA[i + 1][j + 1] &&
            matrizDNA[i][j] == matrizDNA[i + 2][j + 2] &&
            matrizDNA[i][j] == matrizDNA[i + 3][j + 3]
          ) {
            contadorLinha = 4;
            flagSigmano = true;
          }
        } catch (error) {}

        try {
          if (
            matrizDNA[i][j] == matrizDNA[i + 1][j - 1] &&
            matrizDNA[i][j] == matrizDNA[i + 2][j - 2] &&
            matrizDNA[i][j] == matrizDNA[i + 3][j - 3]
          ) {
            contadorLinha = 4;
            flagSigmano = true;
          }
        } catch (error) {}
      }
    }
  }

  return flagSigmano;
}

export default IdentificaSigmano;
