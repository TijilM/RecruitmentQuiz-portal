import Form from "./Form";
import Vector from "./Vector";
import classes from "../Style/signup.module.css";

const SignupForm = (props) => {
  return (
    <div className={classes.mainContainer}>
      <Form />
      <Vector />
    </div>
  );
};

export default SignupForm;
