function isToday(milliseconds) {
    const date = new Date(milliseconds);
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }
  function formatDateTime(milliseconds) {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }
  
  function getTimeAgoOrFuture(milliseconds) {
    const diff = milliseconds - Date.now();
    const seconds = Math.abs(Math.floor(diff / 1000));
    const minutes = Math.abs(Math.floor(seconds / 60));
    const hours = Math.abs(Math.floor(minutes / 60));
    const days = Math.abs(Math.floor(hours / 24));
  
    if (diff < 0) {
      return `${days} дней, ${hours % 24} часов, ${minutes % 60} минут, ${seconds % 60} секунд прошло`;
    } else {
      return `${days} дней, ${hours % 24} часов, ${minutes % 60} минут, ${seconds % 60} секунд в будущем`;
    }
  }
  
  
  const milliseconds = Date.now() + 86400000; 
  
  console.log(isToday(milliseconds)); 
  
  console.log(formatDateTime(milliseconds)); 
  
  console.log(getTimeAgoOrFuture(milliseconds));
  