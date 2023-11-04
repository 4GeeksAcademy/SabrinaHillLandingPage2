import './App.css'


export function Navbar() {

    return(
        <nav>
        <h1>Welcome to My Landing Page</h1>
            <ul class="land">
                <li>
                    <a href="#home">Home</a>
                    <a href="contact">Contact Info</a>
                    <a href="about">About Me</a>
                </li>
            </ul>
        </nav>
    );
 
}
export default Navbar