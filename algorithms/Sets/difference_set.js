function(setA, setB) {
    var difference = new Set(setA);

    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}