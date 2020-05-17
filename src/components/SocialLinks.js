import React from "react";

export default class SocialLinks extends React.Component {
  render() {
    return (
      <div>
        <div className="Social">
          {/*Github */}
          <a
            href="https://github.com/SoumyaKB96"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          <a href="www.facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          <a
            href="https://www.instagram.com/soumyakanta.boity/?hl=en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}
