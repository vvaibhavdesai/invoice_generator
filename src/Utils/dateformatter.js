export  function formatDate(date){
    const newDate = new Date(date).toLocaleDateString()
    const newTime = new Date(date).toLocaleTimeString()
    return `${newDate} ${newTime}`
  }