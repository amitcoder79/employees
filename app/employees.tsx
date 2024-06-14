'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';

interface Address {
  address: string
}
interface Employee {
  id: string
  firstName: string;
  lastName: string;
  age: string;
  maidenName: string;
  address: Address;
}


export default function Employees() {

  const [employees, setEmployees] = useState<Employee[]>([]);


  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      console.log(response.data.users)
      setEmployees(response.data.users);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Employee List</h2>
          {/* Add additional buttons or actions here */}
        </div>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">First Name</th>
                  <th className="px-4 py-3">Last Name</th>
                  <th className="px-4 py-3">Age</th>
                  <th className="px-4 py-3">Maiden Name</th>
                  <th className="px-4 py-3">Address</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 text-sm">{employee.firstName}</td>
                    <td className="px-4 py-3 text-sm">{employee.lastName}</td>
                    <td className="px-4 py-3 text-sm">{employee.age}</td>
                    <td className="px-4 py-3 text-sm">{employee.maidenName}</td>
                    <td className="px-4 py-3 text-sm">{employee.address.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
