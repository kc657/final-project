/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let extend = require('extend')
let watson = require('watson-developer-cloud')
let vcapServices = require('vcap_services')
let config = require('../../env.json')

exports.stt_token = function (req, res) {
  let sttConfig = extend(config.speech_to_text, vcapServices.getCredentials('speech_to_text'))

  let sttAuthService = watson.authorization(sttConfig)

  sttAuthService.getToken({
    url: sttConfig.url
  }, function (err, token) {
    if (err) {
      console.log('Error retrieving speech to text token: ', err)
      res.status(500).send('Error retrieving speech to text token')
      return
    }
    res.send(token)
  })
}

exports.tts_synthesize = function (req, res) {
  console.log('tts_synthesize entered')
}