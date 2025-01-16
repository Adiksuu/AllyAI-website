import { getAdditionalUserInfo, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, database } from "../api/database/connect";

function _userAuth(e, type, email, password, setError, username, setAuthorized, setEmailVerified) {
    e.preventDefault();

    if (type === 'login') {
        auth.signInWithEmailAndPassword(email, password).then(async () => {
            setAuthorized(true)
            const data = {
                email, password
            }

            localStorage.setItem('user', JSON.stringify(data))
            await setEmailVerified(auth.currentUser.emailVerified)
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
                    'ALLY-IMAGINE': 0,
                    'ALLY-CUSTOM': 0,
                    'resetAt': new Date().getTime() + 24 * 60 * 60 * 1000
                },
                settings: {
                    'temperature': 1.0,
                    'length': 8192,
                    'language': 'auto',
                    'rules': ''
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

function _userGoogleAuth(auth, provider, setAuthorized, setEmailVerified) {
    signInWithPopup(auth, provider).then(async (result) => {
        const user = result.user;
        
        const userData = {
            email: user.email, 
            password: `google-${user.uid}`,
            username: user.displayName,
            prompts: {
                'ALLY-2': 0,
                'ALLY-LIE': 0,
                'ALLY-IMAGINE': 0,
                'ALLY-CUSTOM': 0,
                'resetAt': new Date().getTime() + 24 * 60 * 60 * 1000
            },
            settings: {
                'temperature': 1.0,
                'length': 8192,
                'language': 'auto',
                'rules': ''
            }
        }
        const snapshot = await database.ref(`users/${user.uid}/`).once('value')
        if (!snapshot.exists()) {
            database.ref(`users/${user.uid}/`).set(userData)
        }
        setAuthorized(true)
        setEmailVerified(user.emailVerified)
    }).catch((error) => {
        console.log(error)
    });
}

export { _userAuth, _userGoogleAuth }