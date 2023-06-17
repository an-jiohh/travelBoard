import { Link } from "react-router-dom";

export default function ProjectList() {
    return (
        <main>
            <h1 class="profile-header">Project List</h1>
            <div class="ProjectList_flexBox">
                <div class="Project_itemBox">
                    <img src="img/1/1.PNG" alt="" />
                    <h3>
                        <Link to="/Quine-McCluskey">
                            <i class="fa-solid fa-desktop"></i> Quine-McCluskey 구현
                        </Link>
                    </h3>
                </div>
                <div class="Project_itemBox">
                    <img src="img/3/3.PNG" alt="" />
                    <h3>
                        <Link to="/탱크게임프로젝트">
                            <i class="fa-solid fa-network-wired"></i> 탱크 게임 프로젝트
                        </Link>
                    </h3>
                </div>
            </div>
            <div class="ProjectList_flexBox">
                <div class="Project_itemBox">
                    <img src="img/4/4.PNG" alt="" />
                    <h3>
                        <Link to="/쇼핑몰 DB 프로젝트">
                            <i class="fa-solid fa-database"></i> 쇼핑몰 DB 프로젝트
                        </Link>
                    </h3>
                </div>
                <div class="Project_itemBox">
                    <img src="img/5/5.PNG" alt="" />
                    <h3>
                        <Link to="/오밥무(WTM) 프로젝트">
                            <i class="fa-solid fa-server"></i> 오밥무 프로젝트
                        </Link>
                    </h3>
                </div>
            </div>
        </main>
    );
}
