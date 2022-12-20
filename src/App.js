import "./App.css";
import ImportaDNA from "./ImportaDNA";
import IdentificaSigmano from "./IdentificaSigmano";
import { useState } from "react";
import { TbDna2, TbDna2Off } from 'react-icons/tb';

function App() {
  const [dnaSeq, setDNASeq] = useState("");
  const [resultado, setResultado] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    processa();
  };

  function processa() {
    var inputDNA, importaDNA;
    var flagVerifica = true;

    setResultado(null);

    inputDNA = dnaSeq;

    if (inputDNA) {
      var tamanho = 0;

      inputDNA = inputDNA.split(" ");

      try {
        tamanho = inputDNA[0].length;

        inputDNA.map((linha) => {
          linha = linha.split("");

          //Verifica se os arrays tem tamanhos diferentes
          if (linha.length != tamanho) {
            flagVerifica = false;
          } else {
            //Verifica as letras
            linha.map((coluna) => {
              if (
                coluna != "A" &&
                coluna != "T" &&
                coluna != "C" &&
                coluna != "G"
              ) {
                flagVerifica = false;
              }
            });
          }
        });

        if (flagVerifica) {
          importaDNA = ImportaDNA(inputDNA);

          if (IdentificaSigmano(importaDNA[0], importaDNA[1], importaDNA[2])) {
            setResultado("É sigmano");
          } else {
            setResultado("Não é sigmano");
          }
        } else {
          setResultado("Formato incorreto");
        }
      } catch (error) {
        setResultado("Erro! Verifique o formato");
      }
    } else {
      setResultado("Informe o DNA");
    }
  }

  return (
    <div className="App">
      <h1><TbDna2/></h1>
      <h1>Identificador de Sigmanos</h1>

      <form onSubmit={onSubmit}>
        <label>Digite o DNA separado por espaços:</label>
        <input
          type="text"
          value={dnaSeq}
          onChange={(e) => setDNASeq(e.target.value)}
        ></input>
        <button>Processar</button>
      </form>

      <h2>Resultado:</h2>
      <p>{resultado}</p>
    </div>
  );
}

export default App;
