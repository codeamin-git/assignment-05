function getElement(elementId){
    const element = document.getElementById(elementId);
    return element;
}

let selectedSeatsCount = 0;
function setBackgroundColorById(elementId){
    elementId.classList.add('bg-[#1DD100]');
    elementId.classList.add('text-white');
    selectedSeatsCount++;
    remainingSeats--;
    seatCount();
    seatLeft();
    fareCount();
    seatDetails(elementId.id);
    checkCoupon();
    seatAndPhoneValidation();
}

const selectedSeats = new Set();

function selectASeat(seatId){
    const seatNo = getElement(seatId);
    seatNo.addEventListener('click', function(){
        if(!selectedSeats.has(seatId) && selectedSeatsCount < 4){
            setBackgroundColorById(seatNo);
            selectedSeats.add(seatId);
            checkCoupon();
        }
        else if(selectedSeats.has(seatId)){
            alert('This seat has already been selected');
        } else{
            alert('You can not purchase more than four seats at a time');
        }
    })
}

function seatAndPhoneValidation(){
    const number = getElement('phone-number');
    const checkInput = number.value;
    const nextButton = getElement('next-button');
    if(isNaN(parseInt(checkInput)) || isNaN(selectedSeatsCount) || selectedSeatsCount === 0){
        nextButton.disabled = true;
    } else{
        nextButton.disabled = false;
        nextButton.classList.add('bg-[#1DD100]');
        nextButton.addEventListener('click', function(){
            const modalButton = getElement('modal-container');
            modalButton.classList.remove('hidden');
            const modalToggle = getElement('my_modal_6');
            modalToggle.click();
            const modalContinue = getElement('modal-continue');
            modalContinue.addEventListener('click', function(){
                modalButton.classList.add('hidden');
            })
        })
    }
}

function checkCoupon(){
    const couponContainer = getElement('coupon-container');
    const couponApplyButton = getElement('coupon-button');
    const coupon = getElement('coupon');
    const couponValue = coupon.value;
    if(couponValue === 'NEW15'){
        couponApplyButton.disabled = false;
        couponApplyButton.classList.add('bg-[#1DD100]');
        couponApplyButton.addEventListener('click', function(){
            fareCount(0.15);
            couponContainer.classList.add('hidden');
        })
    }
    else if(couponValue === 'Couple 20'){
        couponApplyButton.disabled = false;
        couponApplyButton.classList.add('bg-[#1DD100]');
        couponApplyButton.addEventListener('click', function(){
            fareCount(0.20);
            couponContainer.classList.add('hidden');
        })
    } else{
        if(couponApplyButton.disabled = true){
        couponApplyButton.classList.remove('bg-[#1DD100]');
        }
    }
}

function seatDetails(selectedSeatId){
    const seatInfo = getElement('seat-details');
    const seatName = getElement(selectedSeatId).innerText;
    seatInfo.innerText = seatName;
}

let totalFare = 0;
function fareCount(discountRate = 0){
    const grandTotal = getElement('grand-total');
   totalFare = selectedSeatsCount * 550;
    const totalAmount = getElement('total-price');
    if(discountRate > 0){
        totalFare = totalFare * (1 - discountRate);
    }
    grandTotal.innerText = totalFare;
    totalAmount.innerText = totalFare;
}

function seatCount(){
    const selectedSeat = getElement('seat-count');
    selectedSeat.innerText = selectedSeatsCount;
    
}

let remainingSeats = 8;
function seatLeft(){
    const seatLeft = getElement('remaining-seats');
    seatLeft.innerText = remainingSeats;
}