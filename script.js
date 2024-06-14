// Problem 1:
// vareable max = [0] pour comparé les elements du tableau
// autre variable secoundMax = [0] pour remplacé a chaque fois la valeur presedant de max 
// boocle to search in the array
// condition pour trouvé l'element le plus ground 

// function secoundMaxElement(arr){
//     let max = [0];
//     let secoundMax = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > max){
//             secoundMax = max;
//             max = arr[i];
//         }
//     }
//     return secoundMax;
// }
// a = [1,2,15,4,20,9];
// console.log(secoundMaxElement(a));

// Problem 2:
// crée 3 variable max1,2,3 
// inisialisé max1 par le 1er element dans le tableau
// boocle avec condition si max1 est inferieur à arr[i]
// autre condition parceque arr1 makayakhdch valeur 3 li max m3a deja khda tanya 
// constion prandre la valeur non egale à la valeur de max1

// function largest(arr){
//     let max1 = [0];
//     let max2 = 0;
//     let max3 = 0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max1){
//             max3 = max2;
//             max2 = max1;
//             max1 = arr[i];
//         }
//         if(arr[i]>max2 && arr[i] !== max1){
//             max3 = max2;
//             max2 = arr[i];
//         }
//     }
//     return [max1,max2,max3];
// }
// a = [10, 24, 3, 50, 23, 90];
// console.log(largest(a));

// Problem 3
// create newArr 
// create counter
// boocle to add in new arr from the position
// boocle to add in new arr before the position 
// function Revesel(arr,pos){
//     let newArr = [];
//     let count = [0];
//     for(let i=pos;i<arr.length;i++){
//         newArr[count] = arr[i];
//         count++;
//     }
//     for(let i=0;i<pos;i++){
//         newArr[count] = arr[i];
//         count++;
//     }
//     return newArr;
// }
// a = [10, 24, 3, 50, 23, 90];
// b = 2;
// console.log(Revesel(a,b));

// Problem 4:: more explination 

// Problem 5 : 
// search for element impaire
// add in newArray element impaire
// filter newArray
// boocle to search element in arr[i] est remplacer avec newArray[count]
// count
// function SortOnlyOddElements(arr){
//     let impaire = [];
//     let element;
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 !== 0){
//             impaire.push(arr[i]);
//         }
//     }
//     for(let i=0;i<impaire.length;i++){
//         for(let j=i+1;j<impaire.length;j++){
//             if(impaire[i] > impaire[j]){
//                 element = impaire[i];
//                 impaire[i] = impaire[j];
//                 impaire[j] = element;
//             }
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 !== 0){
//             arr[i] = impaire[count];
//             count++;
//         }
//     }
//     return arr;
    
// }
// a = [9, 7, 5, 3, 2, 4, 6]
// // b = {3, 5, 7, 9, 2, 4, 6}
// console.log(SortOnlyOddElements(a));

// Problem 6

// Problem 7
// search for max add in new array
// search for min add in new array
// boocle to add les 2 new array in array qui countient le resulta finale
// donc : 3 new array / 2 boocle avec condition 
function TwoPointerTechnique(arr){
    let newMax = [];
    let newMin = [];
    let newArr = [];
    
    let countMax = 0;
    let countMin = 0;

    for(let i=0;i<arr.length;i++){
        if(i % 2 === 0){
            newMax.push(arr[i]);
        }
        else{
            newMin.push(arr[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr[i] = newMin[countMin];
            countMin++;
        } else {
            newArr[i] = newMax[countMax];
            countMax++;
        }
    }


    return newArr;
}

a = [1, 2, 3, 4, 5, 6, 7]
// Sortie : arr[] = {7, 1, 6, 2, 5, 3, 4}
console.log(TwoPointerTechnique(a));