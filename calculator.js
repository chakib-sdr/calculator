const array = [7, 8, 9, "reset", 4, 5, 6, "/", 1, 2, 3, "*", 0, "=", "+", "-"] 

const containerbuttons = document.querySelector(".containerbuttons") 
const display = document.querySelector(".display") 

let result 
let a = "" 
let b = "" 
let operator 

for (let i = 0; i < array.length; i++) {
    const btn = document.createElement("button")
    btn.textContent = array[i]
    btn.className = "btn"   
    containerbuttons.appendChild(btn)   
}

const btns = document.querySelectorAll(".btn")   

btns.forEach(button => {

    button.addEventListener("click", () => {

        
        if (button.textContent === "reset") {
            display.textContent = ""   
            a = ""   
            b = ""   
            operator = undefined   
            result = undefined   
            return   
        }

        
        if (!isNaN(button.textContent)) {

            if (operator === undefined) {
                a += button.textContent   
            } else {
                b += button.textContent   
            }

            display.textContent += button.textContent   
            return   
        }

        
        if (
            button.textContent === "+" ||
            button.textContent === "-" ||
            button.textContent === "*" ||
            button.textContent === "/"
        ) {

            
            if (a === "") return   

            
            
            if( b!=="" && operator !== undefined){

                
            if (operator === "+") {
                result = Number(a) + Number(b)   
            }

            if (operator === "-") {
                result = Number(a) - Number(b)   
            }

            if (operator === "*") {
                result = Number(a) * Number(b)   
            }

            if (operator === "/") {
                if (Number(b) !== 0) {
                    result = Number(a) / Number(b)   
                } else {
                    result = "Error"   
                }
            }
            display.textContent = result   

            
            a = String(result)   
            b = ""   
            operator = undefined 
        }

    operator = button.textContent;
    display.textContent += operator;
    return
    }

        
        if (button.textContent === "=") {

            if (a === "" || b === "" || operator === undefined) return   

            if( b!=="" && operator !== undefined){

                
            if (operator === "+") {
                result = Number(a) + Number(b)   
            }

            if (operator === "-") {
                result = Number(a) - Number(b)   
            }

            if (operator === "*") {
                result = Number(a) * Number(b)   
            }

            if (operator === "/") {
                if (Number(b) !== 0) {
                    result = Number(a) / Number(b)   
                } else {
                    result = "Error"   
                }
            }

            display.textContent = result   

            
            a = String(result)   
            b = ""   
            operator = undefined 
            return
            }
           
  
        }
        

    })   

});