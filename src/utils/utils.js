//generating a list of secondary questions, dependent upon choices made in previous questions

const generateUserChoices = (array, value) => {
    return array.map((each) => {
      return {
        name: each[value],
        value: each.id,
      };
    });
  };

 const generateEmployeeName = (employees) => {
    return employees.map((employee) => {
      return {
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      };
    });
  };

  module.exports = {generateUserChoices, generateEmployeeName};