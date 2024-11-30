import { auth } from "../api/database/connect"

const _userLogout = () => {
    auth.signOut().then(() => {
        localStorage.removeItem('user')
        window.location.reload()
    })
}

export { _userLogout }