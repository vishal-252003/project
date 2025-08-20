import './Footer.css';
import { useState, useEffect } from 'react';

function Footer() {

  const [FooterContent, setFooterContent] = useState();

  useEffect(() => {

    if (localStorage.getItem("token") != undefined) {
      setFooterContent(<></>)
    }
    else {
      setFooterContent(<> {/* info section */}

        <section class="info_section layout_padding2">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4 info_col">
                <div class="info_contact">
                  <h4>
                    Address
                  </h4>
                  <div class="contact_link_box">
                    <a href="">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Location
                      </span>
                    </a>
                    <a href="">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span>
                        Call xxxxxxx
                      </span>
                    </a>
                    <a href="">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span>
                        demo@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
                <div class="info_social">
                  <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 info_col">
                <div class="info_detail">
                  <h4>
                    Info
                  </h4>
                  <p>
                    necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 mx-auto info_col">
                <div class="info_link_box">
                  <h4>
                    Links
                  </h4>
                  <div class="info_links">
                    <a class="active" href="index.html">
                      <img src="./assests/images/nav-bullet.png" alt="" />
                      Home
                    </a>
                    <a class="" href="about.html">
                      <img src="./assests/images/nav-bullet.png" alt="" />
                      About
                    </a>
                    <a class="" href="service.html">
                      <img src="./assests/images/nav-bullet.png" alt="" />
                      Services
                    </a>
                    <a class="" href="contact.html">
                      <img src="./assests/images/nav-bullet.png" alt="" />
                      Contact Us
                    </a>
                    <a class="" href="r">
                      <img src="./assests/images/nav-bullet.png" alt="" />
                      Register
                    </a>
                    <a class="" href="">
                      <img src="./assests/images/nav-bullet.png" alt="" />
                      Login
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* end info section */}</>)
    }


  });

  return (
    <>
      {FooterContent}

      {/* footer section */}
      <section class="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By &nbsp;&nbsp;
            <a style={{ "color": "yellowgreen" }}>Vishal</a>
          </p>
        </div>
      </section>
      {/* footer section */}
    </>
  );
}

export default Footer;
