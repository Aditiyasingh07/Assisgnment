// for navbar 
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}

// for why section
function toggleText(element) {
    const moreText = element.previousElementSibling;
    if (moreText.style.display === "inline") {
      moreText.style.display = "none";
      element.textContent = "Read More";
    } else {
      moreText.style.display = "inline";
      element.textContent = "Read Less";
    }
  }

//   for faq section
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const currentlyActive = document.querySelector('.accordion-header.active');
      
      if (currentlyActive && currentlyActive !== header) {
        currentlyActive.classList.remove('active');
        currentlyActive.nextElementSibling.style.display = 'none';
      }
  
      header.classList.toggle('active');
  
      const body = header.nextElementSibling;
      body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  function loadMore() {
    alert("You can load more FAQs dynamically via JavaScript or AJAX.");
  }
  
// manageing section 
document.getElementById("readMoreBtn").addEventListener("click", function () {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readMoreBtn");
  
    if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      btn.textContent = "Read Less.";
    } else {
      moreText.classList.add("hidden");
      btn.textContent = "Read More.";
    }
  });
  
  




















// // FAQ Toggle Functionality
// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach((item, index) => {
//     const question = item.querySelector('.faq-question');
//     const answer = item.querySelector('.faq-answer');

//     question.addEventListener('click', () => {
//         if (answer.style.display === 'block') {
//             answer.style.display = 'none';
//         } else {
//             answer.style.display = 'block';
//         }
//     });
// });

// // Load More FAQs Functionality
// const loadMoreBtn = document.querySelector('.load-more');
// const faqList = document.querySelector('.faq-list');
// const allFaqs = document.querySelectorAll('.faq-item');

// let visibleCount = 5;

// loadMoreBtn.addEventListener('click', () => {
//     if (visibleCount < allFaqs.length) {
//         visibleCount += 2;
//         for (let i = 0; i < visibleCount; i++) {
//             allFaqs[i].style.display = 'block';
//         }
//     } else {
//         loadMoreBtn.textContent = 'Load Less';
//         visibleCount = 5;
//         for (let i = visibleCount; i < allFaqs.length; i++) {
//             allFaqs[i].style.display = 'none';
//         }
//     }
// });

// // Demo Form Validation
// const demoForm = document.querySelector('.demo-form');
// const demoBtn = document.querySelector('.demo-btn');

// demoBtn.addEventListener('click', () => {
//     const inputs = demoForm.querySelectorAll('input');
//     let isValid = true;

//     inputs.forEach(input => {
//         if (input.value.trim() === '') {
//             isValid = false;
//             input.style.borderColor = 'red';
//         } else {
//             input.style.borderColor = 'white';
//         }
//     });

//     if (isValid) {
//         alert('Demo scheduled successfully!');
//     } else {
//         alert('Please fill all the fields.');
//     }
// });

// // Footer Demo Form
// const footerDemoForm = document.querySelector('.footer-demo');
// const bookAppointmentBtn = document.querySelector('.book-appointment');

// bookAppointmentBtn.addEventListener('click', () => {
//     const phoneNumber = footerDemoForm.querySelector('input').value;
//     if (phoneNumber.trim() !== '') {
//         alert('Appointment booked successfully!');
//     } else {
//         alert('Please enter your phone number.');
//     }
// });