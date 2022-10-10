import styles from "../Style/whyccs.module.css";
import Fade from "react-reveal/Fade";

import img1 from "../Assets/whyccs1.png";
import img2 from "../Assets/whyccs2.png";
import img3 from "../Assets/whyccs3.png";
import img4 from "../Assets/whyccs4.png";
import img5 from "../Assets/whyccs5.png";
import img6 from "../Assets/whyccs6.png";

function WhyCCS() {
  return (
    <div className={styles.whyccsContainer} id="whyccsid">
      <div className={styles.whyccsSection}>
        {/* <div className={styles.spacer}></div> */}
        {/* <h1 className={styles.mainHeading}>Why CCS?</h1> */}
        {/* <div className={styles.spacer}></div> */}
        <div className={styles.whyccsList}>
          <Fade left>
            <div className={styles.whyccsItem}>
              <img src={img1} alt="whyccs1" className={styles.whyccsImage} />
              <div>
                <h3 className={styles.heading}>Regular Meet-ups</h3>
                <div className={styles.content}>
                  We, at CCS, hold regular meet-ups to introduce the members to
                  various fields of computer science and technology.
                </div>
              </div>
            </div>
            {/* <div className={styles.spacer}></div> */}
          </Fade>
          <Fade right>
            <div className={styles.whyccsItem}>
              <div>
                <h3 className={styles.heading}>Skill-set Development</h3>
                <div className={styles.content}>
                  The members of the society collaborate with each other to
                  develop and polish their skill-sets.
                </div>
              </div>
              <img src={img2} alt="whyccs2" className={styles.whyccsImage} />
            </div>
            {/* <div className={styles.spacer}></div> */}
          </Fade>
          <Fade left>
            <div className={styles.whyccsItem}>
              <img src={img3} alt="whyccs3" className={styles.whyccsImage} />
              <div>
                <h3 className={styles.heading}>Designing Opportunities</h3>
                <div className={styles.content}>
                  CCS provides various opportinities to the designing posters,
                  flexes, videos, etc for the society.
                </div>
              </div>
            </div>
            {/* <div className={styles.spacer}></div> */}
          </Fade>
          <Fade right>
            <div className={styles.whyccsItem}>
              <div>
                <h3 className={styles.heading}>Project Opportunities</h3>
                <div className={styles.content}>
                  CCS members get the opportunity to work on multiple tech-based
                  projects in teams. This also helps in developing their soft
                  skills.
                </div>
              </div>
              <img src={img4} alt="whyccs4" className={styles.whyccsImage} />
            </div>
            {/* <div className={styles.spacer}></div> */}
          </Fade>
          <Fade left>
            <div className={styles.whyccsItem}>
              <img src={img5} alt="whyccs5" className={styles.whyccsImage} />
              <div>
                <h3 className={styles.heading}>Strong Alumni Network</h3>
                <div className={styles.content}>
                  CCS also has a very strong network of its alumni who
                  constantly guide the members of the society and share their
                  experiences.
                </div>
              </div>
            </div>
            {/* <div className={styles.spacer}></div> */}
          </Fade>
          <Fade right>
            <div className={styles.whyccsItem}>
              <div>
                <h3 className={styles.heading}>Exposure</h3>
                <div className={styles.content}>
                  The society provides good exposure by providing adequate
                  opportunities, guidance and examples to help its members
                  bloom.
                </div>
              </div>
              <img src={img6} alt="whyccs6" className={styles.whyccsImage} />
            </div>
          </Fade>
        </div>
        <div className={styles.spacer}></div>
      </div>
    </div>
  );
}

export default WhyCCS;
