const hamburgerMenu = document.querySelector(".hamburgerMenu");
const closeSideBar = document.querySelector(".CloseSideBar");
const sideBar = document.querySelector(".SideBar");

hamburgerMenu.addEventListener("click", () => {
  sideBar.classList.add("active");
});

closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

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
      text.style.display = 'none'; // Hide userNorms text
    });
  } else {
    // Expand the sidebar
    Sidebar.style.width = '250px';
    sidebarText.forEach(text => {
      text.style.display = 'inline-block'; // Show sidebar menu text
    });
    userNormsText.forEach(text => {
      text.style.display = 'inline-block'; // Show userNorms text
    });
  }
  
  // Toggle the collapse state
  isCollapsed = !isCollapsed;
});




const ctx = document.getElementById("eventChart").getContext("2d"); // Fixed the ID issue
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
