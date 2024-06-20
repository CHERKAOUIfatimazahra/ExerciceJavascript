// Problem 5 : 
// search for element impaire
// add in newArray element impaire
// filter newArray
// boocle to search element in arr[i] est remplacer avec newArray[count]
// count

function SortOnlyOddElements(arr){
    let impaire = [];
    let element;
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0){
            impaire.push(arr[i]);
        }
    }
    for(let i=0;i<impaire.length;i++){
        for(let j=i+1;j<impaire.length;j++){
            if(impaire[i] > impaire[j]){
                element = impaire[i];
                impaire[i] = impaire[j];
                impaire[j] = element;
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0){
            arr[i] = impaire[count];
            count++;
        }
    }
    return arr;
    
}
a = [9, 7, 5, 3, 2, 4, 6]
// b = {3, 5, 7, 9, 2, 4, 6}
console.log(SortOnlyOddElements(a));