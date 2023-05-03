import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

function ContactMe() {
  return (
    <section id="ContactMe">
        <div className="CMTitleContainer">
          <div className="CMTitleLeft"></div>
          <div className="CMTitleText">CONTACT ME.</div>
          <div className="CMTitleRight"></div>
        </div>
        <div className="CMFormContainer">
          <div className="CMFormTextfield">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Message:
              <input type="text" name="message" />
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
            <div className="CMFormButton">SUBMIT<BsArrowUpRight color="black"/></div>
          </div>
        </div>
        <div className="CMFooterContainer">
          <div className="CMFooterLinks">
          <a>Linkedin.</a>
          <a>Github.</a>
          <a>Resume.</a>
          </div>
        </div>
      </section>

  )

}

export default ContactMe;