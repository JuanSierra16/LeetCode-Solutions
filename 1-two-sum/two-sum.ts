export function twoSum(nums: number[], target: number): number[] {
	let indexes: number[] = []
		nums.forEach((i, indexI) => {
			nums.forEach((j, indexJ) => {
				if(indexI === indexJ) return
				if(i + j === target){
					indexes = [indexI, indexJ]
                    return
				}
			})
		})
    return indexes;
};