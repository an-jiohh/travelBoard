import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TravelForm = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [lat, setLat] = useState(0.0);
    const [lng, setLng] = useState(0.0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'subject') {
            setSubject(value);
        } else if (name === 'content') {
            setContent(value);
        } else if (name === 'lat') {
            setLat(parseFloat(value));
        } else if (name === 'lng') {
            setLng(parseFloat(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            subject: subject,
            content: content,
            lat: lat,
            lng: lng,
        };

        axios.post('/api/travel/create', data)
            .then((response) => {
                console.log(response.data);
                // 요청 성공 시 추가 동작
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                // 요청 실패 시 추가 동작
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>Subject</div>
                <input type="text" name="subject" value={subject} onChange={handleChange} className="form-input" />
            </div>
            <div>
                <div>Content</div>
                <textarea name="content" value={content} onChange={handleChange} className="form-textarea" />
            </div>
            <div>
                <div>Latitude</div>
                <input type="number" name="lat" value={lat} onChange={handleChange} step="0.0001" className="form-input" />
            </div>
            <div>
                <div>Longitude</div>
                <input type="number" name="lng" value={lng} onChange={handleChange} step="0.0001" className="form-input" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TravelForm;