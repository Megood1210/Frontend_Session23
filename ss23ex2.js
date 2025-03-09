let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhap so thu ${i + 1}:`);
    numbers.push(num);
}
if (numbers.length === 1 && isNaN(numbers[0])) {
    document.write("Không có số lớn nhất");
} else {
    let maxNumber = numbers[0]; 
    let index = 0; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            index = i;
        }
    }
    document.write(`Số lớn nhất: ${maxNumber} <br>`);
    document.write(`Vị trí: ${index}`);
}
