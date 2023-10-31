const NavTab = () => {
  return (
    <div>
      <div class="tab-container">
        <a href="#about-content">
          <button class="tablink" id="about">
            about me.
          </button>
        </a>
        <a href="#works-content">
          <button class="tablink" id="works">
            things i've done.
          </button>
        </a>
        <a href="#gallery-content">
          <button class="tablink" id="gallery">
            gallery.
          </button>
        </a>
        <a href="#contact-content">
          <button class="tablink" id="contact">
            get in touch.
          </button>
        </a>
      </div>
      <div id="line-container" />
    </div>
  );
};

export default NavTab;
