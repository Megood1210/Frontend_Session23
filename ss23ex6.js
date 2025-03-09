let arr = [ "", false, 0, undefined, null];
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) { 
        result[result.length] = arr[i];
    }
}
document.write(result);

