
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBoT_Pj7gDZl3hxvxpe3VVBPldOLH_VKUc",
      authDomain: "kwitter-app-3de07.firebaseapp.com",
      databaseURL: "https://kwitter-app-3de07-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-3de07",
      storageBucket: "kwitter-app-3de07.appspot.com",
      messagingSenderId: "961337406870",
      appId: "1:961337406870:web:7a9f19923145b87fb759b7",
      measurementId: "G-QK5BT20CMR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom() 
    { room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
   });
     localStorage.setItem("room_name", room_name); 
     window.location = "kwitter_page.html"; }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
 { console.log(name);
   localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; 
  
}

function logout() 
{ localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name");
 window.location = "index.html";
 }


