import "./App.css";
import React, { useState, useContext } from "react";
import Counter from "./components/Counter";
const employeeContext = React.createContext();
function App() {
  const [employee, setEmployee] = useState({
    Id: 101,
    Name: "Rana",
    Location: "Bangalore",
    Salary: 12345,
  });
  return (
    <div>
      <h2>Welcome to App Component...</h2>
      <employeeContext.Provider value={employee}>
        <Employee></Employee>
      </employeeContext.Provider>
    </div>
  );
}
function Employee() {
  let context = useContext(employeeContext);
  return (
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>
          Employee ID : <b>{context.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Name : <b>{context.Name}</b>
        </label>
      </p>
      <Salary></Salary>
    </div>
  );
}
function Salary() {
  let context = useContext(employeeContext);
  return (
    <div>
      <h2>Welcome to Salary Component...</h2>
      <p>
        <label>
          Employee ID : <b>{context.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee Salary : <b>{context.Salary}</b>
        </label>
      </p>
    </div>
  );
}
export default App;