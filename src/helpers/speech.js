export default class WebSpeech {
  /**
   * Message configurations
   * @property _msg
   * @type {Object}
   */
  _msg = new window.SpeechSynthesisUtterance();

  // constructor() {
  //   //calling get voices method first scaffolds it for
  //   //use in say method
  //   window.speechSynthesis.getVoices();
  // }

  /**
   * Read string and talk content for user
   * @param  {String} text   Text content for talk content for user
   * @param  {Object} config Configuration options
   * @return {Boolean}
   * @method sayText
   */
  sayText(text, config) {
    const voices = window.speechSynthesis.getVoices();
    this._msg.voice = voices[0];
    this._msg.volume = config.volume;
    this._msg.rate = config.rate;
    this._msg.pitch = config.pitch;

    //message for speech
    this._msg.text = text;
    this._msg.lang = "en-US";

    window.speechSynthesis.speak(this._msg);

    return true;
  }

  stop() {
    window.speechSynthesis.cancel();
  }
}
