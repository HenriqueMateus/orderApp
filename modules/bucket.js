
function insertionSort(array) {
    var length = array.length;

    for (var i = 1; i < length; i++) {
        var temp = array[i];
        for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }

    return array;
}

export default function bucketSort(array, bucketSize) {
    if (array.length === 0) {
        return array;
    }
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })

    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);

    for (i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }

    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });

    array.length = 0;
    allBuckets.forEach(function (bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });

    return array;
}