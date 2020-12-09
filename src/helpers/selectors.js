export function getAppointmentsForDay(state, day) {
  const appointments = [];
  state.days.forEach(val => { 
    if (val.name === day){
      const today = val
      today.appointments.forEach(app => {
      appointments.push(state.appointments[app])
      })
    }
  });
  return appointments;
}