// Problem 2:
// crée 3 variable max1,2,3 
// inisialisé max1 par le 1er element dans le tableau
// boocle avec condition si max1 est inferieur à arr[i]
// autre condition parceque arr1 makayakhdch valeur 3 li max m3a deja khda tanya 
// constion prandre la valeur non egale à la valeur de max1

function largest(arr){
    let max1 = [0];
    let max2 = 0;
    let max3 = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }
        if(arr[i]>max2 && arr[i] !== max1){
            max3 = max2;
            max2 = arr[i];
        }
    }
    return [max1,max2,max3];
}
a = [10, 24, 3, 50, 23, 90];
console.log(largest(a));