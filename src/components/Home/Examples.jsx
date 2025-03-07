import React, { useEffect, useState } from 'react'
import { examples, getRandomExamples } from '../../api/gemini/examples'
import { useNavigate } from 'react-router-dom'
import { _sendMessage } from '../../functions/_sendMessage'
import { models } from '../../api/models/modelsList'
import { faGraduationCap, faMagnifyingGlass, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { _checkUserAccount } from '../../functions/_upgradeAccount'
import { _getPrompts } from '../../functions/_maxPrompts'

export default function Examples({ model, theme }) {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [randomExamples] = useState(getRandomExamples(examples, 3))
    const [isPremium, setIsPremium] = useState(false);
    const [prompts, setPrompts] = useState(0)

    const maxModelPrompts = !isPremium ? models.find(a => a.name.toUpperCase() === model.toUpperCase()).dailyLimit : 999;

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPrompts(model.toUpperCase()))
        }
        loadPrompts()
    }, [navigate])

    useEffect(() => {
        const fetch = async () => {
            const data = await _checkUserAccount();
            setIsPremium(data);
        };
        fetch();
    }, []);

    const handleNewChat = async (example) => {
        if (prompts >= maxModelPrompts) return
        setLoading(true);

        const date = Date.now()
        const currentChat = `${models.find(a => a.name === model).symbole}${date}`
        await _sendMessage(model.toUpperCase(), example, null, null, currentChat, [], setLoading, [])
        navigate(`/chat/${currentChat}`, { state: { loading: true } });
    }

    const titles = [
        'What about this?',
        'Ask me this!',
        'Curious? Try me!'
    ]

    const icons = [
        faGraduationCap,
        faMagnifyingGlass,
        faWandMagicSparkles
    ]

    function Example({ example, index }) {
        return (
            <div className="example" style={{ '--theme-color': theme.color, '--theme-rgba': theme.border }} onClick={() => handleNewChat(example)}>
                <span style={{ color: theme.color }}><FontAwesomeIcon icon={icons[index]} /></span>
                <h3>{titles[index]}</h3>
                <p>{example}</p>
            </div>
        )
    }

    return (
        <div className="examples">
            {randomExamples.map((example, index) => (
                <Example example={example} key={index} index={index} />
            ))}
        </div>
    )
}
