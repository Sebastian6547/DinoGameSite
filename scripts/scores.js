current_db = loadFromDB();
for(let i = 0; i < current_db.users.length; i++ )
{
    let userName= current_db.users[i].name;
    let scores = current_db.users[i].score;

    let newline=document.createElement('tr');
    let nameText=document.createElement('td');
    let scoreText=document.createElement('td');
    let extraspace=document.createElement('td')

    nameText.innerHTML=userName;
    scoreText.innerHTML=scores;
    const btnText = login_btn.firstElementChild.innerHTML;

    if (btnText === "Log-out") 
    {
        let extra=document.createElement('button');
        extra.innerHTML=("Delete")
        extra.style.backgroundColor="#e7d2cc"
        extraspace.appendChild(extra)
        extra.classList.add('extra')
    }
    const table=document.getElementById("table");
    table.appendChild(newline);
    newline.appendChild(nameText);
    newline.appendChild(scoreText);
    newline.appendChild(extraspace);
}

const extraspaces = document.querySelectorAll(".extra");
for (let i=0;i<extraspaces.length;i++) {
    extraspaces[i].addEventListener("click", event=>{deleteDbUser(current_db.users[i].name);event.currentTarget.parentElement.parentElement.remove();});
}

function delet(event)
{
    event.currentTarget.parentElement.parentElement.remove();
    deleteDbUser()
}