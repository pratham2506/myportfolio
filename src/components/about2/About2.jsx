import React from "react";
import "./About2.css";
import timelinepic from "../../assets/timelinepic.png";
import timelinepic2 from "../../assets/timelinepic2.png";
import { CiCalendar } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";
import { MdCurrencyRupee } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";

const About2 = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="maindivabout">
          <div className="timeline">
            <h3>Education</h3>
            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Bachlors in Fine Arts{" "}
                  <span className="dateyear">2012-2014</span>
                </h4>
                <h5>Modern College</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur facilis impedit, ipsam eligendi similique
                  molestiae quam fugit quod itaque exercitationem.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic2} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Bachlors in Fine Arts{" "}
                  <span className="dateyear">2012-2014</span>
                </h4>
                <h5>Modern College</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur facilis impedit, ipsam eligendi similique
                  molestiae quam fugit quod itaque exercitationem.
                </p>
              </div>
            </div>

            
          </div>
          <div className="boxybox">
            <div className="onepart">
              <div className="particon">
                <CiCalendar className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Experience</h4>
                <p>0-2 years</p>
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
              <CgSandClock className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Age</h4>
                <p>19 years</p>
              </div>
            </div>

            {/* <div className="onepart">
              <div className="particon">
                <MdCurrencyRupee className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Experience</h4>
                <p>0-2 years</p>
              </div>
            </div> */}

            <div className="onepart">
              <div className="particon">
                <IoLanguageOutline  className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Language</h4>
                <p>English, Hindi, Marathi</p>
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <GiGraduateCap  className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Education Level</h4>
                <p>Undergraduate degree</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="maindivabout">
          <div className="timeline">
            <h3>Work & Experience</h3>
            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Bachlors in Fine Arts{" "}
                  <span className="dateyear">2012-2014</span>
                </h4>
                <h5>Modern College</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur facilis impedit, ipsam eligendi similique
                  molestiae quam fugit quod itaque exercitationem.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic2} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Bachlors in Fine Arts{" "}
                  <span className="dateyear">2012-2014</span>
                </h4>
                <h5>Modern College</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur facilis impedit, ipsam eligendi similique
                  molestiae quam fugit quod itaque exercitationem.
                </p>
              </div>
            </div>

            
          </div>
          <div className="boxybox">
            <div className="onepart">
              <div className="particon">
                <BsLinkedin className="particonnn2" />
              </div>
              <div className="partdata">
                <h4><a href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/" target="_blank">LinkedIn</a></h4>
                {/* <p>0-2 years</p> */}
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
              <BsInstagram className="particonnn2" />
              </div>
              <div className="partdata">
              <h4><a href="https://www.instagram.com/pratham_2506_/" target="_blank">Instagram</a></h4>
                {/* <p>19 years</p> */}
              </div>
            </div>

            {/* <div className="onepart">
              <div className="particon">
                <MdCurrencyRupee className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Experience</h4>
                <p>0-2 years</p>
              </div>
            </div> */}

            <div className="onepart">
              <div className="particon">
                <FaGithub  className="particonnn2" />
              </div>
              <div className="partdata">
              <h4><a href="https://github.com/pratham2506" target="_blank">Github</a></h4>
                {/* <p>English, Hindi, Marathi</p> */}
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <FiMail  className="particonnn2" />
              </div>
              <div className="partdata">
              <h4><a href="mailto:prathammatkar2506@gmail.com" target="_blank">Mail</a></h4>
                {/* <p>Undergraduate degree</p> */}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
