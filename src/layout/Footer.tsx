export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between px-6 py-3">
      <p>Copyright &copy; - 2024</p>
      <ul className="flex gap-x-3">
        <li>
          <a href="" target="_blank">
            <i className="fa-brands fa-strava"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
