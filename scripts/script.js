// Blog data
const blogs = [
    {
      title: "Understanding Data Visualization",
      desc: "Learn how to transform raw data into visual insights that drive decisions.",
      img: "assets/images/blog1.jpeg",
      link: "blogs/blog1.html"
    },
    {
      title: "Data Analytics Roadmap",
      desc: "If you are aspiring to become a data analyst, this is the roadmap for you.",
      img: "assets/images/blog2.jpg",
      link: "blogs/blog2.html"
    },
    {
      title: "Essential Tips Every Aspiring Data Analyst Needs to Hear",
      desc: "Explore the most essential tips that every aspiring data analyst needs to know.",
      img: "assets/images/blog3.jpg",
      link: "blogs/blog3.html"
    },
    {
      title: "The Future of Data Science",
      desc: "A look into the future trends and technologies shaping data science, with AI and machine learning at the forefront.",
      img: "assets/images/blog4.jpg",
      link: "blogs/blog4.html"
    },
    {
      title: "How to Clean and Preprocess Data",
      desc: "Learn techniques to clean and structure messy datasets for analysis.",
      img: "assets/images/blog5.jpg",
      link: "blogs/blog5.html"
    },
    {
      title: "Advanced SQL Techniques?",
      desc: "Master complex SQL queries and database management skills to enhance your data analysis capabilities.",
      img: "assets/images/blog6.jpg",
      link: "blogs/blog6.html"
    },
    {
      title: "Machine Learning Basics",
      desc: "A beginner’s guide to ML concepts and how they power analytics.",
      img: "assets/images/blog4.jpg",
      link: "#"
    },
    {
      title: "Why R is still most popular for Data Science?",
      desc: "R is a powerful language for statistical analysis and data visualization, making it a top choice for data scientists.",
      img: "assets/images/blog5.jpg",
      link: "#"
    },
    {
      title: "Power BI vs Tableau: Which is Better?",
      desc: "A comparison of two leading data visualization tools and their use cases.",
      img: "assets/images/blog6.jpg",
      link: "#"
    }
  ];
  
  // Render blogs dynamically once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-container");
  
    blogs.forEach(blog => {
      const blogCard = document.createElement("div");
      blogCard.classList.add("blog-card");
  
      blogCard.innerHTML = `
        <img src="${blog.img}" alt="${blog.title}" />
        <div class="blog-content">
          <h3>${blog.title}</h3>
          <p>${blog.desc}</p>
          <a href="${blog.link}">Read More →</a>
        </div>
      `;
  
      blogContainer.appendChild(blogCard);
    });
  });
  