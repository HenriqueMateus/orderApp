import Head from 'next/head'
import { useState, useEffect } from 'react'
import insetion from '../modules/insertion'
import bubble from '../modules/bubble'
import calculoTempoExecucao from '../modules/tempoExecucao'
import selection from '../modules/selection'
import bucketSort from '../modules/bucket'

export default function Home() {
  const [resultado, setResultado] = useState({tempoExecucao: 0.00, vetorOrdenado: [0,0,0,0]})
  const [ordenacao, setOrdenacao] = useState(' ')
  const [vetor, setVetor] = useState([])
  const [contador, setContador] = useState(0)
  useEffect(() => { }, [resultado, ordenacao, vetor])
  const handleChange = (event) => {
    event.preventDefault();
    let vet = event.target.value.split(',')
    setVetor(vet)
  }
  
  function ordenar() {
    const registroOrdenacao = ordenacao
    const registroVetor = vetor
    const registroResultado = {}
    const vetorInt = registroVetor.map(element => {
      let intpar = parseInt(element)
      return intpar
    });
    let vetorOrder = []
    let inicio
    let resultadoTemp = '';
    if (registroOrdenacao === 'insetion') {
      let {resultado, tempoGasto} = calculoTempoExecucao({func:()=> insetion(vetorInt)})
      vetorOrder = resultado
      resultadoTemp = tempoGasto
    } else if (registroOrdenacao === 'bubble'){
      let {resultado, tempoGasto} = calculoTempoExecucao({func:()=>bubble(vetorInt)})
      vetorOrder = resultado
      resultadoTemp = tempoGasto
    } else if (registroOrdenacao === 'selection'){
      let {resultado, tempoGasto} = calculoTempoExecucao({func:()=> selection(vetorInt)})
      vetorOrder = resultado
      resultadoTemp = tempoGasto
    } else if (registroOrdenacao === 'bucket'){
      let {resultado, tempoGasto} = calculoTempoExecucao({func:()=> bucketSort(vetorInt)})
      vetorOrder = resultado
      resultadoTemp = tempoGasto
    }
    let vetorOrdenadoStr = ''
    for(let i = 0; i< vetorOrder.length; i++){
      if(i != vetorOrder.length-1) vetorOrdenadoStr += vetorInt[i] + ','
      else{
        vetorOrdenadoStr += vetorInt[i]
      }
    }
    console.log(resultadoTemp)
    registroResultado.tempoExecucao = resultadoTemp
    registroResultado.vetorOrdenado = vetorOrdenadoStr
    console.log(registroResultado)
    setResultado(registroResultado)

  }
  return (
    <div className="container">
      <Head>
        <title>Ordenação</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <br />

        <label htmlfor="vetor">Conjunto de Numeros</label>
        <input type="text" onChange={(event) => handleChange(event)}></input>

        <label>
          Escolha o metodo de ordenacao:
          <select value={ordenacao} onChange={(event) => setOrdenacao(event.target.value)}>
            <option selected="selected"> </option>
            <option value="insetion">Insetion</option>
            <option value="bubble">Bubble</option>
            <option value="selection">Selection</option>
            <option value="bucket">Bucket</option>
          </select>
        </label>

        <button onClick={ordenar}>ordenar</button>


        < br />
        <p>Resultado:[{resultado.vetorOrdenado}] em {resultado.tempoExecucao}ms</p>
      </main>



      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
