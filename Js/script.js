
let height = document.querySelector(".height input")
let weight = document.querySelector(".weight input")
let button = document.querySelector(".main button")
let result = document.querySelector(".main .result")
let error1= document.querySelector(".main .height span")
let error2= document.querySelector(".main .weight span")
let p = document.querySelector(".main .comment")

button.addEventListener("click", function(){
    if(height.value == ""){
        error1.innerHTML= "Please Enter Your height in (IN)"
    }else{
        error1.innerHTML = ""
    }

    if ( weight.value == "") {
        error2.innerHTML = "Please Enter Your weight in (KG)"
    }else{
        error2.innerHTML = ""
    }

    if ( !height.value ==""  && !weight.value == "") {
        let bmi = (weight.value*2.20462) / (height.value*height.value) * 703
        result.innerHTML="Result: "+ bmi.toFixed(2)
        
    if (bmi <18.5) {
        p.innerHTML = "Under Weight"
        result.style.color= "Yellow"
    } else if(bmi >= 15.5 && bmi <= 24.9){
        p.innerHTML = "Good Weight"
        result.style.color= "green"
    } else if (bmi > 24.9){
        p.innerHTML = "Over weight"
        result.style.color= "red"
    }
    }
})
