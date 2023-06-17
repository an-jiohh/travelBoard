import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Simulate } from "react-dom/test-utils";
import "../App.css";
export default function Communication() {
    const [feedback, setFeedback] = useState([]);
    const [question, setQuestion] = useState([]);
    const a = useParams();

    return (
        <main>
            <h2 class="profile-header">여러분의 의견</h2>
            <div class="main_detail">
                저에 대한 여러분들의 의견들을 보여주는 공간입니다. <br></br>여러분의
                의견을 자유롭게 표현해 주세요.
            </div>
            {feedback.map((feedback) => {
                return (
                    <div class="main_itemBox">
                        <div class="main_review">
                            <i class="fa-solid fa-quote-left"></i>
                            <div class="review_main">너무 유익해요</div>
                            <i class="fa-solid fa-quote-right "></i>
                        </div>
                        <div class="write_info">
                            <div class="info_writer">누군가</div>
                        </div>
                    </div>
                );
            })}
            <div className="review_box">
                <form action="/communication" method="post">
                    <div class="review_info">
            <textarea
                name="content"
                id="main_box"
                placeholder="여러분의 소중한 응원을 입력해주세요"
                cols="80%"
                rows="10"
            ></textarea>
                        <input type="text" name="writer" placeholder="작성자" />
                    </div>
                    <div class="submit_box">
                        <input type="submit" value="등록" />
                    </div>
                </form>
            </div>
            <h2 class="profile-header">알고 싶은 내용을 알려주세요</h2>
            <div class="main_detail">
                궁금했던 내용이나 알고 싶은 내용을 입력해 주세요.
                <br></br> 여러분들의 궁금증을 해결해드릴게요.
            </div>
            {question.map((question) => {
                return (
                    <div class="main_itemBox">
                        <div class="main_review">
                            <div class="review_main">mvc패턴에 대해 알고싶어요</div>
                        </div>
                        <div class="write_info">
                            <div class="info_writer">아무개</div>
                        </div>
                        <div class="write_info">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <div class="write_info">
                            <div class="info_writer">작성중</div>
                        </div>
                    </div>
                );
            })}
            <div className="review_box">
                <form action="/communication" method="post">
                    <div class="review_info">
            <textarea
                name="content"
                id="main_box"
                placeholder="여러분의 궁금증을 입력해주세요"
                cols="80%"
                rows="10"
            ></textarea>
                        <input type="text" name="writer" placeholder="작성자" />
                        <input type="hidden" name="progress" value="대기중" />
                    </div>
                    <div class="submit_box">
                        <input type="submit" value="등록" />
                    </div>
                </form>
            </div>
        </main>
    );
}