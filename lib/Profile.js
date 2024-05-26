import axios from "axios";

class Profile {
  constructor(username) {
    this.username = username;
    this.url = `https://www.instagram.com/${username}`;
    this.bio = "";
    this.followers = 0;
    this.following = 0;
    this.totalPosts = 0;
    this.posts = [];
    this.profilePicThumb = "";
    this.profilePicHD = "";
  }
  async getData() {
    if (!this.username) return Promise.reject("Username can't be empty");
    const page = await fetch(this.url, {
      mode: "no-cors",
    });
    // if()return Promise
    console.log(page);
    return page;
  }
}

export default Profile;
