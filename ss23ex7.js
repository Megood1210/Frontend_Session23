let arr = [];
let n = prompt("Nhap so luong phan tu trong mang");
if (n==0){
    document.write(`Mảng không có phần tử nào`)
} else if (n<0){
    alert(` Số lượng phần tử không được nhỏ hơn 0`);
} else {
    for (let i=0;i<n;i++){
        arr[i]=+prompt(` Nhap so thu ${i+1}`);
    }
}
for (let i=0;i<n;i++){
    for (let j=i+1;j<n;j++){
        if (arr[i]>arr[j]){
            let replace=arr[i];
            arr[i]=arr[j];
            arr[j]=replace;
        }
    }
}
let minTwo = arr[n-2];
document.write(minTwo);