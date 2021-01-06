const FORM_2 = document.querySelector("#form-2");

const RESULT_2 = FORM_2.querySelector("#example_2");

RESULT_2.addEventListener("click", function (e) {
    e.preventDefault();
    let x = Number(FORM_2.querySelector("#value_ex_2-1").value);
    let n = Number(FORM_2.querySelector("#value_ex_2-2").value);
    let sum = handleEx_2(x, n);
    document.getElementById("see_result_ex_2").innerHTML = sum;
    
});

function handleEx_2(x, n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let y = Math.pow(x, i);
        sum += y;
    };
    return sum + x;
};

let input_1 = FORM_2.querySelector("#value_ex_2-1");
let input_2 = FORM_2.querySelector("#value_ex_2-2");
function validate(x, y) {
    let errNotice_1 = document.querySelector("#err_2-1");
    let errNotice_2 = document.querySelector("#err_2-2");
    x.onblur = function () {
        if (x.value == "") {
            if (x.id === "value_ex_2-1") {
                errNotice_1.innerHTML = "Đây là thông báo lỗi input 1";
            }
        }
    }
    y.onblur = function () {
        if (y.value == "") {
            if (y.id === "value_ex_2-2") {
                errNotice_2.innerHTML = "Đây là thông báo lỗi input 2";
            }
        }
    }
    x.oninput = function () {
        errNotice_1.innerHTML = "";
    }

    y.oninput = function () {
        errNotice_2.innerHTML = "";

    }
};

validate(input_1, input_2);
