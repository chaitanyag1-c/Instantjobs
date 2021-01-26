let hambutton=document.querySelector('.ham-button')
let hamburger=document.querySelector('.hamburger')


function hamShow() 
{

    if(hamburger.classList.contains('hamburger-hide'))
{
    hamburger.classList.add('hamburger-show')
    hamburger.classList.remove('hamburger-hide')
}

}

function hamHide(){
    
    if(hamburger.classList.contains('hamburger-show'))
    {
        hamburger.classList.add('hamburger-hide');
        hamburger.classList.remove('hamburger-show');
    }
}