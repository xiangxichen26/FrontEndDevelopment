import React from "react";

import SkipLink from "../components/SkipLink";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <SkipLink />
      <h2 className="title">Privacy Policy</h2>
      <p> Effective Date: April 17, 2024 </p>
      <p>
        Welcome to Circle, your hub for discovering and participating in Bay
        Area events. This Privacy Policy outlines how we collect, use, and
        protect the personal information of our users.
      </p>
      <h3 id="main">Information Collection</h3>
      <p>
        When you register with Circle, we collect the following personal
        information:
      </p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Occupation</li>
      </ul>
      <p>
        This information is used to create and manage your account, provide
        services tailored to your interests, and communicate with you about
        events and updates.
      </p>
      <h3>Use of Information</h3>
      <p>We use your personal information to:</p>
      <ul>
        <li>Enable you to create and manage your user profile.</li>
        <li>
          Allow you to subscribe to interest groups and register for events.
        </li>
        <li>
          Improve our services and offerings based on user feedback and
          interactions.
        </li>
        <li>Communicate important notices and updates about our services.</li>
      </ul>
      <h3>Data Protection</h3>
      <p>
        Circle takes the protection of your personal information seriously. We
        implement a variety of security measures to maintain the safety of your
        personal information when you enter, submit, or access your personal
        information.
      </p>
      <h3>User Rights</h3>
      <p>As a Circle user, you have the right to:</p>
      <ul>
        <li>Access and update your personal information.</li>
        <li>
          Customize your subscription settings for different interest groups.
        </li>
        <li>Manage your event registrations.</li>
      </ul>
      <h3>Data Sharing</h3>
      <p>
        Circle does not sell, trade, or otherwise transfer your personal
        information to outside parties. This does not include trusted third
        parties who assist us in operating our website, conducting our business,
        or servicing you, so long as those parties agree to keep this
        information confidential.
      </p>
      <h3>Changes to Our Privacy Policy</h3>
      <p>
        Circle reserves the right to update this Privacy Policy at any time. We
        will notify you of any changes by posting the new Privacy Policy on this
        page. We encourage you to periodically review this Privacy Policy for
        any updates.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact Us at: chen.xiangxi@northeastern.edu
      </p>
    </div>
  );
}

export default PrivacyPolicy;
