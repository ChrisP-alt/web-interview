# Notes from Chris

## Structure of the code

- `__fixtures__`: mock data used for testing
- `api`: using the Fetch API to get and post to the JSON server 
- `components`: the App component loads a header and a NewAppointment page
    - `__tests__`: tests and snapshots using Jest and Enzyme
- `constants`: currently just the different consultant types
- `icons`: SVGs from https://fontawesome.com/license/free
- `styles`: SASS files used with CSS modules in the components

## Additional Packages

- `enzyme` (and related): testing utility to help with React components
- `moment`: currently just for parsing the appointment dates for the Date and Time buttons
- `node-sass`: to enable CSS modules with react-scripts

## Next steps

With more time for the task I would have done the following:
- Add the "Appointment type" and "Attach a photo section" (these weren't needed by the POST /appointments endpoint)
- Split the PropType shapes into a separate file for re-use
- Center the Babylon Health logo in the header and add menu and user(?) buttons
- Add testing for the `NewAppointment` component and `apiUtils`
- Display success and error messages from gets/posts to the JSON server
- Display an error if the user tries to book an appointment without all required fields selected
- Fix the `manifest.json` by using appropriately sized images (192x192 and 512x512)
