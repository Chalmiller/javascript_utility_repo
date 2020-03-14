function countDownToZero(n) {
    // base case. Stop at 0
    if (n <0) {
        return;
    } else {
        console.log(n);
        countDownToZero(n-1);
    }
}
// countDownToZero(12);

// non-recursive fibonnaci
function getNthFibo(n) {
    if (n <= 1) return n;
    var sum = 0,
        last = 1,
        lastlast = 0;

    for (var i = 1; i < n; i++) {
        // 1
        sum = lastlast + last;
        // 1
        lastlast = last;
        // 1
        last = sum;
    }

    return sum;
}

//  Recursive Fibonacci
function getNthFibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return getNthFibo(n-1) + getNthFibo(n-2);
    }
}
// getNthFibo(10);

/* Tail Recursive Fibonacci
    Time Complexity = O(n)
    Space Complexity = O(n)
*/ 
function getNthFiboBetter(n, lastlast, last) {
    if (n == 0) {
        return lastlast;
    }
    if (n == 1) {
        return last;
    }
    return getNthFiboBetter(n-1, last, lastlast + last);
}
