---
layout: default
title: "index"
description: "Learn about EZ Operation's mission, expertise, and commitment to digital transformation."
---

<div id="header"></div>
  <!-- Dynamic Content Area -->
  <section class="py-5 text-center bg-light" id="content-area">
    <div class="container">
      <h1 class="display-5 fw-bold">Transforming Businesses with Innovative IT Solutions</h1>
      <p class="lead">Expert IT consulting for infrastructure, databases, and digital transformation.</p>
      <p class="mb-4">Book an appointment at <strong>+1 (306) 914-7817</strong></p>
      <a href="#" class="btn btn-primary btn-lg" onclick="loadPage('contact.html'); return false;">Get a Free Consultation</a>

      
  <div class="row g-4 mt-5 justify-content-center text-center " id="services">
  <h2> Services </h2>
  <!-- Service 1 -->
  <div class="col-md-4">
    <div class="card service-card shadow-sm">
      <img src="images/footprint.png" class="service-img" alt="Digital Footprint"/>
      <div class="card-body text-center">
        <i class="fas fa-globe service-icon"></i>
        <div class="service-title">Digital Footprint</div>
      </div>
      <div class="service-overlay">
        Design, develop and optimize websites with SEO consulting to improve visibility and engagement.
      </div>
    </div>
  </div>

  <!-- Service 2 -->
  <div class="col-md-4">
    <div class="card service-card shadow-sm">
      <img src="images/2.jpg" class="service-img" alt="Infrastructure Consulting"/>
      <div class="card-body text-center">
        <i class="fas fa-network-wired service-icon"></i>
        <div class="service-title">Infrastructure Consulting</div>
      </div>
      <div class="service-overlay">
        Design, implement, and optimize IT infrastructure for scalability, reliability, and security.
      </div>
    </div>
  </div>

  <!-- Service 3 -->
  <div class="col-md-4">
    <div class="card service-card shadow-sm">
      <img src="images/database.jpg" class="service-img" alt="Database Solutions"/>
      <div class="card-body text-center">
        <i class="fas fa-database service-icon"></i>
        <div class="service-title">Database Solutions</div>
      </div>
      <div class="service-overlay">
        Streamline your databases for performance tuning, high availability, and compliance.
      </div>
    </div>
  </div>

  <!-- Service 4 -->
  <div class="col-md-4">
    <div class="card service-card shadow-sm">
      <img src="images/3.jpg" class="service-img" alt="Cloud Migration"/>
      <div class="card-body text-center">
        <i class="fas fa-cloud-upload-alt service-icon"></i>
        <div class="service-title">Cloud Migration</div>
      </div>
      <div class="service-overlay">
        Seamless migration of on-premise systems to secure and scalable cloud infrastructure.
      </div>
    </div>
  </div>

  <!-- Service 5 -->
  <div class="col-md-4">
    <div class="card service-card shadow-sm">
      <img src="images/1.jpg" class="service-img" alt="SEO Consulting"/>
      <div class="card-body text-center">
        <i class="fas fa-cogs service-icon"></i>
        <div class="service-title">SEO Consulting</div>
      </div>
      <div class="service-overlay">
        Accelerate your online presence with expert SEO strategies to boost search rankings and traffic.
      </div>
    </div>
  </div>

  <!-- Service 6 -->
  <div class="col-md-4">
    <div class="card service-card shadow-sm">
      <img src="images/strategy.png" class="service-img" alt="IT Strategy & Advisory"/>
      <div class="card-body text-center">
        <i class="fas fa-lightbulb service-icon"></i>
        <div class="service-title">IT Strategy & Advisory</div>
      </div>
      <div class="service-overlay">
        Align technology initiatives with your business goals through expert IT consulting.
      </div>
    </div>
  </div>

</div>
    </div>
  </section>

  <div id="footer"></div>

  <!-- Scripts -->
  <script>
    function loadPartial(id, url) {
      fetch(url)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
    }

    function loadPage(url) {
      if (url === 'home') {
        document.getElementById("content-area").innerHTML = `
          <div class='container'>
            <h1 class='display-5 fw-bold'>Transforming Businesses with Innovative IT Solutions</h1>
            <p class='lead'>Expert IT consulting for infrastructure, databases, and digital transformation.</p>
            <p class='mb-4'>Book an appointment at <strong>+1 (306) 914-7817</strong></p>
            <a href='#' class='btn btn-primary btn-lg' onclick="loadPage('contact.html'); return false;">Get a Free Consultation</a>
          </div>`;
        return;
      }
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error("Page not found");
          return res.text();
        })
        .then(data => {
          document.getElementById("content-area").innerHTML = data;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(err => {
          document.getElementById("content-area").innerHTML = "<div class='container py-5'><h2>Page not found</h2><p>Sorry, we couldn’t load the page.</p></div>";
        });
    }

    // Load header and footer
    loadPartial("header", "header.html");
    loadPartial("footer", "footer.html");
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
