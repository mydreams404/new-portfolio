const NavTab = () => {
  return (
    <div>
      <div class="tab-container">
        <a href="#about-content">
          <button class="tablink" id="about">
            ABOUT
          </button>
        </a>
        <a href="#works-content">
          <button class="tablink" id="works">
            WORKS
          </button>
        </a>
        <a href="#gallery-content">
          <button class="tablink" id="gallery">
            GALLERY
          </button>
        </a>
        <a href="#contact-content">
          <button class="tablink" id="contact">
            CONTACT
          </button>
        </a>
      </div>
      <div id="line-container" />
    </div>
  );
};

export default NavTab;
