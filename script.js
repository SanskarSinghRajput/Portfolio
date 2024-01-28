var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

function sendEmail() {
    window.location.href = "mailto:sanskarsingh9999@gmail.com";
}

document.getElementById("readMoreBtn1").addEventListener("click", function() {
    window.open('https://github.com/SanskarSinghRajput/E-Commerce-Web-Application', '_blank');
});

document.getElementById("readMoreBtn2").addEventListener("click", function() {
  window.open('https://github.com/SanskarSinghRajput/Nike-Store-E-commerce-website', '_blank');
});

document.getElementById("readMoreBtn3").addEventListener("click", function() {
  window.open('https://github.com/SanskarSinghRajput/Social-media-Frontend', '_blank');
});

document.getElementById("readMoreBtn4").addEventListener("click", function() {
  window.open('https://github.com/SanskarSinghRajput/RestrauntWesite', '_blank');
});

document.getElementById("readMoreBtn5").addEventListener("click", function() {
  window.open('https://github.com/SanskarSinghRajput/WEEKAWAY-TourPlanner-Website', '_blank');
});