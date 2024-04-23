import React from "react";

import SkipLink from "../components/SkipLink";

function ContactUs() {
  return (
    <div className="contact-us">
      <SkipLink />
      <h2>Contact Us</h2>
      <h3>We're Here to Help!</h3>
      <p>
        Got a question, feedback, or just want to say hello? At Circle, we love
        hearing from our users. Whether you need assistance with your account,
        want to know more about an event, or have suggestions on how we can
        improve, our team is ready to assist you.
      </p>
      <h3 id="main">How to Reach Us</h3>
      <h4>Customer Support</h4>
      <li>Email: chen.xiangxi@northeastern.edu</li>
      <li>Phone: 650-303-7890</li>
      <li>Hours: Monday to Friday, 9:00 AM - 5:00 PM (PST)</li>
      <h4>Media Inquiries</h4>
      <li>Email: chen.xiangxi@northeastern.edu</li>
      <h4>Business Partnerships</h4>
      <li>Email: chen.xiangxi@northeastern.edu</li>
    </div>
  );
}

export default ContactUs;
