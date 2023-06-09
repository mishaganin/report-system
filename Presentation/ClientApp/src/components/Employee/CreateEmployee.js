import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {employeeModel} from "../../store/models";
import {addEmployee} from "../../store/actions/employee";

const url = "employee/create-employee";

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [subordinateIds, setSubordinateIds] = useState('');
  const [nameError, setNameError] = useState(false);
  const [positionError, setPositionError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError(name === '');
    setPositionError(position === '');

    if (name && position) {
      employeeModel.Name = name;
      employeeModel.Position = position;
      employeeModel.SubordinateIds = subordinateIds.split(' ');
      if (employeeModel.SubordinateIds[0] === '') {
        employeeModel.SubordinateIds = [];
      }

      console.log('Hey', employeeModel.SubordinateIds);

      console.log(url);
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
          dispatch(addEmployee(JSON.parse(data)));
        });

      setName('');
      setPosition('');
      setSubordinateIds('');
    }
  }
  return (
    <div>
      <form autoComplete={'off'} onSubmit={handleSubmit}>
        <h2>Add employee</h2>
        <TextField
          label={'Enter name'}
          onChange={e => setName(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={name}
          error={nameError}
        />
        <TextField
          label={'Enter position'}
          onChange={e => setPosition(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={position}
          error={positionError}
        />
        <TextField
          label={'Enter subordinate IDs'}
          onChange={e => setSubordinateIds(e.target.value)}
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={subordinateIds}
        />
        <Button variant={'outlined'} color={'secondary'} margin={'dense'} type={'submit'}>Add</Button>
      </form>
    </div>
  )
}

export default CreateEmployee;
