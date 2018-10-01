class Github{
    constructor(){
        this.client_id='64acf1a5c91517f59248';
        this.client_secret='4e0624e68969ab3d6170dae6647d332a68ebb53c';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();
        const repos=await reposResponse.json();
        
        return {
            profile,
            repos
        }
        
    }
}