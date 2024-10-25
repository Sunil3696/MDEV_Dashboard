import React, { useEffect , useState} from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import "../styles/userList.css"


const UserList =  () => {
    const [users, setUsers] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        const fetchUsers = async () => { //fetching user details from users collection
            const usersCollection = collection(db, 'users');  
            const userSnapshot = await getDocs(usersCollection);
            const userList = userSnapshot.docs.map(doc => doc.data());
            setUsers(userList);
        };
        fetchUsers(); //calling function
    }, [db]);


 return (
    <div className="userlist-container">
            <h2>Registered Users</h2>
            <ul>
                {users.map((user, index) => ( //looping
                    <li key={index}>{user.email}</li>
                ))}
            </ul>
        </div>
 )
}



export default UserList