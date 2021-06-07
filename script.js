// JavaScript: Data Types - Objects Template Literals
console.clear();

const employee = {
  name: "Anji Kota",
  id: 5,
  inOffice: true,
  leaveDates: [5, 6, 7],
  address: {
    location: "HMT Hills",
    street: "3rd street",
    pincode: "500072",
    citi: "Hyderabad",
  },
};

const employees = [
  employee,
  {
    name: "Renuka Prasad",
    id: 15,
    inOffice: false,
    leaveDates: [30, 31],
    address: {
      location: "Jubilee Hills",
      street: "1st street",
      pincode: "500082",
      citi: "Hyderabad",
    },
  },
];

console.log("Employees: " + JSON.stringify(employees));

// String Concatenation and Template Literals
console.log(`My Name is ${employee.name} and my ID ${employee.id}`);
