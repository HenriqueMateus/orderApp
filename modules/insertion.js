export default function insertion(vetorInt) {
    for (let i = 1; i < vetorInt.length; i++) {
        let aux = vetorInt[i]
        let j = i - 1
        while (j >= 0 && vetorInt[j] > aux) {
          vetorInt[j + 1] = vetorInt[j]
          j -= 1
        }
        vetorInt[j + 1] = aux
    }
    return vetorInt
}