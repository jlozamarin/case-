document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
      alert(item.querySelector('.timeline-content').textContent.trim());
  });
});
