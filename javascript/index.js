// header User links ooprtion signUp & Signin Open Close JS...

document.getElementById("user").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("signuptab").style.display="block";
});
document.getElementById("signuptabclose").addEventListener("click",(e)=>{
    e.preventDefault();
   
    document.getElementById("signuptab").style.display="none";
});
document.getElementById("signinopen").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("signuptab").style.display="none";
    document.getElementById("signintab").style.display="block";
});
document.getElementById("signintabclose").addEventListener("click",(e)=>{
    e.preventDefault();
    
    document.getElementById("signintab").style.display="none";
});
document.getElementById("signupopen").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("signuptab").style.display="block";
    document.getElementById("signintab").style.display="none";
});
// paaword show & hide JS...
const passshow=()=>{
    document.getElementById("passshow").style.display="none";
    document.getElementById("passhide").style.display="block";

    let show = document.getElementById("password");

    if(show.type == "password"){
        show.type = "text";
    }
};
const passhide=()=>{
    document.getElementById("passhide").style.display="none";
    document.getElementById("passshow").style.display="block";

    let hide = document.getElementById("password");
    if(hide.type == "text"){
        hide.type = "password";
    }
}
document.getElementById("passshow").addEventListener("click", passshow);
document.getElementById("passhide").addEventListener("click", passhide);

// Signup data post to JSon Server JS...

document.getElementById("signup").addEventListener("submit",(e)=>{
    e.preventDefault();

    let user ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        tel : document.getElementById("tel").value,
    }
    console.log(user);

    // now make regex 
    let namecheck = /^[A-Za-z. ]{3,30}$/;
    let emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let passcheck = /^(?=.*[A-Z]{1})(?=.*[0-9])(?=.*[!@#$%^&*=-])[a-zA-Z0-9!@#$%^&*=-]{8,16}$/;
    let telcheck = /^[6-9]{1}[0-9]{9}$/;
    
    if(!namecheck.test(user.name)){
        document.getElementById("namealert").innerHTML="** Please enter valid name.!!";
    }
    else{
        document.getElementById("namealert").innerHTML="";
    }

    if(!emailcheck.test(user.email)){
        document.getElementById("emailalert").innerHTML="** Please enter valid email.!!";
    }
    else{
        document.getElementById("emailalert").innerHTML="";
    }
    if(!passcheck.test(user.password)){
        document.getElementById("passalert").innerHTML="** Please enter valid password.!!";
    }
    else{
        document.getElementById("passalert").innerHTML="";
    }
    if(!telcheck.test(user.tel)){
        document.getElementById("telalert").innerHTML="** Please enter valid number.!!";
    }
    else{
        document.getElementById("telalert").innerHTML=""; 
    }

    if( namecheck.test(user.name) && emailcheck.test(user.email) && passcheck.test(user.password) && telcheck.test(user.tel)){
        
        fetch(`http://localhost:3000/signup?email=${user.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.length > 0){
                if (data[0].email == user.email){
                    alert("User already exist..Please Sign-IN");
                    setTimeout(()=>{
                        document.getElementById("signintab").style.display="block";
                    })
                }
            }
            else{
                try {
                    fetch(`http://localhost:3000/signup`,{
                        method : "POSt",
                        headers : {"Content-Type":"application/json"},
                        body : JSON.stringify(user)
                    })
                } catch (error) {
                    alert("error")
                }
            }
        });
    };
})