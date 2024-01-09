import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private postsdisplay :{_id:string,id:string,author:string,postTitle: string, description:string, __v:string}[]= [];
  private updatedpostsdisplay = new Subject<{_id:string,id:string,author:string,postTitle: string, description:string, __v:string}[]>();

  constructor(private http: HttpClient) { }

  addpost_services(pid: string, pauthor: string, ppostTitle:string, pdescription:string ){

    this.http.post<{message:String,post:any}>('https://localhost:3000/api/posts',{id:pid,author:pauthor,postTitle: ppostTitle, description:pdescription})
    .subscribe((thepost)=>
    {
      this.postsdisplay.push(thepost.post);
      this.updatedpostsdisplay.next([...this.postsdisplay]);
    })

  }

  getpost_service(){
    this.http.get<{message:string,posts:any}>('https://localhost:3000/api/posts')
    .subscribe((thepost)=>
    {
      this.postsdisplay=thepost.posts
      this.updatedpostsdisplay.next([...this.postsdisplay])
    })
  }

  deletepost_service(postid:string)
  {
    this.http.delete('https://localhost:3000/api/posts/'+postid)
    .subscribe(()=>
    {
      const updatedpostsdeleted=this.postsdisplay.filter(post=>post._id!==postid);
      this.postsdisplay=updatedpostsdeleted;
      this.updatedpostsdisplay.next([...this.postsdisplay]);
    }
    )
  }

  getUpdatedListener()
  {
    return this.updatedpostsdisplay.asObservable();
  }
}
