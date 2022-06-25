// su ly reponsive
var navToggler = document.getElementById('navToggler');
var menuAside = document.querySelector('.menu-aside');
var mainModel = document.querySelector('.main-model');
navToggler.addEventListener("click", (e)=> {
  menuAside.classList.toggle("open");
  console.log(1);
})

navToggler.addEventListener("click", (e)=> {
  mainModel.classList.toggle("show-model");
  
})

navToggler.addEventListener("click", (e)=> {
  navToggler.classList.toggle("show-icon");
  console.log(2);
})

//  su ly dang nhap
const Islogin = localStorage.Islogin || 'false'
if(Islogin == 'false') {
  window.location = './../Form_Login/Login.html'
}

//  dang suat
const logOut = document.querySelectorAll('.Logout')
logOut.forEach(e=> {
  e.onclick = ()=> {
    localStorage.setItem('Islogin','false')
    window.location = './../Form_Login/Login.html'
  }
})


//     
//  su ly them sua xoa 
//  

function monAn(ma = '',ten = '',nguoiLam = '', ngayLam = '', soLuong = '',trangThai = '') {
  this.ma= ma
  this.ten = ten
  this.nguoiLam = nguoiLam
  this.ngayLam = ngayLam
  this.soLuong = soLuong
  this.trangThai = trangThai
}


const data = []

data.push(new monAn('01','Sweet Potato Fries Bowl','Thắng','14/6/2022','2','Còn nóng'))
data.push(new monAn('02','Vegan Salad bowl','Thuấn','14/6/2021','2','Đã nguội'))
data.push(new monAn('03','Sweet Potato Fries Bowl','Tâm','14/6/2020','3','Còn nóng'))
data.push(new monAn('04','Sweet Potato Fries Bowl','Ngọc','14/6/2022','5','Còn nóng'))
data.push(new monAn('05','Sweet Potato Fries Bowl','Hiu','14/6/2022','2','Còn nóng'))
data.push(new monAn('06','Sweet Potato Fries Bowl','Phương','14/6/2022','7','Còn nóng'))
data.push(new monAn('07','Sweet Potato Fries Bowl','Linh','14/6/2021','7','Đã nguội'))

const listMonAn = document.querySelector('table.dish_list')
const addMonan = document.querySelector('.add_dish')
const infor_monan = document.querySelector('.thongtinmonan')
const save = document.querySelector('.save')

//  xoa mon an
function remove(index){
  data.splice(index,1)
  renderMonAn(data)
}

// render mon an
function renderMonAn(data){
  let header = `
                  <thead>
                  <tr class="row_dish">
                    <th class="column_dish">Mã số</th>
                    <th class="column_dish">Tên món</th>
                    <th class="column_dish">Người làm</th>
                    <th class="column_dish">Ngày làm</th>
                    <th class="column_dish">Số lượng</th>
                    <th class="column_dish">Trạng thái</th>
                    <th class="column_dish" style="width: 12rem;"></th>
                  </tr>
                </thead>
          `
  const items = data.map((e,i)=> {
    return `  <tr class="dish_item" data = '${i}'>
                <td>${e.ma}</td>
                <td>${e.ten}</td>
                <td>${e.nguoiLam}</td>
                <td>${e.ngayLam}</td>
                <td>${e.soLuong}</td>
                <td>${e.trangThai}</td>
                <td class="dish_item-manipulation">
                  <i class="fa-solid fa-wrench" onclick='show_infor(${i})'></i>
                  <i class="fa-solid fa-trash" onclick='remove(${i})'></i>
                </td>
              </tr>`
  })
  listMonAn.innerHTML = header + items.join('')
}
renderMonAn(data)


//  sua ly sua thong tin mon an

function show_infor(index){
  infor_monan.classList.add('active')
  localStorage.setItem('index',index)
  setdataForm(data[index])
}

function hide_infor(){
  infor_monan.classList.remove('active')
}

function setdataForm(obj){
  var form = document.forms['infor']
  form['ma'].value = obj.ma
  form['ten'].value = obj.ten
  form['nguoilam'].value = obj.nguoiLam
  form['ngaylam'].value = obj.ngayLam
  form['soluong'].value = obj.soLuong
  form['trangthai'].value = obj.trangThai
}

function getdataForm() {
  var obj = new monAn()
  var form = document.forms['infor']
  obj.ma = form['ma'].value
  obj.ten = form['ten'].value 
  obj.nguoiLam = form['nguoilam'].value 
  obj.ngayLam = form['ngaylam'].value 
  obj.soLuong = form['soluong'].value 
  obj.trangThai =  form['trangthai'].value 
  return obj
}
//  su ly them mon an
addMonan.onclick = ()=> {
  infor_monan.classList.add('active')
  localStorage.setItem('index',false)
  setdataForm(new monAn())
}

function Save(index) {
  if(index === 'false'){
    data.push(getdataForm())
  }
  else {
    data[+index] = getdataForm()
  }
  renderMonAn(data)
}

save.onclick = ()=> {
  Save(localStorage.index);
  hide_infor();
  return false
}

// tim kiem 
function Find(string) {
    const resut = data.filter((e,i) => {
      return Object.values(e).some(Element => Element.includes(string))
  })
  return resut
}
document.querySelector('.search_dish input').onchange = (e)=>{
  renderMonAn(Find(e.target.value))
} 