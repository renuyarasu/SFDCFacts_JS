// JavaScript: Conditional Statement - Switch Case - WorkDay/WeekEnd

const dayOfWeek = 8;
switch (dayOfWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Workday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("invalid");
    break;
}
