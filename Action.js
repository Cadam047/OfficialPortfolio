function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  function openResume() {
    let resumeWindow = window.open("Pics/SEOResume.pdf", "ResumeWindow", "width=800,height=600,scrollbars=yes,resizable=yes");
  resumeWindow.focus();
        }


