const profile=document.getElementById('profile');
const latestRepos=document.getElementById('latest-repos');
const alert=document.getElementById('alertbox');

class UI{

    //Show user profile details
    showProfile(userProfile){
        profile.innerHTML=`
        <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                <img src="${userProfile.avatar_url}" class="img-fluid mb-2">
                <a href="${userProfile.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary m-1">Public Repos ${userProfile.public_repos}</span>
                    <span class="badge badge-secondary m-1">Public Gists ${userProfile.public_gists}</span>
                    <span class="badge badge-success m-1">Followers ${userProfile.followers}</span>
                    <span class="badge badge-info m-1">Following ${userProfile.following}</span>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Company</strong>: ${userProfile.company}</li>
                        <li class="list-group-item"><strong>Website/blog</strong>: ${userProfile.blog}</li>
                        <li class="list-group-item"><strong>Location</strong>: ${userProfile.location}</li>
                        <li class="list-group-item member"><strong>Member since</strong>: ${userProfile.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    }

    //Show user repos details
    showRepos(userRepos){
        let output='';

        userRepos.forEach((repo)=>{
            output+=`
            <div class="card card-body">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary m-1">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary m-1">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success m-1">Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>`;
        });
        
        latestRepos.innerHTML=`
        <h4 class="m-3">Latest Repos</h4>
        ${output}
        `;
    }

    //Clean user profile and repo details
    clearProfile(){
        profile.innerHTML='';
        latestRepos.innerHTML='';
    }

    // Show alert message on error
    showAlert(message){
        alert.className='alert alert-danger container';
        alert.innerHTML=message;
        alert.style.display="block";
        setTimeout(()=>{alert.style.display="none";},1700)
    }

}