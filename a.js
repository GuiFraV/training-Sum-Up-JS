// nums = [2, 4, 1, 6, 8]
// target = 8


function test(array, target){

    let hashMap = {}

    for(let i = 0 ; i < array.length ; i++){

        let complement = target / array[i];

        // console.log(complement);
        if(hashMap.hasOwnProperty(array[i])){
            return [hashMap[array[i]], i]
        }
        
        hashMap[complement] = i;
        
        
        console.log(hashMap);
    }

    return false;
}

console.log(test([2, 4, 1, 6, 8], 48));