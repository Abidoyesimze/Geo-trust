import React, { useState } from 'react';
import { auth } from './firebase';  
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(false);  
  const [successMessage, setSuccessMessage] = useState('');  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }
    
    setError(null);  // Clear any previous errors
    setLoading(true);  // Start loading

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed up
        const user = userCredential.user;
        console.log('Signed up user: ', user);
        setSuccessMessage('You have signed up successfully!');
        setLoading(false);
      })
      .catch((error) => {
        console.error('Sign-up error: ', error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}  {/* Show error message */}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}  {/* Show success message */}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        {/* Show loading indicator when submitting */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
