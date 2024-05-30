import { Link } from "react-router-dom"

const Home = ({ onClick }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div>
            <div>
            My banner number is:
            B00944477
            </div>
            
            <div>
            check out my website:
            <Link onClick={onClick} target={"_blank"} to="https://kickitweb.ca/">Website</Link>
            </div>
            
            </div>
            
        </div>
    )
}

export default Home