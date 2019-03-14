const  allmails= require ("./models/Mails");

function filteredArray(arr, key, value) {
    const newArray = [];
    for(i=0, l=arr.length; i<l; i++) {
      if(arr[i][key] === value) {
        newArray.push(arr[i]);
      }
    }
   return newArray;
  }

  const all=filteredArray(allmails,"status","unread");

  console.log(all)