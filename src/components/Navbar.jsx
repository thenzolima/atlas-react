import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <ion-icon name="home"></ion-icon>
        <p>Home</p>
      </Link>

      <Link to="/Sobre">
        <ion-icon name="book"></ion-icon>
        <p>Sobre</p>
      </Link>

      <Link to="/Ajustes">
        <ion-icon name="cog"></ion-icon>
        <p>Ajustes</p>
      </Link>

      <Link to="https://drive.google.com/file/d/1SJDh2qLjGtpZbERkdA-Oa8sPtCrfznT-/view?usp=sharing">
      <ion-icon name="lock-closed"></ion-icon>
        <p>Privacidade</p>
      </Link>
    </nav>
  );
}
