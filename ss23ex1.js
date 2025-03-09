let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhap so thu ${i + 1}:`);
    numbers.push(num);
}
let found = false; 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
        document.write(numbers[i] + " ");
        found = true;
    }
}
if (!found) {
    document.write("Không có số lớn 10");
}


