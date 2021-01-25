
let fname,lname,email,mobile,state,country,subject,question

const btn = document.getElementById("btn").addEventListener('click',()=>{
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    mobile = document.getElementById("mobile").value;
    state = document.getElementById("state").value;
    country = document.getElementById("country").value;
    subject = document.getElementById("subject").value;
    question = document.getElementById("question").value;

    db.ref("users/"+mobile).set({
        FirstName:fname,
        LastName:lname,
        Email:email,
        State:state,
        Country:country,
        Subject:subject,
        Question:question,
    })
})