function binary_search(data, target, low, high) {

    if (!data) {
        return false
    }

    var mid = (low + high) / 2;

    if (target == data[mid]) {
        return true
    } else if (target < data[mid]) {
        return binary_search(data, target, low, mid + 1)
    } else {
        return binary_search(data, target, mid, high)
    }
}
