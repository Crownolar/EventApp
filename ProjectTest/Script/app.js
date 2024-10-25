import { loadEventContent } from './event.js';
import { loadHomeContent } from './home.js';

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const closeSideBar = document.querySelector(".CloseSideBar");
const sideBar = document.querySelector(".SideBar");

// Navigation links

// Rest of your script...


const Sidebar = document.querySelector('.SideBar');
const collapseBtn = document.getElementById('collapseBtn');
const sidebarText = document.querySelectorAll('.text'); // This selects all elements with class 'text'
const userNormsText = document.querySelectorAll('.userNorms .text'); // Selects the text inside userNorms
let isCollapsed = false; // To track the state of the sidebar


collapseBtn.addEventListener('click', () => {
  if (!isCollapsed) {
    // Collapse the sidebar
    Sidebar.style.width = '80px';
    sidebarText.forEach(text => {
      text.style.display = 'none'; // Hide sidebar menu text
    });
    userNormsText.forEach(text => {
      text.style.display = 'none'; 
    });
  } else {
    Sidebar.style.width = '250px';
    sidebarText.forEach(text => {
      text.style.display = 'inline-block'; 
    });
    userNormsText.forEach(text => {
      text.style.display = 'inline-block'; 
    });
  }
  
  isCollapsed = !isCollapsed;
});




document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById("eventChart").getContext("2d");
  const eventsChart = new Chart(ctx, {
      type: "bar",
      data: {
          labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
          ],
          datasets: [
              {
                  data: [300, 400, 500, 600, 700, 800, 900, 1000, 900, 800, 700, 600],
                  backgroundColor: "#8576FF",
              },
          ],
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              x: {
                  grid: {
                      color: "rgba(255, 255, 255, 0.5)", 
                      borderDash: [5, 5], 
                      drawBorder: true, 
                      drawOnChartArea: true, 
                  },
              },
              y: {
                  grid: {
                      color: "rgba(255, 255, 255, 0.5)", 
                      borderDash: [5, 5], 
                      drawBorder: true, 
                      drawOnChartArea: true, 
                  },
              },
          },
      },
  });
});


const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

document.querySelectorAll('.event-row').forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
    
       const detailsRow = this.nextElementSibling;
    if (detailsRow && detailsRow.classList.contains('extra-details')) {
      detailsRow.style.display = detailsRow.style.display === 'table-row' ? 'none' : 'table-row';
    }
    
    document.querySelectorAll('.event-row').forEach(other => {
      if (other !== this) {
        other.classList.remove('active');
        const otherDetails = other.nextElementSibling;
        if (otherDetails && otherDetails.classList.contains('extra-details')) {
          otherDetails.style.display = 'none';
        }
      }
    });
  });
});

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

const navLinks = document.querySelectorAll('#sidebar li');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(nav => nav.classList.remove('active'));
    
    this.classList.add('active');
  });
});

hamburgerMenu.addEventListener("click", () => {
  sideBar.classList.add("active");
});

closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.sideBarMenu a');
  const contents = document.querySelectorAll('.content');
  const summaryPart = document.querySelector('.summaryPart');
  const chartCarousel = document.querySelector('.chartCarousel');
  const eventsHistory = document.querySelector('.eventsHistory');

  // Function to show content based on the active link
  const updateContent = (contentId) => {
    contents.forEach(content => {
      content.classList.remove('active'); // Hide all content
    });

    const activeContent = document.getElementById(contentId);
    if (activeContent) {
      activeContent.classList.add('active'); // Show the selected content
    }

    // Show or hide the summary part based on the selected content
    if (contentId === 'home') {
      summaryPart.style.display = 'block';
      chartCarousel.style.display = 'block' // Show summary part for Home
      eventsHistory.style.display = 'block' // Show summary part for Home
    } else {
      summaryPart.style.display = 'none'; // Hide summary part for other links
      chartCarousel.style.display = 'none' // Show summary part for Home
      eventsHistory.style.display = 'none' // Show summary part for Home
    }
  };

  // Initially set the Home link as active if no link is active
  const initialLink = document.querySelector('.sideBarMenu a.active') || document.querySelector('.sideBarMenu a[data-content="home"]');
  if (initialLink) {
    initialLink.classList.add('active');
    initialLink.style.backgroundColor = '#8576FF'; // Change this color as needed

    const initialContentId = initialLink.getAttribute('data-content');
    updateContent(initialContentId); // Show content based on the active link
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove the active class from all links
      navLinks.forEach(nav => {
        nav.classList.remove('active');
        nav.style.backgroundColor = ''; // Reset background color
      });

      // Add the active class to the clicked link
      this.classList.add('active');
      this.style.backgroundColor = '#8576FF'; // Change this color as needed

      // Get the content ID from the data attribute
      const contentId = this.getAttribute('data-content');
      updateContent(contentId); // Update the main content
    });
  });
});




