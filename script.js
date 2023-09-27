let string ="";

let btns = document.querySelectorAll(".btn")
// console.log(btns)
// console.log("Type :", typeof(btns))

let array = Array.from(btns)

array.forEach((button) => {
    // console.log('Button:', button);
    button.addEventListener("click", (e) => {
        // console.log(e.target);
        if(e.target.innerHTML == "="){
            string = eval(string).toString();
        }
        else if(e.target.innerHTML == "C")
            string = ""
        else{
            string = string + e.target.innerHTML;
        }
        let input = document.getElementsByClassName("input");
        document.querySelector("input").value = string;
    })
})

