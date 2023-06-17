import "../App.css";
export default function About() {
    return (
        <main>
            <h1 className="profile-header">About</h1>
            <div className="profile">
                <div className="profile_image">
                    <img src="img/jiho.jpg" alt="" />
                </div>
                <div className="profile_contents">
                    <h2>Jiho An</h2>
                    <p>모든 것에 도전하는 잡식성 개발자</p>
                    <p></p>
                    <div>
                        <ol id="profile_contents_detail">
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                <span> Iksan, Republic of Korea</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <span> dkswlgh99@naver.com</span>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-brands fa-github"></i> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://an-jiohh.github.io/">
                                    <i class="fa-brands fa-blogger"></i> blog
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="about-content">
                <div className="content_left">
                    <h2>
                        <i class="fa-solid fa-keyboard"></i> Experiences
                    </h2>
                    <ul>
                        <li>
                            <i class="fa-regular fa-square-check"></i> C C++
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> Java
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> PHP + MySql
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> Python for Deeplearning
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> JavaScript, HTML / CSS
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> OpenGl
                        </li>
                    </ul>
                </div>
                <div className="content_right">
                    <h2>
                        <i class="fa-regular fa-thumbs-up"></i> 개발도구
                    </h2>
                    <ul>
                        <li>
                            <i class="fa-regular fa-square-check"></i> Visual Studio Tools
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> Visual Studio Code
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> Eclipse
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> Github
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i> Notion
                        </li>
                    </ul>
                </div>
            </div>
            <div className="graph">
                <div className="graph_flex">
                    <h2>
                        <i class="fa-solid fa-check"></i> Commit history
                    </h2>
                </div>
                <div className="graph_flex">
                    <img
                        src="http://ghchart.rshah.org/an-jiohh"
                        alt="2016rshah's Github chart"
                    />
                </div>
            </div>
        </main>
    );
}
