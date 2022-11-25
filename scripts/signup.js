const send=document.getElementById("send");
send.addEventListener("click", add)
function add(e)
{
    let user= {
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#pwd').value,
        score:0
    }
    let verify=validate(user);
    function validate(user)
    {
        const current_db = loadFromDB();
        const db_users = current_db.users;

        return (db_users.some(item => {
        return (item.name === user.name)
        }));
    }
    if(verify)
    {
        alert("User already exists in database")
        document.getElementById("register").reset();
    }
    else if(user.name==""||user.email==""||user.password=="")
    {
        alert("All the fields are not filled");
    }
    else
    {
        const current_db = loadFromDB();
        current_db.users.push(user);
        saveToStorage(current_db)
        alert("Registration successful");
        document.getElementById("register").reset();
    }
    e.preventDefault();
}
