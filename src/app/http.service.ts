import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UsersInter } from './list/list.component';
import { ListComponent } from './list/list.component';
import { SinglePost, AccountComponent } from './account/account.component';
import { UserPostsComponent } from './user-posts/user-posts.component';


//QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa Access-token
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa'
    })
  };
  usr: userNew;
  postNew : Post;
  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getUsers() {
    return this.http.get('https://gorest.co.in/public-api/users?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa');
  }

  putUser(user: UsersInter, forUpdate: ListComponent) {
    console.log('https://gorest.co.in/public-api/users/'
      + user.id
      + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa');
    return this.http.patch('https://gorest.co.in/public-api/users/'
      + user.id
      + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      user).subscribe(
        response => {
          console.log("recievd ok response");
          forUpdate.ngOnInit();

        },
        error => { console.log(error) }
      );
  }

  addUser(user: UsersInter, forUpdate: ListComponent) {
    this.usr = {
      address: user.address,
      dob: "1991-04-30",
      email: user.email,
      first_name: user.first_name,
      gender: "female",
      last_name: user.last_name,
      phone: user.phone,
      status: "inactive",
      website: "http://www.cartwright.info/et-aut-dolor-officiis-vero-aliquid-ipsam.html",
    }
    return this.http.post('https://gorest.co.in/public-api/users?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      this.usr, this.httpOptions).subscribe(
        response => {
          console.log("recievd ok response", response);
          forUpdate.ngOnInit();
        },
        error => { console.log(error) }
      );

  }

  delUser(user: UsersInter, forUpdate: ListComponent) {
    console.log("4", user.id)
    return this.http.delete('https://gorest.co.in/public-api/users/'
      + user.id
      + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa').subscribe(
        response => {
          console.log("recievd ok response");
          forUpdate.ngOnInit();

        },
        error => { console.log(error) }
      );
  }

  getUser(id: String) {
    return this.http.get('https://gorest.co.in/public-api/users/' + id + '?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa')
  }

  getPosts(id: String) {
    console.log("IDDDD " + id);
    return this.http.get('https://gorest.co.in/public-api/posts?user_id=' + id + '&access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa')
  }

  getAllPosts() {
    return this.http.get('https://gorest.co.in/public-api/posts?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa')
  }

  addPost(user_id: String, post: SinglePost, forUpdate: AccountComponent) {
    this.postNew = {
      user_id: Number(user_id),
      title: post.title,
      body: post.body,
    }

    return this.http.post('https://gorest.co.in/public-api/posts?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      this.postNew, this.httpOptions).subscribe(
        response => {
          console.log("recievd ok response to post", response);
          forUpdate.ngOnInit();
        },
        error => { console.log(error) }
      );
  }

  addCreatePost(user_id: String, post: SinglePost, forUpdate: UserPostsComponent) {
    this.postNew = {
      user_id: Number(user_id),
      title: post.title,
      body: post.body,
    }

    return this.http.post('https://gorest.co.in/public-api/posts?access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa',
      this.postNew, this.httpOptions).subscribe(
        response => {
          console.log("recievd ok response to post", response);
          forUpdate.ngOnInit();
        },
        error => { console.log(error) }
      );
  }

  getComments(postId: String, forUpdate: UserPostsComponent){
    console.log("IDDDD " + postId);
    return this.http.get('https://gorest.co.in/public-api/comments?post_id=' + postId + '&access-token=QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa');
  }

}

export interface Post{
  user_id: Number,
  title: String,
  body: String,
}

export interface userNew {
  address: String,
  dob: String,
  email: String,
  first_name: String,
  gender: String,
  last_name: String,
  phone: String,
  status: String,
  website: String,
}
