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
