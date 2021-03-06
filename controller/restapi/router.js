let express = require('express')
let router = express.Router()
let speech_to_text = require('./features/speech_to_text')

module.exports = router
// speech-to-text
router.get('/api/speech-to-text/token*', speech_to_text.stt_token)
router.get('/api/text-to-speech/synthesize*', speech_to_text.tts_synthesize)
