

document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
      
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
      
       
        if (username && email && password) {
          
          document.getElementById("error-message").textContent = "";
          alert("Signup successful!");
        } else {
          
          document.getElementById("error-message").textContent = "Please fill in all fields.";
        }
});
      
   



function uploadDocument(file) {
  
}


function takeAssessment(assessmentId, answers) {
    
}


function sendMessage(toUser, message) {
}
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    
    if (username === "user" && password === "password") {
     
      document.getElementById("error-message").textContent = "";
      alert("Login successful!");
    } else {
     
      document.getElementById("error-message").textContent = "Invalid credentials. Please try again.";
    }
  });
  const lessonLinks = document.querySelectorAll('#lesson-list a');
  const lessonContentDiv = document.getElementById('lesson-content');
  
  lessonLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      const lessonNumber = this.getAttribute('data-lesson');
      
      
      const lessonContent = getLessonContent(lessonNumber);
      
      lessonContentDiv.innerHTML = `
        <h3>${link.textContent}</h3>
        <p>${lessonContent}</p>
      `;
    });
  });
  
  function getLessonContent(lessonNumber) {
    
    const lessons = {
      1: "This lesson covers the basics of HTML...",
      2: "In this lesson, we'll learn about CSS...",
      3: "Welcome to the lesson on JavaScript basics..."
    };
  
    return lessons[lessonNumber] || "Lesson content not available.";
  }
  
