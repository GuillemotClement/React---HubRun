export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between border-b px-6 py-3 shadow">
      <a className="flex items-center text-2xl" href="/">
        <i className="fa-solid fa-medal mr-2"></i>
        <p>HubRun</p>
      </a>
      <ul className="flex gap-x-3">
        <li className="hover:text-blue-400">
          <a href="#">Outils</a>
        </li>
        <li className="hover:text-blue-400">
          <a href="#">Calendrier</a>
        </li>
        <li className="hover:text-blue-400">
          <a href="">Entrainement</a>
        </li>
      </ul>
      <ul className="flex gap-x-3">
        <li className="hover:text-blue-400">
          <a href="">Connexion</a>
        </li>
        <li className="hover:text-blue-400">
          <a href="">Inscription</a>
        </li>
        <li className="hover:text-blue-400">
          <a href="">Mon profil</a>
        </li>
        <li className="hover:text-blue-400">
          <a href="">Déconnexion</a>
        </li>
      </ul>
    </header>
  );
}
