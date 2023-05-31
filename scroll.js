const sections = document.querySelectorAll("section");

// Function to handle scroll behavior
function handleScroll(event) {
  event.preventDefault();

  // Determine the direction of the scroll
  const delta = event.wheelDelta || -event.deltaY || -event.detail;
  const direction = delta > 0 ? -1 : 1;

  // Find the current section
  let currentSectionIndex = Array.from(sections).findIndex(
    (section) => section.getBoundingClientRect().top >= 0
  );

  // Calculate the index of the next section
  const nextSectionIndex = currentSectionIndex + direction;

  // Check if there is a next section
  if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
    // Scroll to the next section
    sections[nextSectionIndex].scrollIntoView({
      behavior: "smooth"
    });
  }
}

// Attach scroll event listener to the document
document.addEventListener("wheel", handleScroll, { passive: false });
document.addEventListener("mousewheel", handleScroll, { passive: false });
document.addEventListener("DOMMouseScroll", handleScroll, { passive: false });









// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});