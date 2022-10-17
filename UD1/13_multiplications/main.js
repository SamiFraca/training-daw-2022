
function printMultiplicationTables() {
    var result = '\n';
    for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
            result += (i * j) + ' ';
        }
        result += '\n'
    }
    console.log(result)
}

printMultiplicationTables()
// expected output
//     1   2   3   ...
// 1   1   2   3   ...
// 2   2   4   6   ...
// 3   3   6   9   ...
// 4   4   8   12  ...
// 5   5   10  15  ...
// 6   6   12  18  ...
// 7   7   14  21  ...
// 8   8   16  24  ...
// 9   9   18  27  ...
// 10  10  20  30  ...
