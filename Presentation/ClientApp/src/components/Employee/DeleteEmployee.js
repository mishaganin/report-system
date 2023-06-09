import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {deleteEmployeeModel} from "../../store/models";
import {deleteEmployee} from "../../store/actions/employee";

const url = "employee/delete-employee";

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmployeeIdError(employeeId === '');

    if (employeeId) {
      deleteEmployeeModel.EmployeeId = employeeId;
      console.log(employeeId);
      console.log(url);

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteEmployeeModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
          dispatch(deleteEmployee(JSON.parse(data)));
        });

      setEmployeeId('');
    }
  }
  return (
    <div>
      <form autoComplete={'off'} onSubmit={handleSubmit}>
        <h2>Delete employee</h2>
        <TextField
          label={'Enter employeeId'}
          onChange={e => setEmployeeId(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={employeeId}
          error={employeeIdError}
        />
        <Button variant={'outlined'} color={'secondary'} margin={'dense'} type={'submit'}>Delete</Button>
      </form>
    </div>
  )
}

export default DeleteEmployee;
