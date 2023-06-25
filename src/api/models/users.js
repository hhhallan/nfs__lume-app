import axiosInstance from '../config';

export async function getUsers() {
    const response = await api.get('/users');
    return response.data;
}

export async function getUserById(userId) {
    const response = await api.get(`/users/${userId}`);
    return response.data;
}