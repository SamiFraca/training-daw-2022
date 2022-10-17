function evenNumbers() {
    
    for (i = 0; i < 100; i++) {
        i % 2 == 0 ? console.log(i) : "\t"
    }
}

evenNumbers();
// expected output 2,4,6,8,10......98