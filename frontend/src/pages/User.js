import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      try {
        const response = await axios.post('http://localhost:4001/api/v1/user/getuser', { userId });
        if (response.data.success) {
          setUser(response.data.userdetails);
          console.log(response.data.userdetails);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
      setLoading(false);
    };
    fetchUser();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-transparent shadow-lg rounded-lg p-8 w-full max-w-4xl border border-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-white">User Profile</h1>
        <div className="text-white text-lg space-y-4">
          <p className="font-semibold">First Name: <span className="font-normal">{user.firstname}</span></p>
          <p className="font-semibold">Last Name: <span className="font-normal">{user.lastname}</span></p>
          <p className="font-semibold">Age: <span className="font-normal">{user.age}</span></p>
          <p className="font-semibold">Phone Number: <span className="font-normal">{user.phoneNo}</span></p>
          <p className="font-semibold">Salary: <span className="font-normal">₹{user.salary}</span></p>
          <p className="font-semibold">Role: <span className="font-normal">{user.role}</span></p>
        </div>
        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300">
            Edit
          </button>
          <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
