var firebaseConfig = {
  apiKey: "AIzaSyAyqlKT4GZ4tUg2JBPmVnsIDx2VSDRHhFs",
  authDomain: "project-94-26f5d.firebaseapp.com",
  databaseURL: "https://project-94-26f5d-default-rtdb.firebaseio.com",
  projectId: "project-94-26f5d",
  storageBucket: "project-94-26f5d.appspot.com",
  messagingSenderId: "316159604000",
  appId: "1:316159604000:web:21e85adbde4607df7a5345"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }

  function getData() 

  {firebase.database().ref("/").on('value',
function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>" ;
            document.getElementById("output").innerHTML += row;
//End code
});});}
getData();


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
