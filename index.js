var display = document.getElementById('display')
var valueArr = ['#']

console.log(display.innerText)
function displayControl(x){
   display.innerText = x
}

// displayControl()

function addToDisplay(ele){

   let val = validation(ele)
    
}

function validation(ele){
    valueArr.push(ele)

    let val = valueArr[valueArr.length -2 ] 
    console.log(ele)
    // console.log(val)
    if(val == '#'){
        if(ele == '-' || !isNaN(ele)){
            display.innerText += ele
        }
        else{
            
            alert("first letter should either be '-' or number ")
            valueArr.pop()
            
        }
    }else{
        if(isNaN(ele)){
            if(isNaN(val) && val !== '-'){
                alert("No multiple operator is allowed")
                valueArr.pop()
            }else if(isNaN(val) && ele == '-'){
                display.innerText += ele  
            }else display.innerText += ele
        }else display.innerText += ele
        // if ele is not a number
        

        }
        var temp = ele
    }
    
    


function del(){
    valueArr.pop()
    displayControl(display.innerText.slice(0,-1))
}

function reset(){
    display.innerText = " "
    valueArr = ['#']
}

function submit(){
    if(isNaN(valueArr[valueArr.length-1]) ){
        alert('last element cannot be opertor')
    }else{
    let res = eval(display.innerText)
    displayControl(res.toFixed(2))
    
    }}


