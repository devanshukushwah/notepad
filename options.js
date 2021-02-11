// const bestSum = (targetSum,number, memo={}) =>{
// if(targetSum in memo) return memo[targetSum];
// if(targetSum == 0) return [];
// if(targetSum <0 ) return null;
// let shortestcombination = null;

// for(let num of number){
//     const remainder  =  targetSum - num;
//     const remainderCombination = bestSum(remainder,number, memo);
//     if(remainderCombination !== null){
//         const combination = [...remainderCombination, num];
//     // if the combination is shortest than the current "shortest", update it
//         if(shortestcombination === null || combination.length<shortestcombination.length){
//             shortestcombination = combination;
//         }
//     }
// }
// memo[targetSum] = shortestcombination;
// return shortestcombination; 
// };

// console.log(bestSum(7,[5,3,4,7]));  
// console.log(bestSum(8,[2,3,5]));
// // console.log(bestSum(7,[2,4]));
// console.log(bestSum(8,[1,4,5]));
// console.log(bestSum(100,[1,2,5,25]));













// // const howSum = (targetSum, numbers, memo={}) =>{
// //     if(targetSum in memo) return memo[targetSum];
// //     if(targetSum == 0) return [];
// //     if(targetSum < 0) return null;
// //     for(let num of numbers){
// //         const remainder = targetSum - num;
// //         const remainderResult = howSum(remainder, numbers,memo);
// //         if(remainderResult !== null){
// //             memo[targetSum] = [...remainderResult,num];
// //             return memo[targetSum];
// //         }
// //     }
// //     memo[targetSum] = null;
// //     return null;
// // };



// // console.log(howSum(7,[2,3]));
// // console.log(howSum(7,[5,3,4,7]));
// // console.log(howSum(7,[2,4]));
// // console.log(howSum(8,[3,2,5]));
// // console.log(howSum(300,[7,14]));

