function factors(num) {
    const arr=[];
    for (let index = 1; index <=num; index++) {
        if (num%index==0) {
            arr.push(index);
        }
    } 
    console.log(arr)
}
console.log(factors(12));