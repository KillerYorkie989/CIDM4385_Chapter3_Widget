/* app/controllers/index.js */

/* NOTE!!!!
 * I called my widget toggleButton rather than what the book calls it: buttonToggle.
 * This means that my code doesn't match up ENTIRELY to what is in the book.  The functionality
 * is the same, but the names are different.  
 */

//programatically add the widget to the view from inside the controller
var toggleButtonWidget = Alloy.createWidget("toggleButton");

//get the main view from the widget
$.mainWindow.add(toggleButtonWidget.getView());

//open
$.mainWindow.open();

/* last, we must modify the config.json file in the main app folder
 * to ensure that the project is aware of the widget
 {
    "global": {},
    "env:development": {},
    "env:test": {},
    "env:production": {},
    "os:android": {},
    "os:blackberry": {},
    "os:ios": {},
    "os:mobileweb": {},
    "dependencies": {
        "toggleButton": "1.0" <= HERE
    }
}
 */
