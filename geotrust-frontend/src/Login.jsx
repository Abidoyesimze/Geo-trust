import React, { useState } from 'react';
import { auth } from './firebase';  // Configure Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Logged in user: ', user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // After successful login
auth.onAuthStateChanged((user) => {
    if (user) {
      // Assuming role is stored in user metadata or your database
      const userRole = user.role; // Fetch role from database if needed
      if (userRole === 'admin') {
        navigate('/admin-dashboard');
      } else if (userRole === 'seller') {
        navigate('/seller-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    }
  });
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
