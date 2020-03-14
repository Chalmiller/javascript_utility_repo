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

/* Pascals Triangle
    Time Complexity = O(2^n)
*/
function pascalTriangle(row, col) {
    if (col ==0) {
        return 1;
    } else if (row == 0) {
        return 0;
    } else {
        return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1)
    }
}

/* Array Permutations
    Time Complexity = O(n!)
    Space Complexity = O(n!)
*/
function swap(strArray, index1, index2) {
    var temp = strArray[index1];
    strArray[index1] = strArray[index2];
    strArray[index2] = temp;
}

function permute(strArr, begin, end) {
    if (begin == end) {
        console.log(strArr)
    } else {
        for (var i = begin; i < end + 1; i++) {
            swap(strArr, begin, i);
            permute(strArr, begin + 1, end);
            swap(strArr, begin, i);
        }
    }
}

function permuteArray(strArr) {
    permute(strArr, 0, strArr.length - 1);
}
