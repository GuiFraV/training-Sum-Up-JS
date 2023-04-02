/**
 * @param {number[]} nums
 * @return {number[]}
 */
function twoNumberSum(array, targetSum) {
    let nums = {};
  
    for(let i of array){
        const num = targetSum - i;

        console.log({num})
        
        if(nums[i]){
          return [i, num];
        }
  
        console.log(nums)
      nums[num] = true;
  
      
    }

  
    return [];
    
  }

  console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));