// Problem 3
// create newArr 
// create counter
// boocle to add in new arr from the position
// boocle to add in new arr before the position 
function Revesel(arr,pos){
    let newArr = [];
    let count = [0];
    for(let i=pos;i<arr.length;i++){
        newArr[count] = arr[i];
        count++;
    }
    for(let i=0;i<pos;i++){
        newArr[count] = arr[i];
        count++;
    }
    return newArr;
}
a = [10, 24, 3, 50, 23, 90];
b = 2;
console.log(Revesel(a,b));