import React from "react";
import { getFirestore, getDoc, collection } from "firebase/firestore";
const UserList =  () => {
    const [users, setUsers] = useState([]);
    const db = getFirestore();

    


 return (
    <div className="userlist-container">
            <h2>Registered Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.email}</li>
                ))}
            </ul>
        </div>
 )
}



export default UserList