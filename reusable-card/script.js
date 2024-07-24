document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');

    const workshops = [
        {
            title: "Workshop 1",
            price: "$100",
            regLink: "registration_link_1.html",
            speaker: "John Doe",
            venue: "Conference Hall",
            timing: "10:00 AM - 4:00 PM",
            poster: "../workshop/workshop1.jpg",
            date: "10th Aug 2024"
        },
        {
            title: "Workshop 2",
            price: "$150",
            regLink: "registration_link_2.html",
            speaker: "Jane Smith",
            venue: "Lecture Room A",
            timing: "1:00 PM - 5:00 PM",
            poster: "../workshop/workshop2.jpg",
            date: "10th Aug 2024"
        },
        {
            title: "Workshop 3",
            price: "$150",
            regLink: "registration_link_2.html",
            speaker: "Jane Smith",
            venue: "Lecture Room A",
            timing: "1:00 PM - 5:00 PM",
            poster: "../workshop/workshop3.jpg",
            date: "10th Aug 2024"
        },
        {
            title: "Workshop 4",
            price: "$150",
            regLink: "registration_link_2.html",
            speaker: "Jane Smith",
            venue: "Lecture Room A",
            timing: "1:00 PM - 5:00 PM",
            poster: "../workshop/workshop4.jpg",
            date: "10th Aug 2024"
        },
        // Add more workshops here
    ];

    workshops.forEach(workshop => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${workshop.poster}" alt="Workshop Poster" class="poster">
            <div class="card-content">
                <h2 class="title">${workshop.title}</h2>
                <p class="price">Registration Price: ${workshop.price}</p>
                <a href="${workshop.regLink}" class="reg-link">Register Here (${workshop.price})</a>
                <p class="speaker">Speaker: ${workshop.speaker}</p>
                <p class="venue-time">
                    <i class="bi bi-geo-alt-fill"></i> ${workshop.venue}<br>
                    <i class="bi bi-calendar-event"></i> ${workshop.date}<br>
                    <i class="bi bi-alarm"></i> ${workshop.timing}
                </p>
            </div>
        `;
        
        cardContainer.appendChild(card);
    });
});