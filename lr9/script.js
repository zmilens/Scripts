// function getTicket() {
//     return new Promise((resolve, reject) => {
//         console.log('tickets');
//         setTimeout(function () {
//             let success = true; 
//             if (success)
//                 resolve({ id: 1, name: 'Milena', surname:'Zagashtokova', seat: '1A', class: 'econom'})
//             else
//                 reject('Ticket ERROR');
//         }, 1000);
//     })
// }


// function getBooking(ticket) {
//     return new Promise((resolve, reject) => {
//         console.log('Booking');
//         setTimeout(function () {
//             let success = true; 
//             if (success)
//                 resolve({ id: 2, name: 'Milena', surname:'Zagashtokova', room: 10})
//             else
//                 reject('Booking ERROR');
//         }, 1000);
//     })
// }


// function getVisa(booking) {
//     return new Promise((resolve, reject) => {
//         console.log('Visa');
//         setTimeout(function () {
//             let success = true; 
//             if (success)
//                 resolve({ id: 3, name: 'Milena', surname:'Zagashtokova', ticket_id: 1, booking_id: 2 })
//             else
//                 reject('Visa ERROR');
//         }, 1000);
//     })
// }

// let promiseGetTickets = getTicket()
//     .then(ticket => getBooking(ticket))
//     .then(booking => getVisa(booking))
//     .then(visa=> {
//         console.log('Visa voucher:');
//         console.log(visa)})
//     .catch(err => console.error(err));

async function getTicket(id, name, surname, seat, class1) {
    return new Promise((resolve, reject) => {
        console.log('Tickets');
        setTimeout(function () {
            let success = true; 
            if (success)
                resolve({ id: 1, name: 'Milena', surname:'Zagashtokova', seat: '1A', class1: 'econom'})
            else
                reject('Ticket ERROR');
        }, 1000);
    })
}


async function getBooking(ticket) {
    return new Promise((resolve, reject) => {
        console.log('Booking');
        setTimeout(function () {
            let success = true; 
            if (success)
                resolve({ id: 2, name: 'Milena', surname:'Zagashtokova', room: 10})
            else
                reject('Booking ERROR');
        }, 1000);
    })
}


async function getVisa(booking) {
    return new Promise((resolve, reject) => {
        console.log('Visa');
        setTimeout(function () {
            let success = true; 
            if (success)
                resolve({ id: 3, name: 'Milena', surname:'Zagashtokova', ticket_id: 1, booking_id: 2 })
            else
                reject('Visa ERROR');
        }, 1000);
    })
}

(async function main() {
    try {    
    let ticket = await  getTicket();
    let booking = await getBooking();
    let visa =  await getVisa();
        console.log('Visa voucher:');
        console.log(visa)}
    catch(err) {
        console.error(err);}
    finally {}
}) ();