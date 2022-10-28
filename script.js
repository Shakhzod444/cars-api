let top1 = document.querySelector('.topp1')
let top2 = document.querySelector('.topp2')
let top3 = document.querySelector('.topp3')
function rec() {
axios.get('https://car-data.p.rapidapi.com/cars', {
   params: {limit: '50', page: '0'},
   headers: {
     'X-RapidAPI-Key': '6f2ca09b73msha2a5e47d288bdbdp1118ffjsne63dc242efc7',
     'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
   }}) 
.then(res => reload(res.data))}rec()
function reload(arr) {
for (let item of arr) {
let box = document.createElement('div')
let make = document.createElement('div')
let model = document.createElement('div')   
let year = document.createElement('div')
let button = document.createElement('button')
box.classList.add('box')
make.classList.add('make')
model.classList.add('model')
year.classList.add('year')
button.classList.add('button')
make.innerHTML = item.make
model.innerHTML = item.model
year.innerHTML = item.year
button.innerHTML = 'Подробнее'
box.append(make, model , year , button)
if(item.year >= 2007) {
   top1.append(box)  
}else if(item.year <=2007 && item.year >=1997 ) {
   top2.append(box)
}else if(item.year <=1997 ) {
   top3.append(box)
}}}
