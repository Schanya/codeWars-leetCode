const lcm = function (...A) {
    var n = A.length,
        a = A[0];
    for (var i = 1; i < n; i++) {
        var b = A[i],
            c = a;
        while (a && b) {
            a > b ? (a %= b) : (b %= a);
        }

        a = (c * A[i]) / (a + b);
    }
    return a;
};