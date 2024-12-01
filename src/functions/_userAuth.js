import { auth, database } from "../api/database/connect";

function _userAuth(e, type, email, password, setError, username, setAuthorized) {
    e.preventDefault();

    if (type === 'login') {
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setAuthorized(true)
            const data = {
                email, password
            }

            localStorage.setItem('user', JSON.stringify(data))
        }).catch((err) => {
            if (err.code === 'auth/invalid-email') {
                setError('This email is invalid, try another one')
            } else if (err.code === 'auth/missing-password') {
                setError('The invalid password')
            } else if (err.code === 'auth/invalid-credential') {
                setError('The email or password is wrong, try again')
            } else {
                setError(err.code)
            }
        })
    } else {
        if (username.trim().length < 3) {
            setError('The username is too short')
            return
        }
        auth.createUserWithEmailAndPassword(email, password).then(() => {
            const data = {
                email, 
                password,
                username,
                prompts: {
                    'ALLY-2': 0,
                    'ALLY-LIE': 0,
                    'ALLY-IMAGINE': 0
                },
                settings: {
                    'temperature': 1.0,
                    'length': 8192,
                    'language': 'auto'
                }
            }

            database.ref(`users/${auth.currentUser.uid}/`).set(data)
            setAuthorized(true)
            localStorage.setItem('user', JSON.stringify(data))
        }).catch((err) => {
            if (err.code === 'auth/email-already-in-use') {
                setError('This email is already in use, try another one')
            } else if (err.code === 'auth/invalid-email') {
                setError('This email is invalid, try another one')
            } else if (err.code === 'auth/weak-password') {
                setError('The password is too weak, it should be at least 6 characters long')
            } else {
                setError(err.code)
            }
        })
    }
}

export { _userAuth }