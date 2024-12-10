/* Peter */
.nav-bar {
    background-color: #a4de58;
    padding: 10px 0; /* Padding for the top and bottom of the navigation bar */
}

.nav-bar ul {
    list-style-type: none;
    text-align: center;
}

.nav-bar ul li {
    display: inline;
    margin: 0 20px;
}

.footer {
    background-color: #a4de58;
    padding: 10px 0;
    text-align: center; /* Center aligning the content within the footer */
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Page-specific styles */
.page-name,
.image-section,
.registration-form {
    text-align: center;
}

.image-section img,
.project img,
.image-section-about img,
.image-section-home img {
    display: block;
    margin: 0 auto;
}

.course-section {
    display: flex;
    flex-wrap: wrap;
}

.course {
    width: 20%;
    border: 1px solid #000;
    margin: 10px;
    padding: 10px;
    text-align: center;
}

.course button,
.registration-form input[type="button"],
.registration-form input[type="submit"] {
    background-color: blue;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
}

/* Styling for project section */
.project {
    border: 1px solid #000;
    padding: 10px;
    text-align: center;
    margin-bottom: 20px;
}

body {
    margin-bottom: 100px;
    background-color:lightblue;
}

form label {  
    display: block;  
    margin-bottom: 5px;  
}  
  
input[type="text"], input[type="email"], input[type="password"] {  
    width: 100%;  
    padding: 8px;  
    margin-bottom: 10px;  
    box-sizing: border-box;  
}  
  
form input[type="submit"] {  
    width: 100%;  
    padding: 10px;  
    background-color: #d808ef;}
    /*About Us Style*/
    button {  
        width: 100%;  
        padding: 10px;  
        background-color: #007BFF;  
        color: white;  
        border: none;  
        cursor: pointer;  
    }  
      
    button:hover {  
        background-color: #0056b3;  }