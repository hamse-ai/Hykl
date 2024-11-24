function toggleForm(formId) {
  $("#" + formId).slideToggle();
}

 document.addEventListener("DOMContentLoaded", function () {
   // Select the parent container of the section
   const section = document.querySelector(".section-container");

   // Observer callback function to add animation classes
   const handleIntersection = (entries, observer) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         // Add animation classes to all children
         const children = entry.target.querySelectorAll(
           ".animate-fade-in-down, .animate-slide-in-left, .animate-slide-in-right"
         );
         children.forEach((child) => {
           // Add animation class for fade-in or slide-in based on the type
           child.classList.add("animate__animated", "animate__fadeInUp");
           // You can customize based on the child class (e.g., slideInLeft, slideInRight)
           // For example:
           // if (child.classList.contains('animate-slide-in-left')) {
           //     child.classList.add('animate__slideInLeft');
           // }
         });

         // Stop observing after the animation has been triggered
         observer.unobserve(entry.target);
       }
     });
   };

   // Create an IntersectionObserver instance
   const observer = new IntersectionObserver(handleIntersection, {
     threshold: 0.5, // Trigger when 50% of the section is in view
   });

   // Start observing the section container
   observer.observe(section);
 });


  document.addEventListener("DOMContentLoaded", function () {
    // Select the parent container of the section
    const sectionContact = document.querySelector(".section-contact");

    // Observer callback function to add animation classes
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes to all children
          const children = entry.target.querySelectorAll(".opacity-0");
          children.forEach((child) => {
            child.classList.add("animate__animated", "animate__fadeInUp");
          });

          // Stop observing after the animation has been triggered
          observer.unobserve(entry.target);
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    // Start observing the section container
    observer.observe(sectionContact);
  });