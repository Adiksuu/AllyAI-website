import { examples } from "../api/gemini/examples"

function _generateRandom(setMessage) {
    setMessage(examples[Math.floor(Math.random() * examples.length)])
}

export { _generateRandom }