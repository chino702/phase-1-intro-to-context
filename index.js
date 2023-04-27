function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employeeRecord, timeStamp) {
    let [date, hour] = timeStamp.split(' ');
  
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    });
  
    return employeeRecord;
  }
  
  function createTimeOutEvent(employeeRecord, timeStamp) {
    let [date, hour] = timeStamp.split(' ');
  
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    });
  
    return employeeRecord;
  }
  
  function hoursWorkedOnDate(employeeRecord, date) {
    let timeIn = employeeRecord.timeInEvents.find(event => event.date === date).hour;
    let timeOut = employeeRecord.timeOutEvents.find(event => event.date === date).hour;
  
    return (timeOut - timeIn) / 100;
  }
  
  function wagesEarnedOnDate(employeeRecord, date) {
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date);
  
    return hoursWorked * employeeRecord.payPerHour;
  }
  
  function allWagesFor(employeeRecord) {
    let datesWorked = employeeRecord.timeInEvents.map(event => event.date);
  
    return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employeeRecord, date), 0);
  }
  
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => totalPayroll + allWagesFor(employeeRecord), 0);
  }
  
  function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(arr) {
    return arr.map(emp => createEmployeeRecord(emp));
  }
  
  function createTimeInEvent(emp, time) {
    let [date, hour] = time.split(" ");
    emp.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    });
    return emp;
  }
  
  function createTimeOutEvent(emp, time) {
    let [date, hour] = time.split(" ");
    emp.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    });
    return emp;
  }
  
  function hoursWorkedOnDate(emp, date) {
    let timeIn = emp.timeInEvents.find(t => t.date === date).hour;
    let timeOut = emp.timeOutEvents.find(t => t.date === date).hour;
    return (timeOut - timeIn) / 100;
  }
  
  function wagesEarnedOnDate(emp, date) {
    let hours = hoursWorkedOnDate(emp, date);
    return hours * emp.payPerHour;
  }
  
  function allWagesFor(emp) {
    let dates = emp.timeInEvents.map(t => t.date);
    let wages = dates.reduce((total, date) => total + wagesEarnedOnDate(emp, date), 0);
    return wages;
  }
  
  function calculatePayroll(employees) {
    let payroll = employees.reduce((total, emp) => total + allWagesFor(emp), 0);
    return payroll;
  }
  