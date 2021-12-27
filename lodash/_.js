//1
let _ = {
    clamp(number, lower, upper) {

        let lowerClampedVal = Math.max(number, lower)
        let clampedValue = Math.min(lowerClampedVal, upper)
        return clampedValue
    },
    inRange(number, start, end) {
        if (!end) {
            end = start
            start = 0
        }
        if (start > end) {
            let tempEnd = end
            end = start
            start = tempEnd
        }
        if (number < end && start <= number) {
            return true
        } else {
            return false
        }
    },
    words(str) {
        return str.split(" ");
    },
    pad(string, len) {
        if (len <= string.length) {
            return string
        } else {
            let startLen = Math.floor((len - string.length)/2)
            let endLen = len - string.length - startLen
            return (" ".repeat(startLen) + string + " ".repeat(endLen))
        }
    },
    has(obj, key) {
        if (!obj[key]) {
            return false
        } else {
            return true
        }
    },
    invert(obj) {
        let invertedObj = {}
        for (let keys of Object.keys(obj)) {
            let originalValue = obj[keys]
            invertedObj[originalValue] = keys
        }
        return invertedObj
    },
    findKey(obj, predicate) {
        for (let keys of Object.keys(obj)) {
            let value = obj[keys]
            let predReturn = predicate(value)
            if (predReturn) {
                return keys
            }
            return undefined
        }
    },
    drop(arr, number) {
        if (!number) {
            number = 1
        }
        let tempArr = arr.slice(number);
        return tempArr
    },
    dropWhile(arr, predicate) {
        let dropNumber = arr.findIndex((element, index) => {
            return (!predicate(element, index, arr))
        })
        let droppedArray = this.drop(arr, dropNumber)
        return droppedArray
    },
    chunk(arr, size) {
        if (!size) {
            let size = 1
        }
        let emptArr = []
        for (let i = 0; i < arr.length; i += size) {
            let arrChunk = arr.slice(i, i+size)
            emptArr.push(arrChunk)
        }
        return emptArr
    }
}

// Do not write or modify code below this line.
module.exports = _;