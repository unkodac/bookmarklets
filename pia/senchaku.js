document.getElementsByClassName("ticketSelect__actionLabel")[0].click();
const changeEvent = new Event('change');
document.getElementsByName("Y15-seatdata-seat_size_1")[0].value = "2";
document.getElementsByName("Y15-seatdata-seat_size_1")[0].dispatchEvent(changeEvent);
document.getElementsByClassName("button button--next Y15-ticket-entry-btn-app")[1].click();
document.getElementsByClassName("Y15-regular-btn Y15-agree-modal button button--next js-modal-innerFirstElement")[0].click();

document.getElementsByClassName("accordion__label")[1].click();
document.getElementsByClassName("button button--next")[0].click();
