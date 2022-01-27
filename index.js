const creat = document.querySelector('.crebtn');
const rset = document.querySelector('.rebtn');
const form = document.querySelector('.form');
const sub = document.querySelector('.submit')

creat.addEventListener('click', () => {
    document.querySelector('.form').classList.add('show');
    document.querySelector('.crebtn').classList.add('hide');
})

function creatlist(){
    let bookname = document.querySelector('.bname');
    let author = document.querySelector('.uname');
    let date = document.querySelector('.date');

    let tab = document.querySelector('tbody');
    //let tabl =document.createElement('table')

    // let tabtr = document.createElement('tr');
    // let td1= document.createElement('td');
    // let td2 = document.createElement('td');
    // let td3 = document.createElement('td');

    var rowCount = tab.rows.length;
    var row = tab.insertRow(rowCount);
    row.classList.add('show')

    row.insertCell(0).innerText = bookname.value;
    row.insertCell(1).innerText = author.value;
    row.insertCell(2).innerText = date.value

    // td1.innerText = bookname.value;
    // td2.innerText = author.value;
    // td3.innerText = date.value;

    // console.log(td1)
    // console.log(td2)
    // console.log(td3)


    // tabtr.appendChild(td1)
    
    // tabtr.appendChild(td2)
    
    // tabtr.appendChild(td3)

    // tabl.appendChild(tabtr);
    

    document.querySelector('.form').classList.remove('show');
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.crebtn').classList.remove('hide')
    tab.classList.add('show');
    tabtr.classList.add('show')
}

function reset(){
    document.querySelector('table').classList.remove('show');
    document.querySelector('.crebtn').classList.remove('hide')
}

function cross(){
    document.querySelector('.form').classList.remove('show')
    document.querySelector('.crebtn').classList.remove('hide')
}

document.querySelector('.im').addEventListener('click', cross)
sub.addEventListener('click', creatlist);
rset.addEventListener('click', reset)