//phần 1:Truy cập phần tử trong DOM
const view1 = document.getElementById("view1");//tìm thẻ thẻ view1 trong docHTML theo ID
console.log(view1);

const view2 = document.querySelector("#view2");//tìm dạng truy vấn thẻ view2 trong docHTML
console.log(view2);

const containers = document.getElementsByClassName("container");
console.log(containers); // trả về collection HTML tập hợp các phần tử object là các view (view1 - view2)

const sameContainers = document.querySelectorAll(".container")// tìm tất cả có bộ chọn là .container
console.log(sameContainers); // trả về nodelist ko phải colelction html 

// NodeList có thể sử dụng các hàm như foreach hoặc lenght, HTML collection  cập nhật theo real time còn NodeList không thay đổi sau khi tạo

// Chọn các div trong view 1
const divs = view1. querySelectorAll("div");// tìm tất cả thẻ div trong phần tử view1
console.log(divs)// kết quả NodeList

const divs2 = view1.getElementsByTagName("div")
console.log(divs2)//Kết quả html Collection

// ==> Khi nào sử dụng getElements sẽ trả về Collection khi nào sử dụng querrySelector trả về Nodelist

//phần 2:Thay đổi nội dung, style, thuộc tính của các phần tử
const SencondFlexItem = document.querySelector(".flex-item:nth-child(2)");// tìm đến phần tử thứ 2 
console.log(SencondFlexItem.textContent);// trả về nội dung
SencondFlexItem.textContent = "Item2"; // Thay đổi nội dung

// 2 cách khác lấy nội dung phàn tử
const h1 = document.querySelector("h1:first-child");  //tìm thẻ h1 phần tử đầu của các thẻ h1
console.log(h1.textContent);// lấy toàn bộ nội dung thẻ dù có text bị gán thuộc tính ẩn trong thẻ
console.log(h1.innerText); // Hiển thị nội dung thẻ theo đúng hiển thị trên web HTML
console.log(h1.innerHTML); // In ra toàn bộ thẻ HTML bên trong thẻ H1 phục vụ cho việc tương tác thay đổi thuộc tính html trong thẻ h1
h1.innerHTML = "Demo <strong> HTML </strong> DOM";
h1.style.color = "lightskyblue";// đổi thuộc tính css - color
h1.style.fontWeight = "900"; // đổi thuộc tính font weight
h1.style.fontSize = "54px";// đổi thuộc tính font size

const newHeading = document.createElement("h2"); // tạo một element mới với dạng thẻ là H2
newHeading.textContent = "hello - world";
h1.replaceWith(newHeading);// thay đổi nội dung h1 thành nội dung h2
// nếu muốn thay đổi các thuộc tính của nội dung thay đổi trong thẻ h1 thì cần thay đổi thuộc tính của thẻ newHeading
newHeading.classList.add("big-h1"); // thêm class big-h1 vào thẻ newHeading   
newHeading.classList.remove("big-h1"); // remove class big-h1


//Tạo hàm viết dưới dạng Arrow Func
const showHideV2  = () => {
    view2.classList.toggle("hidden");
    console.log(view2.classList.contains("hidden"));// kiểm tra có chứa class
}

// Thay đổi thuộc tính attribute của phần tử
SencondFlexItem.setAttribute("data-item", "123"); // thêm thuộc tính data-item
console.log(SencondFlexItem.getAttribute("data-item"));// lấy giá trị thuộc tính attribute
console.log(SencondFlexItem.getAttributeNames()); // trả về mảng tất cả các thuộc tính 
console.log(SencondFlexItem.getAttributeNode("data-item")); // trả về node có tên attribute 
console.log(SencondFlexItem.hasAttribute("data-item")); //kiểm tra có thuộc tính không

SencondFlexItem.removeAttribute("data-item")// gỡ thuộc tính ra khởi phần tử

// Tạo một biến attribute thuận tiện cho việt thêm xóa các thuộc tính sau này
const attr = document.createAttribute("data-item");
attr.value = "123" //  gán giá trị thuộc tính
SencondFlexItem.setAttributeNode(attr)// gán attr vào tham số

//Di chuyển từ NODE này sang các NODE khác trong DOM TREE

// Di chuyển từ con lên cha
const parent = SencondFlexItem.parentElement; //Truy cập vào thẻ cha của SencondFlexItem
console.log(parent);// Log ra thẻ cha của Send....
console.log(parent.children);// Trả về nodelist các thẻ con
console.log(parent.firstElementChild);// Trả về thẻ con đầu tiên
console.log(parent.lastElementChild);// Trả về thẻ con cuối cùng
console.log(parent.children[4]); // Trả về thẻ phần tử con thứ 5

//Di chuyển từ con sang con (ngang hàng)
console.log(SencondFlexItem.nextElementSibling); //trả về thả ngang hàng ở sau
console.log(SencondFlexItem.previousElementSibling);// trả về thả ngang hàng ở trước 


//Tạo và xóa phần tử

const content = document.querySelector("#content");
const ul = content.querySelector("ul");
let listlength = ul.children.length;
const output = document.getElementById("output");
const addElement = () => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `Item ${++listlength} <span onclick="deleteThisElement(event)">Xoá</span>`;
    newItem.classList.add("item");
    ul.appendChild(newItem);
    output.textContent = "Đã thêm phần tử mới";
}

const removeElement = () => {
    if(ul.lastElementChild){
        ul.removeChild(ul.lastElementChild);
        output.textContent = "Đã xóa phần tử cuối"
    }else {
        output.textContent = "Không còn phần tử nào để xóa"
    }
}

const deleteThisElement = (event) => {
    const item  = event.target.parentElement;
    item.remove();
}