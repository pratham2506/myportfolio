import React from "react";
import "./About2.css";
import timelinepic from "../../assets/timelinepic.png";
import timelinepic2 from "../../assets/timelinepic2.png";
import { CiCalendar } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";
import { MdCurrencyRupee } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
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
                Secondary School Certificate{" "}
                  <span className="dateyear">2011-2020</span>
                </h4>
                <h5>Dominic Savio Vidyalaya</h5>
                <p>
                Thrived academically and socially at Dominic Savio Vidyalaya. Demonstrated leadership in student activities, achieved academic excellence, and developed strong interpersonal skills through collaborative projects.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Diploma in Information Technology{" "}
                  <span className="dateyear">2020-2023</span>
                </h4>
                <h5>Government Polytechnic Mumbai</h5>
                <p>
                  Completed Diploma in IT at Government Polytechnic Mumbai.
                  Acquired hands-on skills in programming, networking, and
                  systems analysis. Excelled in team projects, problem-solving,
                  and adapting to emerging technologies.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic2} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  B.E. Artificial Intelligence and Data Science{" "}
                  <span className="dateyear">2023-2026</span>
                </h4>
                <h5>Vivekanand Education Society's Institute of Technology</h5>
                <p>
                  Currently pursuing BE in AI and DS at VESIT. Applying
                  theoretical knowledge to real-world problems, honing
                  programming skills, and collaborating on impactful projects.
                  Demonstrating adaptability and critical thinking in diverse
                  contexts.
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
                <p>0-1 years</p>
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
                <IoLanguageOutline className="particonnn" />
              </div>
              <div className="partdata">
                <h4>Language</h4>
                <p>English, Hindi, Marathi</p>
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <GiGraduateCap className="particonnn" />
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
                  Web Developer{" "}
                  <span className="dateyear">Jan23-June23</span>
                </h4>
                <h5>The Fast Way</h5>
                <p>
                My 6 month internship at The Fast Way provided me
with valuable experience in web development, honed
my coding skills, and allowed me to contribute to the
success of multiple projects.
                </p>
              </div>
            </div>

            <div className="timelinecard">
              <div className="cardimg">
                <img src={timelinepic2} alt="" />
              </div>

              <div className="carddata">
                <h4>
                  Web Developer{" "}
                  <span className="dateyear">Dec23-Dec23</span>
                </h4>
                <h5>The Fast Way</h5>
                <p>
                I had the opportunity to work on several web
development projects, gaining valuable hands-on
experience in front-end, back-end, database
management, testing & quality assurance, project
presentation & collaboration, & continuous learning.
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
                <h4>
                  <a
                    href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </h4>
                {/* <p>0-2 years</p> */}
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <BsInstagram className="particonnn2" />
              </div>
              <div className="partdata">
                <h4>
                  <a
                    href="https://www.instagram.com/pratham_2506_/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </h4>
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
                <FaGithub className="particonnn2" />
              </div>
              <div className="partdata">
                <h4>
                  <a href="https://github.com/pratham2506" target="_blank">
                    Github
                  </a>
                </h4>
                {/* <p>English, Hindi, Marathi</p> */}
              </div>
            </div>

            <div className="onepart">
              <div className="particon">
                <FiMail className="particonnn2" />
              </div>
              <div className="partdata">
                <h4>
                  <a href="mailto:prathammatkar2506@gmail.com" target="_blank">
                    Mail
                  </a>
                </h4>
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
