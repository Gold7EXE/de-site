import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="https://discord.com/oauth2/authorize?client_id=1205638151855407114&permissions=8&scope=bot+applications.commands">
                Demon
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                /home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                /commands
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://r.mtdv.me/sourcecode3"
                target="_blank"
              >
                /source-code
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
