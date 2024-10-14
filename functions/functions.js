document.querySelectorAll(".sub-category").forEach((category) => {
  category.addEventListener("click", function () {
    const selectedCategory = this.getAttribute("data-category");
    const books = document.querySelectorAll(".book");

    // Remove active class from all categories
    document.querySelectorAll(".sub-category").forEach((cat) => {
      cat.classList.remove("active");
    });

    // Add active class to clicked category
    this.classList.add("active");

    // Show only the books that match the selected category
    books.forEach((book) => {
      if (book.getAttribute("data-category") === selectedCategory) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });
});
