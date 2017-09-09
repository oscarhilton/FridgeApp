export default (update) => {
  var updateDate = new Date(update);
  var currentDate = new Date();
  var seconds = (currentDate.getTime() - updateDate.getTime()) / 1000;
  var minutes = Math.floor(seconds / 60);
  var hour = Math.floor(minutes / 60);
  if(seconds < 10){
    return 'a moment ago'
  } else if(seconds < 60){
    return `${seconds} seconds ago`
  } else if(seconds < 120){
    return `${minutes} minute ago`
  } else if (seconds > 120 && seconds < 3600) {
    return `${minutes} minutes ago`
  } else if (seconds > 3600) {
    return `${hour} hours ago`
  }
}
