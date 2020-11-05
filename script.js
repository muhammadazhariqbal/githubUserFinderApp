function getUserInput() {
    document.getElementById("loading-button").style.display = "block";
    document.getElementById("submit-btn").style.display = "none";
    var userName = document.getElementById("userID").value;
    var fetchingData = function fetchingGithubAPI() {
        console.log(userName)
        fetch("https://api.github.com/users/" + userName)
            .then(function (resolve) {
                return resolve.json();
            })
            .then(function (Userdata) {
                 document.getElementById("userimage").innerHTML= "<img src="+Userdata.avatar_url+"/>";
                 document.getElementById("userName").innerHTML=Userdata.name;
                 document.getElementById("bio").innerHTML=Userdata.bio;
                 document.getElementById("followers").innerHTML=Userdata.followers;
                 document.getElementById("repo").innerHTML=Userdata.following;
                 document.getElementById("following").innerHTML=Userdata.public_repos;
                 document.getElementById("location").innerHTML=Userdata.location;
                 console.log(Userdata.url)
                
            })
            .catch(function(error){
                
                console.log(error)
                
            })
            
        document.getElementById("movedown").style.display = "block";
        document.getElementById("loading-button").style.display = "none";
        document.getElementById("submit-btn").style.display = "block";
        userName = document.getElementById("userID").value;
        document.getElementById("userURL").innerHTML="https://github.com/"+userName;


    }
    setTimeout(fetchingData, 4000)

}