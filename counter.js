//let counter = 0;

if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}
function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter',counter);

    // if (counter%10 === 0){
    //     alert(`Count is now ${counter}`)
    // }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count; //Set out count function when click on the button. Functions can be treated as values of their own
    //setInterval(count,1000); //auto run counter every second

}); //1st param is the event, 2nd is the anonymous function to run  the code inside
