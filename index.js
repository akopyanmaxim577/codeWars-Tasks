//Training JS #10: loop statement --for
const num = [1, 2, 3, 4, 5, 6, 7, 8];
function pickIt(arr){
    const odd=[];
    const even=[];
    for(let i = 0;i<arr.length;i+=1){
        if(arr[i] % 2 == 0){
        even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }
    return [odd,even];
}
