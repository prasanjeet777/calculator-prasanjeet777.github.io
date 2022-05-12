let textField = document.getElementById('textField');
let buttons = document.querySelectorAll('button');
let textFieldValue = "";
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            textFieldValue += buttonText;
            textField.value = textFieldValue; 
        }
        else if(buttonText == 'C'){
            textFieldValue = '';
            textField.value = textFieldValue;
        }
        else if(buttonText == '='){
            textFieldValue = eval(textFieldValue);

        }
        else
        textFieldValue += buttonText;
        textField.value = textFieldValue; 
    })
}

 
