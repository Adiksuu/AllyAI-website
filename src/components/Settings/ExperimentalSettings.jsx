import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { _getSettings } from "../../functions/_getSettings";
import { auth, database } from "../../api/database/connect";

export default function ExperimentalSettings() {
    const [experimental, setExperimental] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await _getSettings();

            setExperimental(data.experimental);
        };
        fetchData();
    }, []);

    useEffect(() => {
        database.ref(`users/${auth.currentUser.uid}/settings`).update({ experimental })
    }, [experimental])

    return (
        <div className="container">
            <h2>Experimental Settings</h2>
            <div className="list">
                <span>Experimental Beta Features</span>
                <p>
                    Allow experimental changes that will appear in the next
                    updates, may be unstable (run at your own risk)
                </p>
                <div
                    className={`checkbox ${experimental && "active"}`}
                    onClick={() => setExperimental(!experimental)}
                >
                    <FontAwesomeIcon icon={experimental ? faCheck : faTimes} />
                </div>
            </div>
        </div>
    );
}
