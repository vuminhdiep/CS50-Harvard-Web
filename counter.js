let counter = 0;
function count(){
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter%10 === 0){
        alert(`Count is now ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded', function(){
 document.querySelector('button').onclick = count; //Set out count function when click on the button. Functions can be treated as values of their own
}); //1st param is the event, 2nd is the anonymous function to run  the code inside