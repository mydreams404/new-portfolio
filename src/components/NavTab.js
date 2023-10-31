const NavTab = () => {
  return (
    <div>
      <div class="tab-container">
        <a class="link-underline" href="/about">
          <button class="tablink" id="about">
            about me.
          </button>
        </a>
        <a class="link-underline" href="works">
          <button class="tablink" id="works">
            things i've done.
          </button>
        </a>
        <a class="link-underline" href="gallery">
          <button class="tablink" id="gallery">
            gallery.
          </button>
        </a>
        <a class="link-underline" href="contact">
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
