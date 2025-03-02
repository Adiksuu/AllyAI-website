const _textToSpeech = (message) => {
    
    const synth = window.speechSynthesis
    const voices = synth.getVoices()
    const utterThis = new SpeechSynthesisUtterance(message)
    utterThis.voice = voices[0]
    utterThis.lang = 'en-US'
    synth.speak(utterThis)
}

export { _textToSpeech }