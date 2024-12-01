import { auth } from "../api/database/connect"

const _sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification()
}

export { _sendVerificationEmail }