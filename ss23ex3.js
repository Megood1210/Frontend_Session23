let numbers = [];
let n = +prompt("Nhap so phan tu trong mang");
if(n > 0){
    let count = 0;
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Nhap so thu ${i + 1}:`);
        numbers.push(num);
    }
    for (let i = 0; i< numbers.length; i++) {
        if(Number.isInteger(numbers[i]) && numbers[i] < 0){
        count++;
        }
    }
    if (count > 0){
        document.write(`${count}`);
    }
}else if(n === 0){
    document.write("Mảng không có phần tử");
}else{
    document.write("Số lượng phần tử không hợp lệ");
}
