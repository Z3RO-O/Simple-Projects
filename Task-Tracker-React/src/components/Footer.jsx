import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <p>Copyright <Link className="footer-link" to='https://github.com/Z3RO-O/Task-Tracker-React'><em>Z3RO-O</em></Link> &nbsp;&copy; 2023</p>
        <Link className="footer-link" to="/about"><b>About</b></Link>
    </footer>
  )
}

export default Footer