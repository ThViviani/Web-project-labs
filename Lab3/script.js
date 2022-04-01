function createRandomArray() {
    let arr = []
    let length = 15
    for (let i = 0, t = 10; i < length; i++) {
        arr.push(
            Math.round(Math.random() * t)
        )
    }
    return arr
}

function countSort(arr) {
    let counter = []
    for (let i = 0; i <= 10; i++) {
        counter[i] = 0
    }

    for (let number of arr) {
        counter[number] += 1
    }

    let res = []
    for (let i = 0; i < counter.length; i++) {
        for (let j = 0; j < counter[i]; j++) {
            res.push(i)
        }
    }
    return res
}

let fieldForRandomArray = document.getElementById("randomArray")
let arr = createRandomArray()
fieldForRandomArray.value = arr

let fieldForSortedArray = document.getElementById("sortedArray")
fieldForSortedArray.hidden = true


let button = document.getElementById("sortButton")
button.onclick = function() {
    let arrAfterSort = countSort(arr)
    fieldForSortedArray.value = arrAfterSort
    fieldForSortedArray.hidden = false
    button.style.background = "green"
}
