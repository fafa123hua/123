


// 密码数组
let passwordArr = [];

// 监听数组
let Timer = setInterval(()=>{
    // 判断数组长度
    let passwordBox1 = document.querySelector('.password1Box')
    let passwordBox2 = document.querySelector('.password2Box')
    let passwordBox3 = document.querySelector('.password3Box')
    let passwordBox4 = document.querySelector('.password4Box')
    if(passwordArr.length===0)
    {
        passwordBox1.classList.add('changer')
        passwordBox2.classList.add('changer')
        passwordBox3.classList.add('changer')
        passwordBox4.classList.add('changer')
    }
    if(passwordArr.length===1)
    {
        passwordBox1.classList.remove('changer')
        passwordBox2.classList.add('changer')
        passwordBox3.classList.add('changer')
        passwordBox4.classList.add('changer')
    }
    if(passwordArr.length===2)
    {
        passwordBox1.classList.remove('changer')
        passwordBox2.classList.remove('changer')
        passwordBox3.classList.add('changer')
        passwordBox4.classList.add('changer')
    }
    if(passwordArr.length===3)
    {
        passwordBox1.classList.remove('changer')
        passwordBox2.classList.remove('changer')
        passwordBox3.classList.remove('changer')
        passwordBox4.classList.add('changer')
    }
    if(passwordArr.length===4)
    {
        passwordBox1.classList.remove('changer')
        passwordBox2.classList.remove('changer')
        passwordBox3.classList.remove('changer')
        passwordBox4.classList.remove('changer')
    }
    // 更新密码小点
    // console.log(passwordArr)
},10)
// 监听点击事件
let btn1 = document.querySelector(".key1");
btn1.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(1)
}
let btn2 = document.querySelector(".key2");
btn2.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(2)
}
let btn3 = document.querySelector(".key3");
btn3.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(3)
}
let btn4 = document.querySelector(".key4");
btn4.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(4)
}
let btn5 = document.querySelector(".key5");
btn5.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(5)
}
let btn6 = document.querySelector(".key6");
btn6.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(6)
}
let btn7 = document.querySelector(".key7");
btn7.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(7)
}
let btn8 = document.querySelector(".key8");
btn8.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(8)
}
let btn9 = document.querySelector(".key9");
btn9.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(9)
}
let btn0 = document.querySelector(".key0");
btn0.onclick = function(){
    if(passwordArr.length<4)
    passwordArr.push(0)
}
// 监听删除
let btnDelete = document.querySelector(".delete");
console.log(btnDelete)
btnDelete.onclick = function(){
    passwordArr.splice(-1,1)
}