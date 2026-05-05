let arr = [5, 2, 0, 3, 6, 1]

function sum(n){
    isOdd = (arr[n]%2 != 0);
    if(n==0){
        // if(isOdd){
        //     return arr[n];
        // }else{
        //     return 0
        // }

        // OR
       return isOdd ? arr[n] : 0
    }

    // if(isOdd){
    //     return arr[n] + sum(n-1);
    // }else{
    //     return 0+sum(n-1)
    // }

    // OR
    // return isOdd ? arr[n]+sum(n-1) : 0+sum(n-1)

    // OR

    return ((isOdd ? arr[n] : 0) + sum(n-1)) 
}

console.log(sum(arr.length-1)) 