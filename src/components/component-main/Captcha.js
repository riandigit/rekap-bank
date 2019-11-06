import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'
class Captcha extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  componentDidMount() {
    if (this.captchaDemo) {
        console.log("started, just a second...")
        this.captchaDemo.reset();
        this.captchaDemo.execute();
    }
  }
  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
          this.captchaDemo.execute();
      }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  render() {
    return (
      <div>
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="invisible"
            render="explicit"
            sitekey="6LedGsEUAAAAAL26R4lILTYLKVd8_SZ4uZAnWA0t"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
      </div>
    );
  };
};
export default Captcha;