import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mid">
      <p>Version 1.0.5</p>
      <Link className="about-link" to="/">
        <b>Go Back</b>
      </Link>
    </div>
  );
};

export default About;
