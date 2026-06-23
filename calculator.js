let numbercontainer=document.querySelector(".numbercontainer")

let calculatorcontainer=document.querySelector(".calculatorcontainer")

let screencontainer=document.querySelector(".screencontainer")

let operationcontainer=document.querySelector(".operationcontainer")

let output=document.querySelector(".output")

operations=["+","-","*","/","="]

let firstnum=""
let secondnum=""
let operation1=""

for (let i=9; i>=0; i--){
    let num=document.createElement("button")
    num.className="btn"
    num.textContent=i
    numbercontainer.append(num)
    num.addEventListener("click",() =>{
    output.append(num.textContent)
})
}

for(let i=0; i<5; i++){
    let choice=document.createElement("button")
    choice.className="operation"
    choice.textContent=operations[i]
    operationcontainer.append(choice)
    choice.addEventListener("click",()=>{
        output.append(choice.textContent)
    })
}

calculatorcontainer.append(numbercontainer)
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    if(b!=0){
        return a/b
    }
    return "Error"
}
num.addEventListener("click",()=>{
    let x=num.textContent
})
num.addEventListener("click",() =>{
    let y=num.textContent
})
choice.addEventListener("click",() =>{
    if(choice.textContent=="+"){
        add(x,y)
    }
    else if (choice.textContent=="-"){
        sub(x,y)
    }
    else if (choice.textContent=="*"){
        mul(x,y)
    }
    else{
        div(x,y)
    }
})