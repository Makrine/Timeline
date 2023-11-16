document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.querySelector('.timeline');

    // Add timeline items
    const birthYear = 2000;
    const currentYear = new Date().getFullYear();
    const timelineData = [];

    for (let year = birthYear; year <= currentYear; year++) {
        const age = year - birthYear;
        const photo = `photos/${year}.jpg`;

        timelineData.push({
            year: year,
            age: age,
            photo: photo,
            title: `${year}`,
        });
    }

    timelineData.forEach(event => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');

        let content = '';
        console.log(event.year);
        if(event.year === 2000) {
            content = `
            <div class="content">
                 <img class="timeline-image">
                 <div class="birth-info">
                 <p>Place: Zestaponi, Georgia</p>
                 <p>Date: Friday, 28th of July</p>
                 <p>Time: 17:30</p>
                 </div>
                <h2>${event.title}</h2>
                <p class="age">${event.age} years old</p>
            </div>
        `;
        }
        else {
            content = `
            <img src="${event.photo}" alt="Year ${event.year}" class="timeline-image">
            <div class="content">
                <h2>${event.title}</h2>
                <p class="age">${event.age} years old</p>
            </div>
        `;

           
        }
        

        item.innerHTML = content;
        timeline.appendChild(item);
         // Add click event listener to each image
         const image = item.querySelector('.timeline-image');
         image.addEventListener('click', function () {
             image.classList.toggle('maximized');
         });
        
    });
});
