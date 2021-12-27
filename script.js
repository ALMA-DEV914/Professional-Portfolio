function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aungonalna58@gmail.com",
        Password: "**********1C75D",
        To : "almabraun37582019@yahoo.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body: "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone Number: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message").value,
        Attachments: [
          {
            name : "smtpjs.png",
            path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
          }]
    }).then(
      message => alert("Message Sent Successfully!")
    );
}