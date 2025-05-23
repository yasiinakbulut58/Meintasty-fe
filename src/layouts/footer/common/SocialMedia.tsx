const SocialMedia: React.FC = () => {
  return (
    <ul>
      <li>
        <a href="https://www.facebook.com/meintasty.ch/" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/meintasty/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/meintasty" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      {/*  <li>
        <a href="https://accounts.google.com/" target="_blank">
          <i className="fab fa-google"></i>
        </a>
      </li> */}
    </ul>
  );
};

export default SocialMedia;
