class Gitapi{
    constructor(){
        this.client_id = '81f64b75eab4190a2abf';
        this.client_secret = '368f4267bcfd5e48401389bc43ce00d64914318c';
    }
    async get(user){
        const u=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await u.json();
        return {profile}
    }
}