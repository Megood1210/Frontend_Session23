let n = +prompt("Nhap so phan tu trong mang:");
if(n > 0) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Nhap so thu ${i + 1}:`);
        numbers.push(num);
    }
    let sum = 0;
    let hasNumber = false; 
    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(numbers[i])) {
            sum += numbers[i];
            hasNumber = true; 
        }
    }
    if (hasNumber) {
        document.write(sum);
    } else {
        document.write("Không có phần tử nào là số");
    }
}else if (n === 0){
    document.write(" Mảng không có phần tử ");
} else{
    document.write("Số lượng phần tử không được âm");
}

