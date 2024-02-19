function navButton(){
    const navBtn = getElement('nav-btn');
    const seatContainer = getElement('select-seat');
    navBtn.addEventListener('click', function(){
        seatContainer.scrollIntoView({behavior: "smooth"});
    })
}

// buy now button scroll to ticketing section
function scrollButton(){
    getElement('scrollToTicket');
    const scrollToTickets = getElement('scrollToTickets');
    scrollToTickets.scrollIntoView({behavior: 'smooth'});
}
navButton();
selectASeat('A2');
selectASeat('A3');
selectASeat('A4');
selectASeat('B1');
selectASeat('A1');
selectASeat('B2');
selectASeat('B3');
selectASeat('B4');

