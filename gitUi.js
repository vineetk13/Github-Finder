class Ui{
    constructor(){
        this.output=document.querySelector('.output');
    }

    showProfile(user){
        const uinfo=user.profile;
        this.output.innerHTML = `
        <div class='wrapper'>
        <div class='left'>
            <img src='${uinfo.avatar_url}'><br/>
            <a href='${uinfo.html_url}' class='view-profile'>View profile</a>
        </div>
        <div class='right'>
            <ul id='hlist'>
                <li style='background-color:blue'>Public repos: ${uinfo.public_repos}</li>
                <li style='background-color:black'>Public gists: ${uinfo.public_gists}</li>
                <li style='background-color:green'>Followers: ${uinfo.followers}</li>
                <li style='background-color:red'>Following: ${uinfo.following}</li>
            </ul>
            <ul id='vlist'>
                <li><span class='headings'>Company:</span> ${uinfo.comapny}</li>
                <li><span class='headings'>Website/Blog:</span> ${uinfo.blog}</li>
                <li><span class='headings'>Location:</span> ${uinfo.location}</li>
                <li><span class='headings'>Member since:</span> ${uinfo.created_at}</li>
            </ul><br><br>
            
        </div>
        </div>
        `
        //console.log(user.profile.id);
    }

    showError(){
        this.checkErr();
        this.output.innerHTML="<br><br><div class='err-msg'>No users found.!</div>";
    }

    checkErr(){
        const check=document.querySelector('.err-msg');
        if(check){
            check.remove();
        }
    }

    clearProfile(){
        this.output.innerHTML='';
    }
}