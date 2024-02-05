# Getting Started with Oasis App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### About Welcome Screen:

1. `Overview`

The WelcomeScreen component consists of two cards, allowing the user to select between an individual or business account.

2. `Props`

None
This component does not currently accept any props.

3. `Functions`

handleIndividualClick()
This function is triggered when the user clicks on the "Individual" card. It logs a message to the console.

handleBusinessClick()
This function is triggered when the user clicks on the "Business" card. It logs a message to the console.

4. `Styles`

This component uses styles from the "WelcomeScreen.css" file to ensure a consistent and visually appealing layout.

5. `Dependencies`

React: ^16.8.0
react-bootstrap: ^5.3.0
@fortawesome/react-fontawesome: ^0.1.14

6. `Additional Information`

This component is part of the onboarding process and should be rendered within a MainContainer for proper styling and layout.

7. `Summary`

The WelcomeScreen component is a part of our application's onboarding process. It provides users with the option to choose between creating an individual or business account.

### About Registration Screen:

1. `Overview`

The RegisterScreen component contains a form with fields for the user's full name, email address, and password. It also includes an option to register using a Google account.

2. `Props`

None
This component does not currently accept any props.

3. `Functions`

validateField(name, value)
This function validates individual form fields by checking if they are filled. It is used for dynamic validation during user input.

isStepValid()
This function checks if all form fields are valid to enable form submission.

handleFullNameChange(e)
This function handles changes in the full name input field, performing validation to allow only non-numeric characters.

handleEmailChange(e)
This function handles changes in the email input field, ensuring a valid email format.

handleSubmit(e)
This function is triggered when the form is submitted. It validates the form, checks for filled fields, and logs the form data before proceeding to the next page.

handleChange(e)
This function updates the component's state based on user input.

handleNextPage()
This function navigates to the next page upon successful form submission.

4. `Styles`

This component uses styles from the "RegisterScreen.css" file to maintain a consistent and visually appealing layout.

5. `Dependencies`

React: ^16.8.0
react-bootstrap: ^5.3.0
Additional Information
This component is part of the registration process and should be rendered within a MainContainer for proper styling and layout.

6. `Summary`

The RegisterScreen component handles individual account registration, ensuring the collection of required details, form validation, and a smooth transition to the next step in the registration process. It plays a crucial role in onboarding users to our application.

### About Profile Screen:

1. `Overview`

The ProfileScreen component extends the user registration process by gathering residency-related information. It includes a form with fields for the user's phone number, address, and country.

2. `Props`

None
This component does not currently accept any props.

3. `Functions`

validateField(name, value)
This function validates individual form fields by checking if they are filled. It is used for dynamic validation during user input.

isStepValid()
This function checks if all form fields are valid to enable form submission.

handleFullNameChange(e)
This function handles changes in the full name input field, performing validation to allow only non-numeric characters.

handleEmailChange(e)
This function handles changes in the email input field, ensuring a valid email format.

handleSubmit(e)
This function is triggered when the form is submitted. It validates the form, logs the form data, and may perform additional actions in the future.

handleChange(e)
This function updates the component's state based on user input.

handleSaveClick()
This function is triggered when the "Save & Continue" button is clicked. It navigates the user to the next step in the onboarding process.

4. `Styles`

This component uses styles from the "ProfileScreen.css" file to maintain a consistent and visually appealing layout.

5. `Dependencies`

React: ^16.8.0
react-bootstrap: ^5.3.0
react-phone-number-input: ^1.3.1
Additional Information
This component is part of the onboarding process and should be rendered within a MainContainer for proper styling and layout.

6. `Summary`

The ProfileScreen component plays a pivotal role in gathering essential residency-related information from users during the registration process. It ensures a smooth and comprehensive onboarding experience, leading users to the next step with their profile data securely stored.


### About ProfileSub Screen:

1. `Overview`

The ProfileSubScreen component extends the user registration process by gathering specific details related to banking verification. It includes a form with a field for the user's Bank Verification Number (BVN).

2. `Props`

None
This component does not currently accept any props.

3. `Functions`

validateField(name, value)
This function validates individual form fields by checking if they are filled. It is used for dynamic validation during user input.

isStepValid()
This function checks if all form fields are valid to enable form submission.

handleFullNameChange(e)
This function handles changes in the full name input field, performing validation to allow only non-numeric characters.

handleEmailChange(e)
This function handles changes in the email input field, ensuring a valid email format.

handleSubmit(e)
This function is triggered when the form is submitted. It validates the form, logs the form data, and may perform additional actions in the future.

handleChange(e)
This function updates the component's state based on user input.

4. `Styles`

This component uses styles from the "ProfileSubScreen.css" file to maintain a consistent and visually appealing layout.

5. `Dependencies`

React: ^16.8.0
react-bootstrap: ^5.3.0
Additional Information
This component is part of the onboarding process and should be rendered within a MainContainer for proper styling and layout.

6. `Summary`

The ProfileSubScreen component is a pivotal step in gathering essential details related to banking verification. It ensures a smooth and comprehensive onboarding experience, leading users to the next step with their profile data securely stored.

