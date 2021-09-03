export default function Footer() {
  return (
    <footer className="footer-basic">
      <div className="social">
        <a href="#">
          <i className="icon ion-social-instagram" />
        </a>
        <a href="#">
          <i className="icon ion-social-twitter" />
        </a>
        <a href="#">
          <i className="icon ion-social-facebook" />
        </a>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Home</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Services</a>
        </li>
        <li className="list-inline-item">
          <a href="#">About</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <p className="copyright">FennecDev © 2021</p>
    </footer>
  );
}
