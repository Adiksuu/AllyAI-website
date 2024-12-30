import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { _getSettings } from "../../functions/_getSettings";
import { auth, database } from "../../api/database/connect";
import { _deleteAllChats } from "../../functions/_handleDelete";

export default function ExperimentalSettings() {
    const [experimental, setExperimental] = useState(false);
    const [deleted, setDeleted] = useState(false);

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
