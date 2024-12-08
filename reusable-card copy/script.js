document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('card-container');

    const workshops = [
        {
            title: "Drone Technology",
            price: "$100",
            regLink: "registration_link_1.html",
            speaker: "John Doe",
            venue: "Conference Hall",
            timing: "10pm",
            poster: "../workshop/workshop1.jpg",
            date: "26.07"
        },
        {
            title: "Robotics",
            price: "$150",
            regLink: "registration_link_2.html",
            speaker: "Jane Smith",
            venue: "Lecture Room A",
            timing: "1pm",
            poster: "../workshop/workshop2.jpg",
            date: "26.07"
        },
        {
            title: "Industry 4.0",
            price: "$150",
            regLink: "registration_link_2.html",
            speaker: "Jane Smith",
            venue: "Lecture Room A",
            timing: "1pm",
            poster: "../workshop/workshop3.jpg",
            date: "26.07"
        },
        {
            title: "AI and Machine Learning",
            price: "$150",
            regLink: "registration_link_2.html",
            speaker: "Jane Smith",
            venue: "Lecture Room A",
            timing: "1pm",
            poster: "../workshop/workshop4.jpg",
            date: "26.07"
        },
        // Add more workshops here
    ];

    workshops.forEach(workshop => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="poster">
            <img src="${workshop.poster}"  alt="">
            </div>
        <div class="details">
            <h1>${workshop.title}</h1>
            <p>Tony Stark</p>
            <div class="time">${workshop.date} &nbsp; <span>|</span> &nbsp; ${workshop.timing}</div>
            <button>Register</button>
        </div>
        <img src="../barcode.png" class="barcode" alt="">
            
        `;

        cardContainer.appendChild(card);
    });
});
// <img src="${workshop.poster}" alt="Workshop Poster" class="poster">
// <div class="card-content">
//     <h2 class="title">${workshop.title}</h2>
//     <p class="price">Registration Price: ${workshop.price}</p>
//     <a href="${workshop.regLink}" class="reg-link">Register Here (${workshop.price})</a>
//     <p class="speaker">Speaker: ${workshop.speaker}</p>
//     <p class="venue-time">
//         <i class="bi bi-geo-alt-fill"></i> ${workshop.venue}<br>
//         <i class="bi bi-calendar-event"></i> ${workshop.date}<br>
//         <i class="bi bi-alarm"></i> ${workshop.timing}
//     </p>
// </div>