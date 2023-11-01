import { useState } from 'react';
import "./App.css"

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');

  const calculateImc = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setImc(imc.toFixed(2));
  };

  function Tabela() {
    if (imc < 18.5)
      return ("Magreza")
    else if (imc >= 18.5 && imc <= 24.9)
      return ("Normal")
    else if (imc > 24.9 && imc <= 29.9)
      return ("Sobrepeso")
    else if (imc > 30 && imc <= 34.9)
      return ("Obesidade Grau I")
    else if (imc > 34.9 && imc <= 39.9)
      return ("Obesidade Grau II")
    else if (imc > 39.9)
      return ("Obesidade Grau III")
    else return ("tente novamente")
  }
  
  return (
    <>
      <div className='container'>
        <aside>
          <h2><strong>O que é IMC</strong><br /></h2>
          <p>IMC é a sigla de Índice de Massa Corporal, um parâmetro que é utilizado para avaliar se o peso está dentro do valor ideal para a altura.
            Isso significa que, a partir do resultado do IMC é possível saber se a pessoa está acima ou abaixo do peso recomendado e também diagnosticar problemas de saúde como obesidade ou desnutrição.
            O IMC pode ser utilizado em crianças, adolescentes, adultos ou idosos.</p>
          <img src="" alt="" />
          <h2>IMC	Classificação </h2>
          <p className='tabela'>Menor que 18,5	Magreza <br />
            18,5 a 24,9	Normal <br />
            25 a 29,9	Sobrepeso <br />
            30 a 34,9	Obesidade grau I <br />
            35 a 39,9	Obesidade grau II <br />
            Maior que 40	Obesidade grau III</p>
        </aside>
        <main>
          <div>
            <p>O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em m), de acordo com a seguinte fórmula: IMC = peso / (altura x altura).</p>
          </div>
          <section>
            <h2>Calculadora de IMC</h2>
            <div>
              <label>altura (cm): </label>
              <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            </div>
            <div>
              <label>peso (kg): </label>
              <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </div>
            <button onClick={calculateImc}>Calcular IMC</button>
            {imc && <p className='resultado'>Seu IMC é: {imc}, {Tabela()}</p>}
            { }
          </section>
          <div>
            <h2><strong>Por que é importante saber o IMC?</strong></h2>
            <p>
              Saber o IMC é importante para verificar se o peso está de acordo com a altura da pessoa, além de ser importante para saber se existe risco de desenvolver alguma doença. No caso das crianças, o IMC é importante para saber se o desenvolvimento está de acordo com o esperado.
  
              Além disso, sabendo o IMC, é possível também verificar qual o peso ideal e, assim, saber se a pessoa está acima ou abaixo do peso recomendado para a sua altura.</p>
          </div>
        </main>
      </div>
    </>
  );
}


export default App
