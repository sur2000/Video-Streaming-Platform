import React from "react";
import style from "./Footer.module.scss"; 
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn"; 
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call"; 
import CreateIcon from '@material-ui/icons/Create';

export const Footer = (props) => {
  let dark = props.theme;
  return (
    <React.Fragment>
      <footer
        className={
          dark
            ? `${style["footer"]} ${style["footer-dark"]}`
            : `${style["footer"]}`
        }
      > 
       <div className={style["footer-addr"]}>
       <h1 className={dark ? style["nav-title-dark"] : style["nav-title"]}>
       <LocationOnIcon style={{color: "#404dfa"}}/>
              Find us
            </h1>
          <address>
            <i className="fas fa-map-marker-alt"></i> Goa Institue of Management, Goa, 202010
            <br />
          </address> 
          <ul className={dark ? style["nav-ul-dark"] : style["nav-ul"]}>
              <p> <MailIcon style={{color: "#404dfa"}}/> 
                Email: missioned@gmail.com </p> 
              <p> <CallIcon style={{color: "#404dfa"}}/> 
              Contact: +919674037142 </p>
            </ul>
          </div> 
          <ul className={style["footer-nav"]}>
           <li>
            <h2 className={dark ? style["nav-title-dark"] : style["nav-title"]}>
              Social
            </h2>
            <ul className={dark ? style["nav-ul-dark"] : style["nav-ul"]}>
              <li>Give us a Follow on below Social Links.</li> 
            </ul>
            <div className={`col ${style["col"]}`}>
              <ul className={dark ? style["social-dark"] : style["social"]}>
              <li>
                  <a
                    href="https://missioned.in/blog/"
                    target="_blank" 
                    rel="noreferrer"
                    
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <CreateIcon style={{color: "#404dfa"}}/> 
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                     href="https://www.linkedin.com/company/missioned"
                       target="blank" 
                       rel="noreferrer"
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}> 
                      <LinkedInIcon style={{color: "#404dfa" }} />
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mission_ed/"
                    target="_blank" 
                    rel="noreferrer"
                    
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <InstagramIcon style={{color: "#404dfa" }} />
                      </div>
                    </div>
                  </a>
                </li> 
                <li>
                  <a
                    href="https://www.facebook.com/100428234941438/" target="blank"
                    target="_blank" 
                    rel="noreferrer"
                    
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <FacebookIcon style={{color: "#404dfa" }} />
                      </div>
                    </div>
                  </a>
                </li>
                
                
              </ul>
            </div>
          </li>
        </ul>
        <div
          className={
            dark
              ? `${style["footer-dash"]} ${style["footer-dash-dark"]}`
              : `${style["footer-dash"]}`
          }
        >
          <div
            className={
              dark
                ? `${style["footer-text"]} ${style["footer-text-dark"]}`
                : `${style["footer-text"]}`
            }
          >
          </div>
        </div>
       </footer>

       <div
        className={
          dark
            ? `${style["cprt-text"]} ${style["cprt-text-dark"]}`
            : `${style["cprt-text"]}`
        }
      >
        <p className={`${style["cprt"]} py-2`}>
        Copyright © 2021, All Right Reserved MissionEd
        </p>
      </div>
    </React.Fragment>
  );
};