// JavaScript: Data Types - Objects JSON.stringify
console.clear();

const employee = {
  name: "Employee01",
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
    name: "Employee02",
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
