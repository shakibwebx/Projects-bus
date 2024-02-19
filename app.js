const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
let count2 = 20;

let ticketPrice = 550;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        if (count < 4) {
            count = count + 1;
            
            setInnerText("seat-count", count);
            
            count2 = 20 - count;
            
            setInnerText("seat-left", count2);
            
            e.target.style.backgroundColor = "#22C55E";
            e.target.setAttribute("disabled", false);

            const ticketName = e.target.innerText;

        

            const selectedContainer = document.getElementById("selected-place-conatiner");
    
            const li = document.createElement("li");
            
    
            const p = document.createElement("p");
            p.innerText = ticketName;
    
            const p2 = document.createElement("p");
            p2.textContent = "Economy"
            
            const p3 = document.createTextNode("550");
            
    
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);
    
            selectedContainer.appendChild(li);

            ticketPrice = count * 550;

            setInnerText("total-price", ticketPrice);

            setInnerText("grand-price", ticketPrice)


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
