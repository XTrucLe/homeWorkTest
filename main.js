
const giai = document.querySelector(".btn");

function giaiPhuongTrinhBacHai(a,b,c) {
 
  // xac dinh phuong giaiPhuongTrinhBacHai
  if (a === 0) {
    return isLinear(b, c);
  }

  // Tinh delta
  const  delta = b * b - 4 * a * c;
  console.log(delta,  a);
  // Xu ly ket qua
  if (delta > 0) {
    // Phuong trinh co hai nghiem phan biet
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Phuong trinh co hai nghiem x1 = ${x1} va x2 = ${x2}`;
  } else if (delta === 0) {
    // Phuong trinh co mot nghiem kep
    const x = (-b) / (2 * a);
    return `Phuong trinh co nghiem kep x = ${x}`;
  } else {
    // Phuong trinh vo nghiem
    return `Phuong trinh vo nghiem`;
  }
}

function isLinear(b, c) {
  if (b === 0) {
    if (c === 0) {
      return `Phuong trinh vo so nghiem`;
    } else {
      return `Phuong trinh vo nghiem`;
    }
  } else {
    return `Phuong trinh co nghiem x = ${-c / b}`;
  }
}


// Giải phương trình

giai.onclick = function (e) {
  e.preventDefault();
   // Lấy dữ liệu từ form
var a = parseInt(document.querySelector('input[name="a"]').value.trim());
var b = parseInt(document.querySelector('input[name="b"]').value.trim());
var c = parseInt(document.querySelector('input[name="c"]').value.trim());
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter a valid number");
    return;
  }

  let result = giaiPhuongTrinhBacHai(a,b,c);
  document.querySelector("#result").innerHTML = result;
  document.querySelector('input[name="a"]').value=''
  document.querySelector('input[name="b"]').value=''
  document.querySelector('input[name="c"]').value=''
}
// Hiển thị kết quả

