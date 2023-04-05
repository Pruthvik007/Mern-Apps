import { fetch } from "../Utils/Axios";
import EmployeesActions from "../Redux/Actions/EmployeesActions";
import Validator from "../Helpers/Validator";

const EmployeeServices = () => {
  const validator = Validator();
  const employeeActions = EmployeesActions();

  const addEmployee = async (employee) => {
    return fetch("employee/", "POST", employee)
      .then((response) => {
        if (validator.isSuccess(response)) {
          employeeActions.addEmployee(response.data);
          return null;
        } else {
          return response.message;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getEmployees = async () => {
    return fetch("employee/", "GET")
      .then((response) => {
        if (validator.isSuccess(response)) {
          employeeActions.getEmployees(response.data);
          return null;
        } else {
          return response.message;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getEmployee = async (id) => {
    return fetch(`employee/${id}`, "GET")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        return "UNABLE TO GET EMPLOYEE";
      });
  };
  const deleteEmployee = async (id) => {
    return fetch(`employee/${id}`, "DELETE")
      .then((response) => {
        if (validator.isSuccess(response)) {
          employeeActions.deleteEmployee(id);
          return null;
        } else {
          return response.message;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateEmployee = async (user) => {
    return await fetch("employee/", "PUT",user)
      .then((response) => {
        if (validator.isSuccess(response)) {
          employeeActions.updateEmployee(response.data);
          return null;
        } else {
          return response.message;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const patchEmployee = async (id,user) => {
    return await fetch(`employee/${id}`, "PATCH",user)
      .then((response) => {
        if (validator.isSuccess(response)) {
          employeeActions.updateEmployee(response.data);
          return null;
        } else {
          return response.message;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return Object.freeze({
    addEmployee,
    getEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee,
    patchEmployee,
  });
};
export default EmployeeServices;