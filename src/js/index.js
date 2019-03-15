import store from "../js/store/index";
import { selectSquare, changePlayer } from "../js/actions/index";

// Debugging tips:
// by adding the window.store = store command, you can access this variable in the console of the browser's developer tools (F12)
// hit F12
// store.getState() - the state will be returned
window.store = store;
window.myStore = store;

// For the following line enter this in the console:
// store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) )
window.selectSquare = selectSquare;
window.changePlayer = changePlayer;


// Other console window commands that might be useful
// store.subscribe(() => console.log('Look ma, Redux!!'))