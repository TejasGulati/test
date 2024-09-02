import { useEffect, useState } from 'react';
import axios from 'axios';

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/students/');
          setStudents(response.data);
        } catch (error) {
          console.error('Error fetching students:', error);
        }
      };
      

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListStudents;
