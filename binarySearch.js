let nums = [-1,0,3,5,9,12]
var search = function(nums, target) {
    let min = 0, max = nums.length-1, mid = 0;
    while (min<= max) {
       // chop the list every time
        mid = Math.floor((min+max)/2)
        // mid ==  value searched for
        if(nums[mid] === target) {
            return mid
        } else if (nums[mid]> target){
          // moves max down one from mid
            max = mid -1;
        } else {
          // moves min up one
            min = mid + 1
        }
        console.log(min,max,mid)
    }

    return -1

};


let target = 9
console.log(search(nums,9))

// log N time complexity
