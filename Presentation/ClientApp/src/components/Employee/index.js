import Menu from "../Menu";

const options = [
  {
    route: '/create-employee',
    label: 'Create an employee'
  },
  {
    route: '/delete-employee',
    label: 'Delete an employee'
  },
  {
    route: '/make-action',
    label: 'Make an action'
  },
  {
    route: './add-report',
    label: 'Add a report'
  }
];

const Employee = () => {
  return <Menu options={options} />
}

export default Employee;
