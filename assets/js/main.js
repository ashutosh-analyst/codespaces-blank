/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }   
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        });
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/

function populatePortfolioProjectSlider() {
  let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== HOME AUTO TYPE ====================*/ 
const homeSubtitleType = new Typed('.home__subtitle span', {
    strings: [
        'Catastrophe Risk Analysis',
        'Data Analysis', 
        'Data Science',
        'Statistical Modeling',
        'Project Management'
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

/*==================== RESUME COLUMN MAINTAIN / OTHER PAGE LOAD JS ====================*/ 
document.addEventListener("DOMContentLoaded", () => {
    const resumeContainer = document.querySelector('.resume__container');
    const contentItems = resumeContainer.querySelectorAll('.resume__content');
    
    if (contentItems.length > 1) {
        resumeContainer.classList.add('multiple');
    } else {
        resumeContainer.classList.remove('multiple');
    }

    // initialzed toastr
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': true,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': false,
      'showDuration': '1000',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut',
    }

    // populate json data in website
    populateJsonToMarkup();
});

function populateJsonToMarkup() {
    fetch("/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch JSON file");
      }
      return response.json();
    })
    .then((data) => {

      // populate site name  
      const siteNameElement = document.querySelectorAll(".siteName");
      siteNameElement.forEach(el => {
        el.textContent = data.siteName || "Portfolio";
      });

      // Populate author details
      const authorEmail = document.querySelectorAll(".authorEmail");
      authorEmail.forEach((el) => {
        el.textContent = data.siteGeneral.author_email || "N/A";
      });

      const authorEmailLink = document.querySelectorAll(".authorEmailLink");
      authorEmailLink.forEach((el) => {
        el.href = `mailto:${data.siteGeneral.author_email || ''}`;
      });

      const authorPhone = document.querySelectorAll(".authorPhone");
      authorPhone.forEach((el) => {
        el.textContent = data.siteGeneral.author_phone || "N/A";
      });

      const authorAddress = document.querySelectorAll(".authorAddress");
      authorAddress.forEach((el) => {
        el.textContent = data.siteGeneral.author_address || "N/A";
      });

      const authorTotalExperienceYear = document.querySelectorAll(".yearsWorkCounter");
      authorTotalExperienceYear.forEach((el) => {
        el.textContent = data.siteGeneral.yearsOfExperience;
      });

      const authorTotalProjects = document.querySelectorAll(".projectCounter");
      authorTotalProjects.forEach((el) => {
        el.textContent = data.siteGeneral.completedProjects;
      });

      const authorTotalCompanies = document.querySelectorAll(".companiesCounter");
      authorTotalCompanies.forEach((el) => {
        el.textContent = data.siteGeneral.companiesWorked;
      });

      const siteDescription = document.querySelectorAll(".siteDescription");
      siteDescription.forEach((el) => {
        el.textContent = data.siteGeneral.description;
      });

      const footerCopy = document.getElementById('footer-copy');
      footerCopy.textContent = data.siteGeneral.copyright;

      // Populate config keys
      const web3FormAccessKey = document.getElementById('web3FormKey');
      web3FormAccessKey.value = data.configKeys.web3form_access_key;

      // set theme from json 
      const getJsonTheme = data.siteGeneral.theme || "light";
      const themeName = getJsonTheme === "light" ? "light" : "dark";
      const themeIcon = getJsonTheme === "light" ? 'uil-sun' : 'uil-moon';
      localStorage.setItem('selected-theme', themeName);
      localStorage.setItem('selected-icon', themeIcon);

      // populate certifications
      const certificationContainer = document.querySelector(".certification__container");
      const certificates = data.certificates || [];

      certificationContainer.innerHTML = "";
      certificates.forEach((cert) => {
        const cardHTML = `
          <div class="certification__card">
            <div class="certification__img-box">
              <img src="${cert.image}" alt="${cert.title}" class="certificate__img">
            </div>
            <div class="certification__data">
              <h3 class="certification__date">${cert.date}</h3>
              <h1 class="certification__title">${cert.title}</h1>
              <span class="certification__subtitle">${cert.from}</span>
              <a href="${cert.verify_url}" target="_blank" class="button button--flex button--small button--link">Verify</a>
            </div>
          </div>
        `;
        certificationContainer.innerHTML += cardHTML;
      });

      // populate all project
      const projectsContainer = document.querySelector(".projects__container");
      const portfolioContainer = document.querySelector(".portfolio__container .swiper-wrapper");
      const portfolioMainContainer = document.querySelector("#portfolio");
      const projects = data.projects || [];

      projectsContainer.innerHTML = "";
      portfolioContainer.innerHTML = "";

      let hasMostRecentProjects = false;

      projects.forEach((project) => {

        // first populate all projects 
        const titleHTML = project.demo_url
          ? `<a href="${project.demo_url}" target="_blank"><h1 class="projects__title">${project.title}</h1></a>`
          : `<h1 class="projects__title">${project.title}</h1>`;

        const pdfClass = project.pdf_link ? '' : 'd--none';
        const cardHTML = `
          <div class="projects__card">
            <div class="projects__img-box">
              <img src="${project.image}" alt="${project.title}" class="projects__img">
            </div>
            <div class="projects__data">
              ${titleHTML}
              <p class="projects__description">${project.description}</p>
            </div>
            <a href="${project.pdf_link || '#'}" target="_blank" class="button button--flex button--small projects__button ${pdfClass}">
              Details <i class="uil uil-book-open button__icon"></i>
            </a>
          </div>
        `;

        projectsContainer.innerHTML += cardHTML;

        // second populate those projects that are most_recent(true) in json
        if (project.most_recent) {
          hasMostRecentProjects = true;

          const slideHTML = `
            <div class="portfolio__content grid swiper-slide">
              <img src="${project.image}" alt="${project.title}" class="portfolio__img">
              <div class="portfolio__data">
                <h3 class="portfolio__title">${project.title}</h3>
                <p class="portfolio__description">${project.description}</p>
                <a href="${project.demo_url || '#'}" class="button button--flex button--small portfolio__button ${
                  project.demo_url ? '' : 'button--hide'
                }">
                  Demo
                  <i class="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          `;
          portfolioContainer.innerHTML += slideHTML;
          populatePortfolioProjectSlider();
        } 
      });

      if (!hasMostRecentProjects) {
        portfolioMainContainer.style.display = "none";
      } else {
        portfolioMainContainer.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error loading website information:", error);
    });
}

/*==================== Handle validations / form submittion ====================*/ 
const form = document.getElementById('contact-form');
const submitButton = form.querySelector('button[type="submit"]');

function validateForm() {
  let isValid = true;
  const inputs = form.querySelectorAll('.contact__input');

  inputs.forEach(input => {
      const parent = input.closest('.contact__content');
      if (!input.value.trim()) {
          parent.style.border = '1px solid red';
          isValid = false;
      } else {
          parent.style.border = '';
      }

      input.addEventListener('input', () => {
          parent.style.border = '';
      });
  });

  return isValid;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateForm()) {
      toastr.error("Please fill in all required fields.");
      return;
  }

  const initialButtonHTML = submitButton.innerHTML;
  submitButton.innerHTML = "Sending...";
  submitButton.disabled = true;

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  
  fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
      .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
              toastr.success("Your message has been submitted successfully", "Successfully!");
          } else {
              console.log(response);
              toastr.error(json.message || "Submission failed.");
          }
      })
      .catch(error => {
          console.log(error);
          toastr.error("Something went wrong!");
      })
      .finally(() => {
          submitButton.innerHTML = initialButtonHTML;
          submitButton.disabled = false;

          form.reset();
      });
});