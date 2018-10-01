//Initialize github class
const github=new Github;
//Initialize UI class
const ui=new UI;

// Event listner on Search user input
const searchUser=document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=>{
// Get target text
    const userText=e.target.value;
    //Check if target text is not empty
    if(userText !==''){
        github.getUser(userText)
        .then(userData=>{
        if(userData.profile.message==="Not Found"){
            //Show alert user not found
            ui.showAlert('User not found.');
            //Clear Profile too
            ui.clearProfile();
        }
        else{
            //Show user profile
            ui.showProfile(userData.profile);
            // Show user repos
            ui.showRepos(userData.repos)

            // console.log(userData);
        }
    })
    }else{
        //Clear the profile if there is no value inside input.
        ui.clearProfile();
    }

})
