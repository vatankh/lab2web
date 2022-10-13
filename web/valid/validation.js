// let enterb = document.querySelector('.enterButton');
const $ = window.$;
let value_Y;
let value_X;
let value_R;
let flag1 = false;
let flag2 = false;
let inputY = document.getElementById("Y_field");
let inputR = document.getElementById("R_field");
let select = document.getElementById("selectx")


$(".check-values.x input").on('change', function () {
    console.log("wait iam validationg 0");

    $(this).siblings(".check-values.x input").prop('checked', false)

})





/*document.getElementById("Y_field")
    .addEventListener('input', e => {
        set_value();
    })

 */

function set_value() {
    console.log("wait iam validationg 1");

    if (!/^-?\d+(\.|,)?\d*$/i.test(inputY.value)) {
        inputY.value = "";
        inputY.style.backgroundColor = "rgba(250, 50, 50, .4)";
        flag1 = true;
    } else {
        let y = inputY.value.replace(/[,]/, ".");
        if (y < -3 || y > 3) {
            flag1 = true;
            inputY.value = "";
            inputY.style.backgroundColor = "rgba(250, 50, 50, .4)";
        } else if (Number(y.split(".")[0]) >= 3 && Number(y.split(".")[1]) > 0) {
            //    error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
            inputY.value = "";
            inputY.style.backgroundColor = "rgba(250, 50, 50, .4)";
            flag1 = true;
        } else if (Number(y.split(".")[0]) <= -5 && Number(y.split(".")[1]) > 0) {
            //    error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
            inputY.value = "";
            inputY.style.backgroundColor = "rgba(250, 50, 50, .4)";
            flag1 = true;
        } else {
            inputY.style.backgroundColor = "rgba(136,232,52,0.4)";
            value_Y = inputY.value;
            flag1 = false;
        }
    }




}
function check_R() {
    console.log("wait iam validationg 2");

    if (!/^-?\d+(\.|,)?\d*$/i.test(inputR.value)) {
        inputR.value = "";
        inputR.style.backgroundColor = "rgba(250, 50, 50, .4)";
        flag2 = true;
    } else {
        let r = inputR.value;
        if (r < 1 || r > 5) {
            flag2 = true;
            inputR.value = "";
            inputR.style.backgroundColor = "rgba(250, 50, 50, .4)";
        } else if (Number(r.split(".")[0]) >= 5 && Number(r.split(".")[1]) > 0) {
            //    error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
            inputR.value = "";
            inputR.style.backgroundColor = "rgba(250, 50, 50, .4)";
            flag2 = true;
        } else  {
            inputR.style.backgroundColor = "rgba(136,232,52,0.4)";
            value_R = inputR.value;
            flag2 = false;
        }
    }

}


/*enterb.addEventListener('click',function () {
    console.log("sdfsdf");

    value_Y = inputY.value.replace(/[,]/,".");
    value_R = inputR.value.replace(/[,]/,".");
    console.log(value_R,value_Y)
    create_get();
})

 */

function setEventListener() {
    console.log("wait iam validationg 3");

    $("#submit").on('click', function (event) {
        console.log("wait iam validationg 4");
        set_value();
        check_R();
        if (select.value){
            value_X=select.value;
        }
        if (!select.value){
            event.preventDefault()
            alert("please select x")
        }else if (flag1){
            event.preventDefault()
            alert("y should be smaller than 3 and bigger than -3")
            flag1 = false;
        }else if (flag2){
            event.preventDefault()
            alert("check R please..")
            flag2=false;
        }
        console.log("wait iam validationg 5");

    })
    console.log("wait iam validationg 6");

}

setEventListener()


