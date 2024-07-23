//Rotate array by k elements
/*
 input: array = [1,2,3,4,5,6,7] k =2
 output: 6,7,1,2,3,4,5
*/
let array = [1,2,3,4,5,6,7,8,9,10]
let bag = []
let k = 5;
let n = array.length
for(let i=n-1;i>=0;i--){// for reversing the array
    bag.push(array[i])
}
let bag1=[]// bag1 for to store when an array is divide up to k
let bag2=[]// bag2 for to store remaning elements in array
for(let i=0;i<n;i++){
    if(i<k){
        bag1.push(bag[i]);
    }
    else{
        bag2.push(bag[i])
    }
}
console.log(bag1);
console.log(bag2);
let output="";
for(let i=bag1.length-1;i>=0;i--){
    output = output +bag1[i]+" "
}
for(let j=bag2.length-1;j>=0;j--){
    output=output +bag2[j]+" ";
}
console.log(output)

