import React, { useEffect, useState } from 'react'
import HomeInput from '../components/Home/HomeInput'
import Examples from '../components/Home/Examples'
import ModelSelecting from '../components/Home/ModelSelecting'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [model, setModel] = useState(location.state?.model || 'Ally-2')
    const { id } = useParams();

    useEffect(() => {
        navigate(`/`, { replace: true, state: null });
    }, [navigate, id]);

    return (
        <section className="home">
            <Examples model={model} />
            <div className="container">
                <h1>How can I help you?</h1>
                <p>Ask what you want and you will receive a quick and concise answer</p>
                <HomeInput model={model} />
                <ModelSelecting model={model} setModel={setModel} />
            </div>
        </section>
    )
}
