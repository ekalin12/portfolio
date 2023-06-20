import React, {useState, useRef, useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

function ContactMe(props) {

  useEffect(() => {
    // console.log('ContactMe Props: ', props)
  })

  return (
    <section id="ContactMe">

      <div className="CMOverlay">
        <div className="CMTitle">CONTACT ME.</div>
        <div className="CMFormContainer">
            <div className="CMFormTextfield">
            <form>
              <div className="CMNameEmail">
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
                <label>
                  Email:
                  <input type="text" name="email" />
                </label>
              </div>
              <div className="CMMessage">
                <label>
                  Message:
                  <textarea name="message" rows={5} wrap="hard"/>
                </label>
                {/* <input type="submit" value="Submit" /> */}
              </div>
            </form>
              <div className="CMFormButton">SUBMIT<BsArrowUpRight color="black"/></div>
            </div>
          </div>
      </div>

      {/* <svg id="CMWave" version="1" baseProfile="full" viewBox="0 0 1920 969">
        <path transform="scale(1, 1)" d="M 0,969 V 0,669 C 135.21428571428572,765.6071428571429 270.42857142857144,862.2142857142857 455,894 C 639.5714285714286,925.7857142857143 873.5,892.75 1018,831 C 1162.5,769.25 1217.5714285714287,678.7857142857142 1353,647 C 1488.4285714285713,615.2142857142858 1704.2142857142858,642.1071428571429 1920,669 C 1920,669 1920,969 1920,969 Z" stroke="none" stroke-width="0" fill="#c360fc90" class="transition-all duration-300 ease-in-out delay-150"></path>
        <path transform="scale(1, 1)" d="M 0,969 V 0,1003 C 173.39285714285717,849.5 346.78571428571433,696 529,757 C 711.2142857142857,818 902.25,1093.5 1040,1138 C 1177.75,1182.5 1262.2142857142856,996 1400,935 C 1537.7857142857144,874 1728.8928571428573,938.5 1920,1003 C 1920,1003 1920,969 1920,969 Z" stroke="none" stroke-width="0" fill="#c360fcff" class="transition-all duration-300 ease-in-out delay-150"></path>
        </svg> */}

        <svg id="CMWave" version="1" baseProfile="full" width="100%" height="100%" viewBox="0 0 1920 969">
          <path transform="scale(1, 1)" d="M 0,969 V 0,669 C 72.02307692307696,688.0820512820512 144.0461538461539,
          707.1641025641026 264,680 C 383.9538461538461,652.8358974358974 551.8384615384614,579.425641025641 685,
          529 C 818.1615384615386,478.57435897435903 916.6000000000001,451.13333333333344 1002,498 C 1087.3999999999999,
          544.8666666666666 1159.7615384615385,666.0410256410256 1252,746 C 1344.2384615384615,
          825.9589743589744 1456.3538461538462,864.7025641025641 1571,845 C 1685.6461538461538,825.2974358974359 1802.8230769230768,
          747.148717948718 1920,669 C 1920,669 1920,969 1920,969 Z"
           stroke="none" stroke-width="0" fill={props.SVGColorOne} class="transition-all duration-300 ease-in-out delay-150"></path>

          <path transform="scale(1, 1)" d="M 0,969 V 0,1003 C 78.81282051282051,886.2358974358974 157.62564102564102,
          769.4717948717949 277,754 C 396.374358974359,738.5282051282051 556.3102564102566,824.3487179487179 686,
          913 C 815.6897435897434,1001.6512820512821 915.1333333333334,1093.1333333333332 1009,1152 C 1102.8666666666666,
          1210.8666666666668 1191.1564102564103,1237.1179487179488 1275,1209 C 1358.8435897435897,1180.8820512820512 1438.2410256410255,
          1098.3948717948717 1545,1055 C 1651.7589743589745,1011.6051282051283 1785.8794871794871,1007.3025641025641 1920,1003 C 1920,
          1003 1920,969 1920,969 Z"
           stroke="none" stroke-width="0" fill={props.SVGColorTwo} class="transition-all duration-300 ease-in-out delay-150"></path>
          </svg>

      </section>

  )

}

export default ContactMe;


        // <div className="CMTitleContainer">
        //   <div className="CMTitleLeft"></div>
        //   <div className="CMTitleText">CONTACT ME.</div>
        //   <div className="CMTitleRight"></div>
        // </div>
        // <div className="CMFormContainer">
        //   <div className="CMFormTextfield">
        //   <form>
        //     <label>
        //       Name:
        //       <input type="text" name="name" />
        //     </label>
        //     <label>
        //       Email:
        //       <input type="text" name="email" />
        //     </label>
        //     <label>
        //       Message:
        //       <input type="text" name="message" />
        //     </label>
        //     {/* <input type="submit" value="Submit" /> */}
        //   </form>
        //     <div className="CMFormButton">SUBMIT<BsArrowUpRight color="black"/></div>
        //   </div>
        // </div>
        // <div className="CMFooterContainer">
        //   <div className="CMFooterLinks">
        //   <a>Linkedin.</a>
        //   <a>Github.</a>
        //   <a>Resume.</a>
        //   </div>
        // </div>

