// document.addEventListener('DOMContentLoaded', function () {
//     const timeline = document.querySelector('.timeline');

//     // Add timeline items
//     const birthYear = 2000;
//     const currentYear = new Date().getFullYear();
//     const timelineData = [];

//     for (let year = birthYear; year <= currentYear; year++) {
//         const age = year - birthYear;
//         const photo = `photos/${year}.jpg`;

//         timelineData.push({
//             year: year,
//             age: age,
//             photo: photo,
//             title: `${year}`,
//         });
//     }

//     timelineData.forEach(event => {
//         const item = document.createElement('div');
//         item.classList.add('timeline-item');

//         let content = '';
//         console.log(event.year);
//         if(event.year === 2000) {
//             content = `
//             <div class="event">
//             <div class="content">
//                  <img class="timeline-image">
//                  <div class="birth-info">
//                  <p>BIRTH</p>
//                  <p>Place: Zestaponi, Georgia</p>
//                  <p>Date: Friday, 28th of July</p>
//                  <p>Time: 17:30</p>
//                  </div>
//                 <h2>${event.title}</h2>

//             </div>
            
//             </div>
//     </div>
//         `;
//         }
//         else {
//             content = `

//             <div class="pic-desc">

//             <div class="event">
//             <img src="${event.photo}" alt="Year ${event.year}" class="timeline-image">       
//             </div>
//             <div class="description">
//             <p>DESCRIPTION GOES HERE foryear ${event.year}</p>
//     </div>
//             </div>
//     <div class="content">
//                 <h2>${event.title}</h2>
//                 <p class="age">~${event.age} years old</p>
//             </div>
//         `;

           
//         }
        

//         item.innerHTML = content;
//         timeline.appendChild(item);
//          // Add click event listener to each image
//          const image = item.querySelector('.timeline-image');
//          image.addEventListener('click', function () {
//              image.classList.toggle('maximized');
//          });
        
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.querySelector('.timeline');

    // Add timeline items
    const birthYear = 2000;
    const timelineData = [];

    // Fetch CSV file
    fetch('descriptions.csv')
        .then(response => response.text())
        .then(csvData => {
            // Parse CSV data
            Papa.parse(csvData, {
                header: true,
                dynamicTyping: true,
                complete: function (results) {
                    results.data.forEach(row => {
                        const year = parseInt(row.year);
                        const age = year - birthYear;
                        const photo = `photos/${year}.jpg`;
                        
                        timelineData.push({
                            year: year,
                            age: age,
                            photo: photo,
                            title: `${year}`,
                            description: row.description,
                        });
                    });

                    // Create timeline items
                    timelineData.forEach(event => {
                        const item = document.createElement('div');
                        item.classList.add('timeline-item');

                        let content = '';

                        if (event.year === 2000) {
                            content = `
                            <div class="event">
                            <div class="content">
                                 <img class="timeline-image">
                                 <div class="birth-info">
                                 <p>BIRTH</p>
                                 <p>Place: Zestaponi, Georgia</p>
                                 <p>Date: Friday, 28th of July</p>
                                 <p>Time: 17:30</p>
                                 </div>
                                <h2>${event.title}</h2>
                
                            </div>
                            
                            </div>
                    </div>
                            `;
                        } else {
                            content = `
                                <div class="pic-desc">
                                    <div class="event">
                                        <img src="${event.photo}" alt="Year ${event.year}" class="timeline-image">
                                    </div>
                                    <div class="description">
                                        <p>${event.description}</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <h2>${event.title}</h2>
                                    <p class="age">~${event.age} years old</p>
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
                },
            });
        })
        .catch(error => console.error('Error fetching CSV file:', error));
});

