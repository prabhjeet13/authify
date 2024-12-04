import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.profile); // Access user state from Redux

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-10 px-6">
      {
        user && (
          <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl bg-transparent">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-white mb-4">Dashboard</h1>

              {/* User's Full Name */}
              <h2 className="text-3xl font-bold text-white mb-2">{user.firstname}</h2>
              <h2 className="text-3xl font-bold text-white mb-2">{user.lastname}</h2>

              {/* User's Email */}
              <p className="text-lg text-white mb-4">{user.email}</p>

              {/* User's Account Type */}
              <p className="text-lg font-semibold text-white mb-6">
                Account Type: <span className="font-bold">{user.accountType}</span>
              </p>
            </div>

            {/* Conditional Button for Admin */}
            {user.accountType === 'Admin' && (
              <div className="flex justify-center mt-8">
                <Link to="/add-user">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200">
                    Add User
                  </button>
                </Link>
              </div>
            )}
            {user.accountType === 'Admin' && (
              <div className="flex justify-center mt-8">
                <Link to="/myaddusers">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200">
                    My Add Users
                  </button>
                </Link>
              </div>
            )}
          </div>
        )
      }
    </div>
  );
};

export default Dashboard;
