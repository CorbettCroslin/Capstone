import React, { Component } from 'react';
import bannerPic from '../img/cinciparks.jpg';
import aboutPic from '../img/about.png';
import missionPic from '../img/teamBuilding.png';
import teamPic from '../img/team.jpg';



class About extends Component {
  render() {
    return (
      <div className="main-contain">
        <div className="banner-container">
          <div className="banner-about-sub">
            <img className="banner-bg w-100" src={bannerPic} alt="Logo" />
          </div>
        </div>

      {/* About */}

        <div id="about-main" className="container-fluid">
          <div  id='about-sub' className=" justify-content-evenly">
            <div className="col-sm">
            
              <h2 className="about-htwo-header">About<br />Us</h2> 
              <img className="about-main-pics" src={aboutPic} alt="..." />
              
             {/* comment */}
              <p className="about-main-buttn center">
                <a class="btn about-button btn-primary" data-bs-toggle="collapse" href="#about-about" role="button" aria-expanded="false" aria-controls="about-about">
                  Info
                </a>

              </p>
              <div class="collapse" id="about-about">
                <div class="card card-body">
                Cincinnati Destination is the official destination marketing organization for Cincinnati, Ohio. We increases the number of visitors, the number of nights they stay and the number of things they do. These marketing efforts also enhance the quality of life and sense of pride for residents. 

                </div>
              </div>
            </div>
            <div className="col-sm">
              <h2 className="about-htwo-header">Mission Statement</h2>
              
              <img className="about-main-pics" src={missionPic} alt="..." />
              
             
              <p className="about-main-buttn center">
                <a class="btn about-button btn-primary" data-bs-toggle="collapse" href="#about-mission" role="button" aria-expanded="false" aria-controls="about-mission">
                  Info
                </a>

              </p>
              <div class="collapse" id="about-mission">
                <div class="card card-body">
                Our mission is to bring regional, national, and international business and leisure visitors to Cincinnati for the economic benefit of the city, the community, and our membership — while being an advocate for the tourism industry and our partners.
                </div>
              </div>
            </div>
            <div className="col-sm">
              <h2 className="about-htwo-header">Meet the Team</h2>
              <img className="about-main-pics" src={teamPic} alt="..." />
              
             
              <p className="about-main-buttn center">
                <a class="btn btn-primary about-button" data-bs-toggle="collapse" href="#about-team" role="button" aria-expanded="false" aria-controls="about-team">
                  Info
                </a>

              </p>
              <div class="collapse" id="about-team">
                <div class="card card-body">
                We’ll make you feel right at home in Cincinnati.

                Our experienced team is here to support our partners and groups across the tourism industry. Whether you’re a visitor, meeting planner, or travel professional, we can help to connect you to the right resources.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    )
  }
}

export default (About)