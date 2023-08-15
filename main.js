const emailInput=document.querySelector(".emailInput");
const passwordInput=document.querySelector(".passwordInput");
const msg_email=document.querySelector(".msgEmial");
const msg_password=document.querySelector(".msgPassword");
const msg_signin=document.querySelector(".msgSignIn");
const btn_signin=document.querySelector(".btnSignin");


btn_signin.addEventListener("click",signIn);

function signIn(event){
    event.preventDefault();
    msg_email.innerText="";
    msg_password.innerText="";
    const emailValue=emailInput.value;
    const passwprdValue=passwordInput.value;
    let ifSendData=true;
    

    savedUsers(emailInput.value);
    savedUsers(passwordInput.value);

    if(emailValue.length===0 || emailValue.indexOf("@")===-1 || emailValue.indexOf(".")===-1){
        msg_email.innerText="Please enter a valid Email"
        ifSendData=false;

    }

    if(passwprdValue.length===0){
        msg_password.innerText="Please enter your password"
        ifSendData=false;

    }else if(passwprdValue.length<8){
        msg_password.innerText="Your password is too short"
        ifSendData=false;
    }

    if(ifSendData===true){
        
        msg_signin.innerText="Sign in Seccessfuiiy";
        
    }
}




function savedUsers(saved) {
    let saves;
    if(localStorage.getItem("saves")===null){
        saves=[];
    }
    else{
        saves=JSON.parse(localStorage.getItem("saves"));
    }
    saves.push(saved);
    localStorage.setItem("saves", JSON.stringify(saves));
}

