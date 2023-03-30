let count = 0;

// select value and buttons
const value = document.querySelector("#value");
// using selectorALL...because there are 3 buttons.
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "Blue";
        }
        // be careful not to use only one '=' 
        if (count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    });
});