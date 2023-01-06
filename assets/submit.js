

function sendEmail() {
    // get form data
    const name = document.getElementById("name").value;
    const address = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("message").value;
    console.log({name, address, subject, body})
    clearForm()    
  }

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function(event) {
    // prevent the default link behavior
    event.preventDefault();

    // do something when the submit button is clicked
    sendEmail()
  });
  
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}
