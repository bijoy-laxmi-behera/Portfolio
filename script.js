document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.links');
  const contents = document.querySelectorAll('.contents');

  tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active-link'));
          contents.forEach(c => c.classList.remove('active-tab'));

          tab.classList.add('active-link');
          contents[index].classList.add('active-tab');
      });
  });

  const menuIcon = document.querySelector('nav .fa-bars');
  const closeIcon = document.querySelector('nav .fa-xmark');
  const sidebar = document.getElementById('Sidebar');

  menuIcon.addEventListener('click', () => {
      sidebar.style.right = '0';
  });

  closeIcon.addEventListener('click', () => {
      sidebar.style.right = '-200px';
  });
});
