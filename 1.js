// Problem 1:
// vareable max = [0] pour comparé les elements du tableau
// autre variable secoundMax = [0] pour remplacé a chaque fois la valeur presedant de max 
// boocle to search in the array
// condition pour trouvé l'element le plus ground 

function secoundMaxElement(arr){
    let max = [0];
    let secoundMax = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            secoundMax = max;
            max = arr[i];
        }
    }
    return secoundMax;
}
a = [1,2,15,4,20,9];
console.log(secoundMaxElement(a));