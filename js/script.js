
let xmlhttp = new XMLHttpRequest();
let url = "../data/data.json";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        studentInfo(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
//Array
let students = [];
let studentsObj = [];
let studentCounter = 0;
function studentInfo(info) {
    console.log(info.students);
    for (let i = 0; i < info.students.length; i++) {
        //create an object for each loop in array
        let nFO = {
            "firstName": info.students[i].firstName,
            "lastName": info.students[i].lastName,
            "nickname": info.students[i].nickname,
            "email": info.students[i].email,
            "slack": info.students[i].slack,
            "contacts": info.students[i].contacts,
            "hobbies": info.students[i].hobbies,
        };
        studentsObj.push(nFO);
    }
}

let clickfirstName = document.getElementById('firstName');
let clicklastname = document.getElementById('lastName');
let clickNick = document.getElementById('nickname');
let clickEmail = document.getElementById('email');
let clickSlack = document.getElementById('slack');
let clickContacts = document.getElementById('contacts');
let clickHobbies = document.getElementById('hobbies');
let clickFirst = document.getElementById('firstClick');
let clickNext = document.getElementById('nextClick');
let clickPrevious = document.getElementById('previousClick');
let clickLast = document.getElementById('lastClick');
let clickSpin = document.getElementById('spin')
let clickran = document.getElementById('ran')
let clickBody = document.getElementById('body')

function setClass(classString) {
    clickSpin.className = classString + " welcome";
    clickfirstName.className = classString;
    clicklastname.className = classString;
    clickNick.className = classString;
    clickEmail.className = classString;
    clickSlack.className = classString;
    clickContacts.className = classString;
    clickHobbies.className = classString;
}

function addText(num) {
    if (num > 22) {
        num = 0;
    } else if (num < 0) {
        num = 22;
    }
    clickfirstName.innerText = studentsObj[num].firstName
    clicklastname.innerText = studentsObj[num].lastName
    clickNick.innerText = studentsObj[num].nickname
    clickEmail.innerText = studentsObj[num].email
    clickSlack.innerText = studentsObj[num].slack
    clickContacts.innerText = studentsObj[num].contacts
    clickHobbies.innerText = studentsObj[num].hobbies
    studentCounter = num;
}

function setBodyBG(bodyColor) {
    clickBody.className = bodyColor;
}


let colorNum = 0;
function diffColor() {
    if (colorNum > 3) {
        colorNum = 0;
    }
    if (colorNum == 0) {
        setClass('purple1 barrelRoll')
        setBodyBG('purple barrelRoll')
    }
    if (colorNum == 1) {
        setClass('green1 barrelRoll')
        setBodyBG('green barrelRoll')
    }
    if (colorNum == 2) {
        setClass('black1 barrelRoll')
        setBodyBG('black barrelRoll')
    }
    if (colorNum == 3) {
        setClass('yellow1 barrelRoll')
        setBodyBG('yellow barrelRoll')
    }
    colorNum++;
}

/* ----first button----- */
clickFirst.addEventListener('click', function (event) {
    setClass("");
    addText(0, 0);
    setTimeout(() => {
        diffColor();
    }, 100);
});
/* ------last button----- */
clickLast.addEventListener('click', function (event) {
    setClass("");
    addText(22);
    diffColor();
});
/* ----next----- */
clickNext.addEventListener('click', function (event) {
    setClass("");
    addText(studentCounter + 1);
    diffColor();
});
/* ------previous----- */
clickPrevious.addEventListener('click', function (e) {
    console.log(e);
    setClass("");
    addText(studentCounter - 1);
    diffColor();
});
/* ------random----- */
clickran.addEventListener('click', function () {
    setClass("");
    addText(Math.floor(Math.random() * 22));
    diffColor();
});


clickBody.addEventListener('click', function () {

});