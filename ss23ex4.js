let n = +prompt("Nhap so phan tu trong mang");
let numbers = [];
for (let i = 0; i < n; i++) {
    let num = +prompt(`Nhap so thu ${i + 1}:`);
    numbers.push(num);
}
let digitChars = "";
for (let i = 0; i < numbers.length; i++) {
    if (!isNaN(numbers[i])) {
        digitChars += numbers[i] + " ";
    }
}
if (digitChars.length > 0) {
    document.write(digitChars.trim());
} else {
    document.write("Không có ký tự số");
}
