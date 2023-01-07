//----------VARIABLES----------\\
let count = 0;
const value = document.querySelector("#input");
const btns = document.querySelectorAll(".btn");

//------event controlling the counter function-----------\\
btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")){count  ++;}
        else if(styles.contains("decrease")){count --;}
        if (styles.contains("reset")){count = 0;}

        if (count > 0){value.style.color = "green"}
        if (count < 0){value.style.color = "red";}
        if (count === 0){value.style.color = "#333";}
        
        value.textContent = count;
    })

})


