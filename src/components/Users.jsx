import { useState, useEffect } from "react";
const Users = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect (()=>
        {
            setLoading(true);
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                if(!response.ok) {
                    throw new Error("new error");
                }
                return response.json();
            })
            .then((data)=>{
                setUser(data);
                setLoading(false);
            })
            .catch((error)=> {
                setError(error.message);
                setLoading(false);
            })
        },[]);

        return (
            <div>
                  {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
               
                    <li>{user.map((userrecord)=>(
                        <p>{userrecord.id}:{userrecord.name}</p>
                    ))}</li>
            

            </div>
            
        )
}

export default Users;


