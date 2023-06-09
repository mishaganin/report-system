import React, {useState} from 'react';
import { TextField, FormControl, Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {addReportModel} from "../../store/models";
import {addReport} from "../../store/actions/employee";

const url = "employee/add-report";

const AddReport = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmployeeIdError(employeeId === '');

    if (employeeId) {
      addReportModel.EmployeeId = employeeId;

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addReportModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
          dispatch(addReport(JSON.parse(data)));
        });

      setEmployeeId('');
    }
  }
  return (
    <div>
      <form autoComplete={'off'} onSubmit={handleSubmit}>
        <h2>Add report</h2>
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
        <Button variant={'outlined'} color={'secondary'} margin={'dense'} type={'submit'}>Add</Button>
      </form>
    </div>
  )
}

export default AddReport;
