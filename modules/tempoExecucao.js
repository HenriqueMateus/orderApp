export default function calculoTempoExecucao(obj) {
    let inicio = window.performance.now()
    let resultado = obj.func()
    let tempoGasto = (window.performance.now() - inicio)
    return {resultado: resultado, tempoGasto: tempoGasto }
}