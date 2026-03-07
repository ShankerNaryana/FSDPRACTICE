import { useEffect, useState } from "react";

function Fd() {
    const [users, setusers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setusers(data));
    }, []);

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.phone}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Fd;