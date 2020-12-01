// var name = 'ahmed';





//  + - * / math operator  , arithmatic operator
//          logical operator  AND , OR , NOT
//  copare operator  < > = <= >= != 



// var name = '10';
// console.log(typeof(name));
// AND & 
// OR ||
//  NOT !

// if (name === 10) {
//     alert('yes');
// } else {
//     alert('no');
// }


// const m = 40;
// const m = 50;
// function
// alert(name);


// var y = 10.5;
// var x = 20;
// var z = 30;

// if (y > x) {
//     console.log('yes 1');
// } else if (x < z) {
//     console.log('yes 2');
// } else {
//     console.log('no');
// }


// if (x > z) {
//     console.log('yes 2');
// } else {
//     console.log('no');
// }


// var x = 1;
// if (x == 0) {
//     alert('yes');
// }else{
// }


// var deg = 70;


// if (deg < 50) {
//     alert('اوبح');
// } else if (deg >= 50 & deg <= 65) {
//     alert('جيد');
// } else if (deg >= 65 & deg <= 75) {
//     alert('جح جيد');
// }


// if (deg > 100) {
//     alert('wrong');
// } else if (deg >= 85) {
//     alert('vg');
// }


// var deg = 55;
// if (deg > 100) {
//     alert("not allowed");
// } else if (deg >= 85) {
//     alert("excellent")
// } else if (deg >= 75) {
//     alert("very good")
// } else if (deg >= 65) {
//     alert("good")
// } else if (deg >= 50) {
//     alert("pass")
// } else if (deg >= 0) {
//     alert("fail")
// } else {
//     alert("wrong answer")
// }

// window.onload = function() {
//     document.getElementById("pre").style.display = 'none';
// }














// window.onload = function() {
//     document.getElementById("pre").style.display = 'none';
// }



// var data = [];


// function add() {
//     var todo = document.getElementById("todo").value;
//     data.push(todo);
//     console.log(data);


//     view();
// }


// function view() {
//     var res = '';
//     for (var x = 0; x < data.length; x++) {
//         res += "my task is " + data[x] + "<br>";
//         document.getElementById("res").innerHTML = res;
//     }
// }


var data = [];

function add() {
    var todo = document.getElementById("todo").value;
    data.push(todo);
    console.log(data);
    view();
}


function view() {
    var res = '';
    var count = data.length;
    for (var x = 0; x < count; x++) {
        res += "<div onclick='remove(" + x + ")'> my task is  " + data[x] + "<br></div>";
    }
    document.getElementById("res").innerHTML = res;
}


function remove(x) {

    data.splice(x, 1);
    view();
}






// var data = ['ahmed'];

// data.push("eslam");
// console.log(data);
// data.push(22);
// console.log(data);






// var name = "mohamed";
// name += "ahmed";
// name += "eslam";
// console.log(name);









// window.onscroll = function() {
//     if (window.scrollY > "100") {
//         document.getElementsByClassName("nav-link").style.color = "red";
//         document.getElementById("nav").classList.add("bgenew");
//         document.getElementById("nav").classList.remove("bg-primary");
//     } else {
//         document.getElementsByClassName("nav-link").style.color = "white";
//         document.getElementById("nav").classList.remove("bgenew");
//         document.getElementById("nav").classList.add("bg-primary");
//     }
// }