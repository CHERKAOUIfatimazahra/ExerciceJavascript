// Problem 7
// boocle to search for index avec condition if(i % 2 == 0)
// position de arr debut et la fin 
// nouvel array pour remplire le condition 

function TwoPointerTechnique(arr){
    newArr = [];
    let index = arr.length - 1;
    let position = 0;
    let count = 0;
    for(let i=0;i<arr.length; i++){
        if(i % 2 == 0){
            newArr[count] = arr[index];
            index--;
            count++;
        }else{
            newArr[count] = arr[position];
            position++;
            count++;
        }
    }
    return newArr;
}

let a = [1, 2, 3, 4, 5, 6, 7];
let b = [1, 2, 3, 4, 5, 6];
console.log(TwoPointerTechnique(b));

