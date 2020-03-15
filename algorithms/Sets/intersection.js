function intersectSets(setA, setB) {
    var intersection = new Set();

    for (var elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}