const submit=document.getElementById("submit");

submit.addEventListener("click", verify);

function verify(e)
{
    e.preventDefault();
    let user= {
        name:document.querySelector('#name').value,
        password:document.querySelector('#pwd').value
    }

    let verified=validateUser(user);
    if(verified)
    {
        loginUser(user.name);
        //window.location.href="./DinoGame/index.html";
        window.location.href="https://editor.p5js.org/sebi6547/sketches/cdKsSMB0T"
    }
    else
    {  
        alert("Incorrect login information");
        document.getElementById("signin").reset();
    }
    e.preventDefault();
}