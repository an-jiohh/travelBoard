import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link class="main-a" to="/">
                <h1>
                    travel board
                </h1>
            </Link>
        </header>
    );
}