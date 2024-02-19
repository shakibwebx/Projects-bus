const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
let count2 = 16;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        if (count < 4) {
            count = count + 1;
            
            setInnerText("seat-count", count);
            
            count2 = 16 - count;
            
            setInnerText("seat-left", count2);
            
            e.target.style.backgroundColor = "#22C55E";
            e.target.setAttribute("disabled", false);
        } else {
            
            for (const btn of allBtn) {
                btn.removeEventListener("click", function () {});
            }
        }
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
