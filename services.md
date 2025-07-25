---
layout: default
title: "services"
description: " Services provided by EZ Operation Inc. "
---

<!DOCTYPE html>
<html lang="en">
<div class="container text-start py-5 ">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Our Services</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"/>
  <style>
    .service-card {
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: scale(1.02);
    }

    .service-img {
      height: 200px;
      width: 100%;
      object-fit: cover;
      border-bottom: 1px solid #eee;
    }

    .service-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 1rem;
    }

    .service-card:hover .service-overlay {
      opacity: 1;
    }

    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #0d6efd;
    }

    .service-title {
      font-weight: 600;
      font-size: 1.2rem;
      margin-top: 0.75rem;
    }
  </style>
</head>
<body>
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5">Our Services</h2>
      <div class="row g-4">

        <!-- Service 1 -->
        <div class="col-md-4">
          <div class="card service-card shadow-sm">
            <img src="https://via.placeholder.com/400x200" class="service-img" alt="Digital Footprint"/>
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
            <img src="https://via.placeholder.com/400x200" class="service-img" alt="Infrastructure Consulting"/>
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
            <img src="https://via.placeholder.com/400x200" class="service-img" alt="Database Solutions"/>
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
            <img src="https://via.placeholder.com/400x200" class="service-img" alt="Cloud Migration"/>
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
            <img src="https://via.placeholder.com/400x200" class="service-img" alt="DevOps Automation"/>
            <div class="card-body text-center">
              <i class="fas fa-cogs service-icon"></i>
              <div class="service-title">DevOps Automation</div>
            </div>
            <div class="service-overlay">
              Accelerate software delivery through CI/CD pipelines, automation, and monitoring solutions.
            </div>
          </div>
        </div>

        <!-- Service 6 -->
        <div class="col-md-4">
          <div class="card service-card shadow-sm">
            <img src="https://via.placeholder.com/400x200" class="service-img" alt="IT Strategy & Advisory"/>
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

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>


</div>