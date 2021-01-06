const RESULT_4 = document.getElementById("example_4");

RESULT_4.onclick = function (e) {
    e.preventDefault();
    let valueInput = 10;
    for (let i = 0; i < valueInput; i++) {
        if (i % 2 == 0) {
            let bg_red = document.createElement("div");
            bg_red.innerHTML = `
            <div class="bg-red">
            ${i} Chẵn
            </div>`;
            document.getElementById("see_result_ex_4").appendChild(bg_red);
        } else {
            let bg_blue = document.createElement("div");
            bg_blue.innerHTML = `
            <div class="bg-blue">
            ${i} Lẻ
            </div>`;
            document.getElementById("see_result_ex_4").appendChild(bg_blue);
        };
    };
};