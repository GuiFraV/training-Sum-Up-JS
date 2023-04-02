// nums = [3, 7, 2, 8, 1]
// target = 5

function sumToTarget(array, target){
    
    const hashMap = {};

    for(let i = 0; i<array.length; i++){

        let complement = target - array[i];

        hashMap[complement] = i;


        if(hashMap.hasOwnProperty(array[i])){

            console.log(hashMap)
            console.log(array[i])
            return [hashMap[array[i]], i];
        }
        
        
        
    }
    
    console.log(hashMap)
    return [];

}

console.log(sumToTarget([3, 7, 2, 8, 1], 10))
