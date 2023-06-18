import React, {useEffect, useState} from 'react';
import axios from "axios";

function TravelList({ paging, kw }) {
    const [travel, setTravel] = useState([]);

    useEffect(() => {
        axios.get('/api/travel/list')
            .then(response => setTravel(response.data))
            .catch(error => console.log(error))
    }, []);

    if (travel.length === 0) {
        return <div>Loading...</div>;
    }
    console.log(travel);

    return (
        <div class="travelList">
            <h1>Travel List</h1>
            <div>여러분들의 여행 경험을 알려주세요.</div>
            <table>
                <colgroup>
                    <col style={{width:"40%"}}/>
                    <col style={{width:"40%"}}/>
                    <col style={{width:"40%"}}/>
                </colgroup>
                <thead>
                <tr>
                    <th>제목</th><th>글쓴이</th><th>작성일지</th>
                </tr>
                </thead>
                <tbody>
                {travel.map(detail => (
                    <tr key={detail.id} height="56">
                        <td><a href={`/travel/detail/${detail.id}`}>{detail.subject}</a></td>
                        <td>{detail.author.username}</td>
                        <td>{detail.createDate.slice(0, 10)}</td>
                    </tr>
                ))}
                <tr height="56"> <td></td><td></td><td >
                   <div className={"writeButton"}>
                       <a href={`/travel/create`}>글 작성하기</a>
                   </div>
                </td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default TravelList;
