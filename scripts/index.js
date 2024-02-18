// buy now button scroll to ticketing section
function scrollButton(){
    getElementId('scrollToTicket');
    const scrollToTickets = getElementId('scrollToTickets');
    scrollToTickets.scrollIntoView({behavior: 'smooth'});
}