import classes from "../Style/Vector.module.css";
import vector from "../Assets/logo.png";

const Vector = (props) => {
  return (
    <div className={classes.rightContainer}>
      <div>
        <h3>lorem ipsum</h3>
        <p>lorem ipsum nfajskn djfsfs dfnsjfns nfsnfn fdfdd dfdfdf</p>
      </div>
      <img
        src={vector}
        alt="floating vector"
        className={classes.floatingVector}
      />
    </div>
  );
};

export default Vector;
