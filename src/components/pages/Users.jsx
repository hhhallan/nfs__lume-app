import React, {useEffect, useState} from 'react';
import {getUsers} from "../../api/models/users";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
}