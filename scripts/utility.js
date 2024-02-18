function getElement(elementId){
    const element = document.getElementById(elementId);
    return element;
}

function setBackgroundColorById(elementId){
    elementId.classList.add('bg-[#1DD100]');

}
function selectASeat(seatId){
    const seatNo = getElement(seatId);
    seatNo.addEventListener('click', function(){
        setBackgroundColorById(seatNo);
    })

}
