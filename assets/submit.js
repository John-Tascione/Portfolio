

function sendEmail() {
    // get form data
    const name = document.getElementById("name").value;
    const address = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("message").value;
    console.log({name, address, subject, body})
    const alertMessage = "Thank you for contacting John. He will reach back out with a response to your inquiry!"
    alert(alertMessage);
    clearForm()
    // send email using JavaScript
    // Email.send({
    //     secureToken: "b541564b-0ae9-4f61-ac6a-5ab001445731",
    //     To : "jtash25@gmail.com",
    //     From : address,
    //     Subject : subject,
    //     Body : `You Received a message from ${name}. 
    //     Please find their message text: ${body}`
    // }).then(alert(alertMessage)).then(clearForm())    
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
