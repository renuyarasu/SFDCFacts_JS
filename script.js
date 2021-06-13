// JavaScript: Loops - For Loop

// of keyword using Object
const student = {
    name: "VedaGna",
    age: 22,
    fee: undefined,
    dateAbsent: [25, 26, 27],
    address: {
      street: "HMT Hills",
      pincode: 500072,
      city: "Hyderabd",
    },
  };
  
  for (let prop in student) {
    console.log(`$(prop): ${student[prop]}`);
  }
  