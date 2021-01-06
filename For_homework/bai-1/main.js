const RESULT_1 = document.querySelector("#example_1");

RESULT_1.addEventListener("click", function (e) {
    let n = 0;
    let sum = 0;
    while (sum < 10000) {
        n++;
        sum = sum + n;
    };
    document.querySelector("#see_result_ex_1").innerHTML = n;
});