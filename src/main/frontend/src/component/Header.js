import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link class="main-a" to="/">
                <h1>
                    안지호
                    <br />
                    개발 포트폴리오
                </h1>
            </Link>
        </header>
    );
}