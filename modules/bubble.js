export default function bubble(vetorInt) {
    for (let i = 0; i< vetorInt.length -1; i++){
        for(let j = 0; j<vetorInt.length; j++){
          if(vetorInt[j-1] > vetorInt[j]){
            let aux = vetorInt[j-1]
            vetorInt[j-1] = vetorInt[j]
            vetorInt[j] = aux

          }
        }
      }
    return vetorInt
}