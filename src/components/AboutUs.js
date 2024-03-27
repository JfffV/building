import React from "react";
import "./About_us.css";

export default function AboutUs() {
  return (
    <div>
    <div className="top_section_about">
      
    </div>
    <div className="content">
      <div className="about">
        <div className="about_title"> About us </div>
        <div className="about_container">
          <div className="about_icon">
            <img className="about_us_icon" src="../img/homepage.jpg"></img>
          </div>
          <div className="about_text">
            Our construction company isn't just about building structures; it's
            about creating lasting impressions and shaping communities. We're
            more than just a team; we're a family united by our passion for
            craftsmanship and dedication to excellence. With every project, we
            embark on a journey to transform spaces, enrich lives, and build
            legacies. From residential developments to commercial ventures, we
            bring dreams to life, one brick at a time. Our commitment to
            quality, innovation, and client satisfaction drives us forward,
            ensuring that each endeavor is met with success. Together, let's
            build not just structures, but futures filled with promise and
            possibility.
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about_title">Why us?</div>
        <div className="about_whuUs_container">
          <div className="about_whuUs">
            <div className="about_achivments">
              <div className="about_achieve">
                <span className="achievment"> Years in the market:</span>
                <span className="achievment_green">5</span>
              </div>
              <div className="about_achieve">
                <span className="achievment">Completed projects:</span>
                <span className="achievment_green">120</span>
              </div>

              <div className="about_achieve">
                <span className="achievment">Satisfied clients:</span>
                <span className="achievment_green">1200</span>
              </div>
            </div>
          </div>
          <div className="about_whyUs_infographic_container">
            <div className="bars">
              <div className="about_crossbar_container">
                <svg class="about_crossbar" width="144" height="144">
                  <g
                    class="g-circles"
                    fill="none"
                    stroke-width="15"
                    stroke-dasharray="314"
                  >
                    <circle
                      id="crossbarCircle1"
                      r="50"
                      cx="72"
                      cy="72"
                      stroke="black"
                      stroke-dashoffset="100.4800000000008"
                    ></circle>
                    <text
                      id="crossbarTextContainer1"
                      x="72"
                      y="72"
                      text-anchor="middle"
                      fill="#38976d"
                      font-size="20px"
                      dy=".3em"
                    >
                      68%
                    </text>
                  </g>
                </svg>
                <p> They continue to use our services</p>
              </div>
              <div className="about_crossbar_container">
                <svg class="about_crossbar" width="144" height="144">
                  <g
                    class="g-circles"
                    fill="none"
                    stroke-width="15"
                    stroke-dasharray="314"
                  >
                    <circle
                      id="crossbarCircle2"
                      r="50"
                      cx="72"
                      cy="72"
                      stroke="black"
                      stroke-dashoffset="18.840000000000785"
                    ></circle>
                    <text
                      id="crossbarTextContainer2"
                      x="72"
                      y="72"
                      text-anchor="middle"
                      fill="#38976d"
                      font-size="20px"
                      dy=".3em"
                    >
                      94%
                    </text>
                  </g>
                </svg>
                <p> They recommend us to their friends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
