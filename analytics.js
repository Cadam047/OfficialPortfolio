document.addEventListener("DOMContentLoaded", () => {

  // Track Resume
  const resumeLinks = document.querySelectorAll('[data-analytics="resume"]');

  resumeLinks.forEach((link) => {
    link.addEventListener("click", () => {
      gtag("event", "resume_click");
    });
  });


  // Track GitHub
  const githubLinks = document.querySelectorAll('[data-analytics="github"]');

  githubLinks.forEach((link) => {
    link.addEventListener("click", () => {
      gtag("event", "github_click");
    });
  });


  // Track LinkedIn
  const linkedinLinks = document.querySelectorAll('[data-analytics="linkedin"]');

  linkedinLinks.forEach((link) => {
    link.addEventListener("click", () => {
      gtag("event", "linkedin_click");
    });
  });


  // Track Projects
  const projectLinks = document.querySelectorAll(
  '[data-analytics="project"]'
);

projectLinks.forEach((element) => {
  element.addEventListener("click", () => {
    const projectName = element.dataset.projectName;
    const projectAction = element.dataset.projectAction;

    gtag("event", "project_click", {
      project_name: projectName,
      project_action: projectAction
    });
  });
});



const projectsSection = document.getElementById("projects");

if (projectsSection) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gtag("event", "section_view", {
            section_name: "projects"
          });

          // Only record it once per page visit
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  observer.observe(projectsSection);
}



});