function isSuperset(setA, subset) {
    for (var elem of subset) {
        if (!setA.has(elem)) {
            return false;
        }
    }

    return true;
}