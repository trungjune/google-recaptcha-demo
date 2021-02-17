# reCAPTCHA Demo

Demo of using Google's reCAPTCHA v2 client-side. Submit button is disabled until captcha is verified, and form will not submit until all fields are populated.

NOTE: Express server is not set up to return on POST, this is purely a client-side demo.

## Getting Started

1. Google's reCAPTCHA [documentation](https://developers.google.com/recaptcha/docs/display#config)
2. Register your reCAPTCHA using the [admin console](https://www.google.com/recaptcha)
  1. Use `localhost` for the label and approved domains
  2. Accept all other default options
3. Clone this repository
4. Install dependencies: `yarn install`
5. Include your site key in `src/index.html` at line 23
6. Run the application: `yarn start`
7. Open your web browser and navigate to `http://localhost:8000/`
8. Open dev tools
9. Fill out the form, verify using the captcha, the response from the captcha is logged to the console.