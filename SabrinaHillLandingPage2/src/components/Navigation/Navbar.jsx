import './navbar.css'

export function Navbar() {

    return(
        <nav>
        <p>React Landing Page</p>
            <ul>
                <li>
                    <a href="#home">Home</a>
                    <a href="#promotion">Promotion</a>
                    <a href="aboutme">About Me</a>
                </li>
            </ul>
        </nav>
    );
 
}
