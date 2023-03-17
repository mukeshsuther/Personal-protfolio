function SendData(){
var Firstname = document.getElementById("Fname");
var Gmail1 = document.getElementById("Gmail");
var Subject1 = document.getElementById("Subject");
var TextA1 = document.getElementById("TextArea1");
var Button = document.getElementById("input23");

    if(Firstname.value === ""){
        Button.innerHTML = "Name is Required!!!";
        Button.style.color=  "#FF0130";
        Button.style.textShadow = "0 0 3px #FF0130";
        Button.style.transition = "0.3s";
        Firstname.focus();
        return false;
    } else if(Gmail1.value === ""){
        Button.innerHTML = "Gmail is Required!!!";
        Button.style.color= "red";
        Button.style.textShadow = "0 0 3px #FF0130";
        Button.style.transition = "0.3s";
        Gmail1.focus();
        return false;
    } else if(Subject1.value === ""){
        Button.innerHTML = "Subject is Required!!!";
        Button.style.color= "red";
        Button.style.textShadow = "0 0 3px #FF0130";
        Button.style.transition = "0.3s";
        Subject1.focus();
        return false;
    } else if(TextA1.value === ""){
        Button.innerHTML = "Comment Value is Required!!!";
        Button.style.color= "red";
        Button.style.textShadow = "0 0 3px #FF0130";
        Button.style.transition = "0.3s";
        Subject1.focus();
        return false;
    } else{
        Button.innerHTML = "Submitted!!!";
        Button.style.color= "#12E772";
        Button.style.textShadow = "0 0 3px #12E772";
        Button.style.transition = "0.3s";
        console.log("Name:",Firstname.value);
        console.log("Email:",Gmail1.value);
        console.log("Subject:",Subject1.value);
        console.log("Comment:",TextA1.value);
        //clear
        document.getElementById("Fname").value = "";
        document.getElementById("Gmail").value = "";
        document.getElementById("Subject").value = "";
        document.getElementById("TextArea1").value = "";
        
    }
}

