//Init
const github = new Gitapi;
const ui = new Ui;

const user = document.querySelector('.user');

//Add event listener for form
user.addEventListener('keyup',getUser);

function getUser(e){
    //console.log(e.target.value);
    const username = e.target.value;
    if(username != ''){
        github.get(username).then((data) => {
            if(data.profile.message == 'Not Found'){
                ui.showError();
            }
            else{
                ui.showProfile(data);
            }
        });
    }
    else{
        ui.clearProfile();
    }
}