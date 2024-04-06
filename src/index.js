

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  let div = document.createElement('div');
  div.id = 'About';
  div.className = 'tabcontent';
  
  // create a new heading and add it to the div
  let h1 = document.createElement('h1');
  h1.textContent = 'The Goodest of the Restaurants';
  div.appendChild(h1);


  let h3 = document.createElement('h3');
  h3.textContent = 'About our Restaurant:';
  div.appendChild(h3);

  let p = document.createElement('p');
  p.className = 'border';
  p.textContent = "Our restaurant has been funded by Kamil Toboła in the 1976, in Wrocław. As an avid traveler, who's visited more than 40 countries,and has eaten and enjoyed many famous cuisines. But it was the Georgian kitchen, who he loved and loves to this day, the most,Therefore, when he returned to his hometown, Wrocław, he wanted everyone to experience the beautiful and tasty food of Georgia.";
  div.appendChild(p);

  let img = document.createElement('img');
  img.className = 'img1';
  img.src = "flag-for-georgia-svgrepo-com.svg";
  div.appendChild(img);




  // add div to the document
  document.body.appendChild(div);