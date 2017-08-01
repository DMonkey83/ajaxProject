let xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';


xhr.onload = function() {
  if(xhr.status !== 200){
    console.log("Error Accured");
  } else {
    let myStuff = JSON.parse(xhr.responseText);
    console.log(myStuff);
    for(let value of myStuff.presidents){
      console.log(value.first);
    }
    let myString = "";
    let count = 0;
    for(let value of myStuff.presidents){
      ++count;
      myString += count + " President was : " + value.first +" " +
      value.last +"</br>";
      document.querySelector('.placeholder')
      .innerHTML = ("<p>" + myString + "</p>");
    }
  }
};

xhr.send();
