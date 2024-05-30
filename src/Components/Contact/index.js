import { Link } from "react-router-dom"

const Contact = ({visits, onClick}) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link onClick={onClick} to="/">Home</Link>
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
                This is a Contact page
            </div>
            You have visited the home page: {visits} times;
            </div>
        </div>
    )
}

export default Contact