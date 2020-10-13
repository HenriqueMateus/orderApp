export default function selection(vetor) {
    let tamanho = vetor.length
    for(let i = 0;i < tamanho -1; i++){
        let minIndx = i
        for(let j = i + 1; j < vetor.length; j++){
            if(vetor[j]<vetor[minIndx]){
                minIndx = j
            }
        }
        let aux = vetor[i]
        vetor[i] = vetor[minIndx]
        vetor[minIndx] = aux
    }
    return vetor
}