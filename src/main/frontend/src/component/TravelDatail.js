import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import MapComponent from "./MapComponent";
import ReactMarkdown from 'react-markdown';

function TravelDetail() {
    const { id } = useParams();
    const [travel, setTravel] = useState(null);

    useEffect(() => {
        axios.get(`/api/travel/detail/${id}`)
            .then(response => setTravel(response.data))
            .catch(error => console.log(error))
    }, []);

    if (!travel) {
        return <div>Loading...</div>;
    }

    return (
        <div className={"travelTable"}>
            <h1>{travel.subject}</h1>
            <MapComponent lat={travel.lat} lng={travel.lng}/>
            <div className={"travelContent"}><ReactMarkdown>{travel.content}</ReactMarkdown></div>
        </div>
    );
}

export default TravelDetail;
