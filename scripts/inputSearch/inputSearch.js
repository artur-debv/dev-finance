
const buttons = document.getElementById('button_search')



buttons.addEventListener('click',function(){
    const inputValue = document.getElementById('input_Search').value.toLowerCase()
    console.log(inputValue);
})

