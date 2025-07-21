document.addEventListener("DOMContentLoaded", () => {
  loadIncludes();
  loadPage("home");

  document.body.addEventListener("click", function (e) {
    if (e.target.matches("a[data-page]")) {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
      history.pushState({ page }, "", page);
    }
  });

  window.addEventListener("popstate", (e) => {
    const page = e.state?.page || "home";
    loadPage(page);
  });
});

function loadIncludes() {
  fetch("includes/header.html").then(res => res.text()).then(data => {
    document.getElementById("header").innerHTML = data;
  });
  fetch("includes/footer.html").then(res => res.text()).then(data => {
    document.getElementById("footer").innerHTML = data;
  });
}

function loadPage(page) {
  fetch(`${page}.html`)
    .then(res => res.ok ? res.text() : "<h2 class='text-danger'>Page not found</h2>")
    .then(data => {
      document.getElementById("content-area").innerHTML = data;
    });
}