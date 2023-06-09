import Home from "./components/Home";
import Employee from "./components/Employee";
import Account from "./components/Account";
import Login from "./components/Authorization/Login";
import Registration from "./components/Authorization/Registration";
import CreateEmployee from "./components/Employee/CreateEmployee";
import MakeAction from "./components/Employee/MakeAction";
import CreateAccount from "./components/Account/CreateAccount";
import MessageSource from "./components/MessageSource";
import CreateMessageSource from "./components/MessageSource/CreateMessageSource";
import SendMessage from "./components/MessageSource/SendMessage";
import AddReport from "./components/Employee/AddReport";
import DeleteEmployee from "./components/Employee/DeleteEmployee";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Registration/>
  },
  {
    path: '/employee',
    element: <Employee/>
  },
  {
    path: '/create-employee',
    element: <CreateEmployee />
  },
  {
    path: '/delete-employee',
    element: <DeleteEmployee />
  },
  {
    path: '/make-action',
    element: <MakeAction />
  },
  {
    path: '/add-report',
    element: <AddReport />
  },
  {
    path: '/message-source',
    element: <MessageSource />
  },
  {
    path: '/create-message-source',
    element: <CreateMessageSource />
  },
  {
    path: '/send-message',
    element: <SendMessage />
  }
];

export default AppRoutes;
