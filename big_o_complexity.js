// O(n)
function a(n) {
    var count = 0;
    for (var i=0; i<n; i++) {
        count += 1;
    }
    return count;
}

// O(5n)
function a(n) {
    var count = 0;
    for (var i=0; i<5*n; i++) {
        count += 1;
    }
    return count;
}

// O(n+1)
function a(n) {
    var count = 0;
    for (var i = 0; i<n; i++) {
        count += 1;
    }
    count += 3;
    return count;
}

//O(n + 5n)
function a(n) {
    var count = 0;
    for (var i = 0; i<n; i++) {
        count += 1;
    }
    for (var i=0; i<n; i++) {
        count += 1;
    }
    return count;
}