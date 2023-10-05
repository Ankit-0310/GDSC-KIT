<script>
  // Function to smoothly scroll to a section when a navigation link is clicked
  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    });
  }

  // Add a click event listener to each navigation link
  document.querySelectorAll('.nav_link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute('href'); // Get the href attribute
      smoothScroll(targetId); // Scroll to the target section smoothly
    });
  });
</script>
console.log("Script executed");
