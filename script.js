const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

const cardWidth = document.querySelector('.project-card').offsetWidth + 20; // card width + gap

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});



/*Experience*/
// Animate timeline items on scroll
const timelineItems = document.querySelectorAll(".timeline-item");

function isInViewport(item) {
  const rect = item.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
}

function showTimelineItems() {
  timelineItems.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("load", showTimelineItems);
window.addEventListener("scroll", showTimelineItems);
window.addEventListener("resize", showTimelineItems);
