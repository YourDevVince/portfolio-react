import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__meta">© {year} Vince Villanueva</p>

          <a className="footer__link" href="#header">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}