function somarArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

console.log(somarArray([1, 2, 3, 4, 5])); 
console.log(somarArray([10, 20, 30])); 
