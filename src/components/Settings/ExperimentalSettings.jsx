import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { _getSettings } from "../../functions/_getSettings";
import { auth, database } from "../../api/database/connect";
import { _deleteAllChats } from "../../functions/_handleDelete";
import { _saveCustomRules } from "../../functions/_saveCustomRules";

export default function ExperimentalSettings() {
    const [experimental, setExperimental] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const textareaRef = useRef(null);
    const [rules, setRules] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const data = await _getSettings();

            setExperimental(data.experimental);
        };
        fetchData();
    }, []);

    const handleChangeExperimental = () => {
        setExperimental(!experimental)
        database.ref(`users/${auth.currentUser.uid}/settings`).update({ experimental: !experimental })
    }

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleInput = (e) => {
        setRules(e.target.value);
        adjustTextareaHeight();
    };

    return (
        <div className="container">
            <h2>Experimental Settings</h2>
            {experimental && (
                <div className="list">
                    <span>Chats Management</span>
                    <p>Manage all the chats you own</p>
                    <div className={`checkbox checkbox-wide${deleted ? ' active' : ''}`} onClick={() => _deleteAllChats(setDeleted)} >
                        <FontAwesomeIcon icon={deleted ? faCheck : faTrash} />
                        {deleted ? "Deleted successfully" : "Delete all chats"}
                    </div>
                </div>
            )}
            {experimental && (
                <div className="list">
                    <span>AI Assistant</span>
                    <p>Set the rules for your own AI assistant</p>
                    <div className="rules">
                        <textarea ref={textareaRef} value={rules} onChange={handleInput} maxLength={300} type="text" placeholder="Your instructions..."></textarea>
                        <span>{300 - rules.length}</span>
                    </div>
                    <button onClick={() => _saveCustomRules(rules)}>SAVE RULES</button>
                </div>
            )}
            <div className="list">
                <span>Experimental Beta Features</span>
                <p>
                    Allow experimental changes that will appear in the next
                    updates, may be unstable (run at your own risk)
                </p>
                <div
                    className={`checkbox ${experimental && "active"}`}
                    onClick={() => handleChangeExperimental()}
                >
                    <FontAwesomeIcon icon={experimental ? faCheck : faTimes} />
                </div>
            </div>
        </div>
    );
}
