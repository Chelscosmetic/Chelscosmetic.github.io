document.addEventListener("DOMContentLoaded", function() {

    // Get navbar toggle button and nav ul
    var navbarToggle = document.getElementById('navbar-toggle');
    var navUl = document.querySelector('nav ul');
  
    // Open and close nav
    navbarToggle.addEventListener('click', function() {
      if (navUl.style.display === 'none' || navUl.style.display === '') {
        navUl.style.display = 'block';
      } else {
        navUl.style.display = 'none';
      }
    });
  
    // Hamburger toggle
    navbarToggle.addEventListener('click', function() {
      navbarToggle.classList.toggle('active');
    });
  
    // If a link has a dropdown, add sub menu toggle
    var navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(e) {
        var navbarDropdown = this.nextElementSibling;
        if (navbarDropdown.style.display === 'none' || navbarDropdown.style.display === '') {
          navbarDropdown.style.display = 'block';
        } else {
          navbarDropdown.style.display = 'none';
        }
  
        // Close dropdown when select another dropdown
        document.querySelectorAll('.navbar-dropdown').forEach(function(element) {
          if (element !== navbarDropdown) {
            element.style.display = 'none';
          }
        });
        e.stopPropagation();
      });
    });
  
    // Click outside the dropdown will remove the dropdown class
    document.addEventListener('click', function() {
      document.querySelectorAll('.navbar-dropdown').forEach(function(element) {
        element.style.display = 'none';
      });
    });
  
  });
  