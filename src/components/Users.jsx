import { useState, useEffect } from "react";
function UserList()
{
    const[user,setUsers]=useState([]);
    useEffect (()=>
        {
            const fetchUser = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await fetchUser.json();
            setUsers(data);
        }

    )
}