console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}
function showWelcomeMessage() {
 feature/js.callback-functions/user-login-callback-1-named-vs-anonymous
  console.log("Welcome! You are logged in now.");
  
}
// Call handleUserLogin below!
handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");;
});

