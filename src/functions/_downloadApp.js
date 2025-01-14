const _downloadApp = (os) => {
    if (os === 'windows') {
        window.open('https://github.com/Adiksuu/AllyAI-website/releases/download/v1.0.0/AllyAI-1.0.0-win.zip', '_blank')
    } else {
        window.open('https://github.com/Adiksuu/AllyAI-website/releases/download/v1.0.0/allyai.appimage', '_blank')
    }
}

export { _downloadApp }