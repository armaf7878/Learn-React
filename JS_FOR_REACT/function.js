//Arrow Function
const abc = () => {
    //Logic Here
}

//Import - Export

const exam = () => {
    // return <div>explore</div>;
}; export default exam;//Default Export

const exam1 = () => {
    // return <div>explore</div>;
}; export {exam1};// Named Export

/*
    Khi nào dùng default export và khi nào dùng name export? 
    Default: dùng chỉ khi export 1 components (function) trong file đo
    Name: Ngược lại 

    Import default export không cần ngoặc nhọn và ngược lại
*/

/**
 * Kỹ Thuật ba ngôi dùng tối ưu code không phải viết dài dòng cho các lệnh như if else
 */
//Ví dụ if else thông thường
const age = 20;
if(age >= 18){
    console.log("Bạn đã đủ tuổi để xem nội dung này");
}else{
    console.log("Bạn chưa đủ tuổi");
}
// Ứng dụng kỹ thuật 3 ngôi
console.log(age>=18 ? "Bạn đã đủ tuổi xem nội dung này" : "Bạn chưa đủ tuổi")


/**
 * OBJECT
 */

//Object Destructuring - phân rã đối tượng

const cat = {
    name: "doraemon",
    old:"4",
    breed: "bengal",
};

// const name = cat.name;
// const old = cat.old;
// const breed = cat.breed;
// Tương đương với code bên dưới, sử dụng systax bên dưới nó tự đông phân rã đối tượng thành 3 biến
const{name, old, breed} = cat;

/**
 * SPREAD OPERATOR - Kỹ thuật sao chép object và chỉnh sử 1 phần
 */
const cat2 = {...cat, breed:"persian"};

/**
 * FILTER FUNCTION
 */
const staff = [
    {name: "Danh", onVacation: true},
    {name: "Khánh", onVacation: true},
    {name: "Gái", onVacation: false},
    {name: "Khoa", onVacation: false},
    {name: "Nguyên", onVacation: true},
]

//Dùng filter để lọc ra những người đang trong kỳ nghỉ
const availStaff = staff.filter((person) => person.onVacation === false);
// các phần tử trong mảng staff sẽ được gán vào person

/**
 * CHỈ TRUY CẬP GIÁ TRỊ KHI TỒN TẠI 
 * Khi lấy dữ liệu từ api đôi khi server lỗi gây app crash
 * Gỉai quyết vấn đề đó có "?" để gán giá trị bằng undentified khi giá trị k lấy được từ server
 */
//EXAMPLE
// const data = fetchData();
// console.log(data?.person?.name);


/**
 * PROMISE: là một giá trị đại diện cho object sẽ có trong tương lai
 * PROMISE STATUS: pending, fullfilled, reject
 */

// const filmList = fetch("https://ghibli-api.vercel.app/api/films")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

const fetchData = async() => {
    try {
        const res = await fetch("https://ghibli-api.vercel.app/api/films")
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

fetchData();

/**
 * Đối với Await ở từng dòng code thì sẽ chạy tuần tự từ trên xuống dưới 
 * Lãng phí code-tài nguyên 
 * Giari pháp xử lý là chạy song song sử dụng allSettled
 */

const result = await Promise.allSettled([getData1(), getData2()]);
result.forEach(result => {
    if(result.status === "fulfilled"){
        console.log("Dữ liệu:", result.value);
    }else{
        console.warn("Lỗi:", result.reason);
    }
});


