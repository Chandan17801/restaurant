import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_footer">
              <h4>Services</h4>
              <ul>
                <li>
                  <p>Help and FAQ</p>
                </li>
                <li>
                  <p>Shipments</p>
                </li>
                <li>
                  <p>Return Policies </p>
                </li>
                <li>
                  <p>Privacy Policies</p>
                </li>
                <li>
                  <p>Terms and Condition</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Page Link</h4>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Contact Us</p>
                </li>
                <li>
                  <p>Feedback</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Contact</h4>
              <div className="signup_form">
                <p>
                  Sector 19,
                  <br /> Lobby Level Crown Plaza Twin District Centre,
                  <br /> Rohini, near IBM Hotel, <br />
                  New Delhi, India - 110085
                </p>
              </div>
            </div>
            <div className="social_profile">
              <ul>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1384/1384017.png"
                    alt=".."
                  />
                </li>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
                    alt=".."
                  />
                </li>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                    alt=".."
                  />
                </li>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2111/2111477.png"
                    alt=".."
                  />
                </li>
                <li>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                    alt=".."
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <p className="copyright">Copyright © 2023 - All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
