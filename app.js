let label = document.querySelector("label");
        let box = document.querySelector(".box");
        let round = document.querySelector(".round");
        let chk = document.querySelector("#chk");

            label.onclick = function() {
            if(chk.checked) {
                box.style.backgroundColor = "lime";
                round.style.left = "30px";
            }
            if(!chk.checked) {
                box.style.backgroundColor = "lightgray";
                round.style.left = "3px";
            }
        }