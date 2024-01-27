// app.js

const eventsData = [
  "Weekly Contest 109",
  "Weekly Contest 110",
  "Weekly Contest 111",
  "Weekly Contest 112",

  
];

function populateData() {
  const eventsContainer = document.querySelector('.events-container');

  // Create a container to hold all the events in a row
  const eventsRowContainer = document.createElement('div');
  eventsRowContainer.classList.add('events-row-container');

  // Set the row container as a flex container
  eventsRowContainer.style.display = 'flex';

  // Append the row container to the events container
  eventsContainer.appendChild(eventsRowContainer);

  // Populate events
  eventsData.forEach((event, index) => {
      const eventComponent = document.createElement('div');
      eventComponent.classList.add('events-component');

      // Event component design
      eventComponent.innerHTML = `
          <div class="Event1" style="position: relative; top: 90px; background: linear-gradient(0deg, 0%, 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%); box-shadow: -16px -16px 4px rgba(210.37, 210.37, 210.37, 0.04) inset; backdrop-filter: blur(4px); flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
              <div class="Rectangle1" style="width: 230px; height: 160px; background: rgba(153.85, 153.85, 153.85, 0.15); border-radius: 42px; border: 2px white solid; color: white; font-size: 15px; font-family: Poppins; font-weight: 700; letter-spacing: 2px; display: flex; justify-content: center; align-items: center">${event}</div>
          </div>
      `;

      // Set margin-right to create space between components
      eventComponent.style.marginRight = '10px';

      eventComponent.style.marginLeft = '55px';

      // Append each event to the row container
      eventsRowContainer.appendChild(eventComponent);
  });

  // Check if the number of components exceeds 4 to apply carousel
  if (eventsData.length > 4) {
      // Add event listeners for arrow buttons
      const leftArrow = document.querySelector('.left');
      const rightArrow = document.querySelector('.right');
      const carousel = document.querySelector('.carousel');

      let currentIndex = 0;

      leftArrow.addEventListener('click', () => {
          if (currentIndex > 0) {
              currentIndex--;
              updateCarousel();
          }
      });

      rightArrow.addEventListener('click', () => {
          const totalItems = eventsData.length;
          if (currentIndex < totalItems - 1) {
              currentIndex++;
              updateCarousel();
          }
      });

      function updateCarousel() {
          const itemWidth = document.querySelector('.events-component').offsetWidth;
          const newPosition = -currentIndex * itemWidth;
          carousel.style.transform = `translateX(${newPosition}px)`;
      }
  } else {
      // If the number of components is 4 or less, deactivate the carousel
      document.querySelector('.left').style.display = 'none';
      document.querySelector('.right').style.display = 'none';
  }
}

// app.js

const upcomingEventsData = [
    "Upcoming Event 1",
    "Upcoming Event 2",
    "Upcoming Event 3",
    "Upcoming Event 4",
    "Upcoming Event 5",
    "Upcoming Event 6",
];

function populateUpcomingEvents() {
    const upcomingEventsContainer = document.querySelector('.upcoming-events-container');

    const upcomingEventsRowContainer = document.createElement('div');
    upcomingEventsRowContainer.classList.add('upcoming-events-row-container');
    upcomingEventsRowContainer.style.display = 'flex';
    upcomingEventsContainer.appendChild(upcomingEventsRowContainer);

    upcomingEventsData.forEach((event, index) => {
        const eventComponent = document.createElement('div');
        eventComponent.classList.add('upcoming-events-component');
        eventComponent.innerHTML = `
            <div class="UpcomingEvent" style="position: relative; top: 190px; background: linear-gradient(0deg, 0%, 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%); box-shadow: -16px -16px 4px rgba(210.37, 210.37, 210.37, 0.04) inset; backdrop-filter: blur(4px); flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div class="UpcomingRectangle" style="width: 230px; height: 160px; background: rgba(153.85, 153.85, 153.85, 0.15); border-radius: 42px; border: 2px white solid; color: white; font-size: 15px; font-family: Poppins; font-weight: 700; letter-spacing: 2px; display: flex; justify-content: center; align-items: center">${event}</div>
            </div>
        `;

        eventComponent.style.marginRight = '10px';
        eventComponent.style.marginLeft = '55px';

        upcomingEventsRowContainer.appendChild(eventComponent);
    });

    // Check if the number of upcoming events exceeds 4 to apply carousel
    if (upcomingEventsData.length > 4) {
        const upcomingLeftArrow = document.querySelector('.upcoming-left');
        const upcomingRightArrow = document.querySelector('.upcoming-right');
        const upcomingCarousel = document.querySelector('.upcoming-carousel');

        let upcomingCurrentIndex = 0;

        upcomingLeftArrow.addEventListener('click', () => {
            if (upcomingCurrentIndex > 0) {
                upcomingCurrentIndex--;
                updateUpcomingCarousel();
            }
        });

        upcomingRightArrow.addEventListener('click', () => {
            const upcomingTotalItems = upcomingEventsData.length;
            if (upcomingCurrentIndex < upcomingTotalItems - 1) {
                upcomingCurrentIndex++;
                updateUpcomingCarousel();
            }
        });

        function updateUpcomingCarousel() {
            const upcomingItemWidth = document.querySelector('.upcoming-events-component').offsetWidth;
            const upcomingNewPosition = -upcomingCurrentIndex * upcomingItemWidth;
            upcomingCarousel.style.transform = `translateX(${upcomingNewPosition}px)`;
        }
    } else {
        document.querySelector('.upcoming-left').style.display = 'none';
        document.querySelector('.upcoming-right').style.display = 'none';
    }
}




// Call populateData to load initial data
populateData();
populateUpcomingEvents();
