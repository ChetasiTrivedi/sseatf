// Smooth Scroll to Explore Section
document.querySelector('.btn-explore').addEventListener('click', () => {
    const exploreSection = document.getElementById('explore');
    exploreSection.scrollIntoView({ behavior: 'smooth' });
  });
  