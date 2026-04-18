<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

<script>
  (function () {
    emailjs.init("Jr8EbM-n2T8zorOHr"); 
  })();
 
  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_mgbmqwh",      
      "template_z2v79eg",     
      e.target
    ).then(
      function () {
        document.getElementById("form-msg").style.display = "block";
        e.target.reset();
      },
      function (error) {
        alert("Failed to send message ❌");
        console.error("EmailJS Error:", error);
      }
    );
  }
</script>