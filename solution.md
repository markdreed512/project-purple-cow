
# Project Purple Cow

## Getting Started

To lauch the application, in the root of the project, run 

`npm start`

View the application at http://localhost:3000/

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Implementation Details

### Components

#### Header 

- Functional component with placeholder content

#### Counter

- Reusable functional component that can be customized by passing button text as a prop to the component
- Returns a button and a numeric display of "hits". These two elements were not decoupled into their own separate components since they would always be used together
- Makes requests to an external api "countapi". This package was added via npm install to the package.json dependency list
- Utilizes two methods from countapi:
    - countapi.hit(), which increments the count and returns the updated count
    - countapi.get(), which fetches the current count without incrementing it
    - include the domain "fearless.tech" and non-secret key "1ccb732e-b55a-4404-ad3f-0f99c02fe44e" as the respective arguments to these method calls to ensure that the value that is being fetched and updated belongs to Project Purple Cow
- Holds the "hits" value in its own state using the useState hook
- Displays the current value of the "hits" value on page load using the useEffect hook with an empty dependency array. The empty array ensures that the update is not dependent on the value of any other variable and will only run the function on page load. 

### Styles

Each component has its own CSS file in the 'components' directory. Any global styles will be in App.css. 

## Future Updates

- Replace default React favicon
- Increase security of count values by using an environment variable for the api key that would not be publically available
- Ensure app is fully accessible

## Notes

- This project was bootstrapped using the create-react-app package, but extaneous files not necessary to proof-of-concept were removed for purposes of organization and ease of navigation. Files could of course be added back in, for example to provide a suite of unit tests. For more information on default files created with this package, visit their [documentation](https://create-react-app.dev/docs/getting-started).