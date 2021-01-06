const RESULT_3 = document.getElementById("example_3");


RESULT_3.addEventListener("click", function () {
    let n = Number(document.getElementById("value_ex_3").value);
    let sum = handleEx_4(n);
    document.getElementById("see_result_ex_3").innerHTML = sum;
});


function handleEx_4(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;
    };
    return total;
};