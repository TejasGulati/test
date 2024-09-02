import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/students/', { name, age, email });
      navigate('/list');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };
  

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddStudent;
