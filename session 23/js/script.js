// map 

// let user = { "name": "mohamed", "20": 20, 20: 40 };

// let user = new Map([
//     ["20", 20],
//     [20, 10],
//     ["name", "mohamed"]
// ]);

// console.log(user);


// foreach 


// let arr = ["peter", "smaman", "ahmed", "mohamed"];

// console.log(arr);
// let count = arr.length;
// for (let i = 0; i < count; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((w) => { console.log(w); });
// arr.forEach((a, b, c) => {
//     console.log(c);
// });



/* function mohamedeach(arr, a = '', b = '') {
    let count = arr.length;
    for (let i = 0; i < count; i++) {
        if (a == true && b == '') {
            console.log(arr[i]);
        } else if (b == true && a == '') {
            console.log(i);
        }
    }
}


mohamedeach(arr, '', true); */





// function name(n) {
//     console.log(n);
// }

// let name = function(n) {
//     console.log(n);
// }

// let name = (n) => {
//     console.log(n);
// };

// name("eslam");

// document.write(`<table width="270px" cellspacing="0px" cellpadding="0px" border="1px">`)
// for (let y = 0; y <= 8; y++) {
//     document.write("<tr>");
//     for (let x = 0; x <= 8; x++) {
//         let total = y + x;
//         if (total % 2) {
//             document.write(`"<td height=30px width=30px bgcolor=#FFFFFF></td>"`)
//         } else {
//             document.write(`"<td height=30px width=30px bgcolor=#000000></td>"`)

//         }
//     }
//     document.write("</tr>");
// }

// document.write(`</table>`)


// document.write("<table border='1' width='300px'>");
// for (let y = 0; y <= 8; y++) {

//     document.write("<tr>");

//     for (let x = 0; x <= 8; x++) {
//         let total = x + y;
//         if (total % 2 == 1) {
//             document.write("<td style='background:black;width:20px;height:20px'></td>");
//         } else {
//             document.write("<td style='background:white;width:20px;height:20px';></td>");
//         }
//     }

//     document.write("</tr>");
// }
// document.write("</table>")


// document.write(15 % 2);


// function tsize() {
//     let tsize = document.getElementById("tsize").value;
//     return tsize;
// }

// function color() {
//     return document.getElementById("color").value;
// }

// function checker() {
//     let s = tsize();
//     document.write("<table border='1' width='300px'>")
//     for (let x = 0; x < s; x++) {
//         document.write("<tr>")
//         for (let y = 0; y < s; y++) {
//             let total = x + y;
//             let res = '';
//             if (total % 2 == 1) {
//                 res += "<td style='background:black;width:20px;height:20px'></td>";
//             } else {
//                 res += "<td style='background:white;width:20px;height:20px'></td>";
//             }
//         }
//         document.getElementById("res").innerHTML = res;
//         document.write("</tr>")
//     }
//     document.write("</table>")
//     console.log(2)
// }