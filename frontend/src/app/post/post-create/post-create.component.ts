import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public postservice: PostServiceService){}

 
  onaddpost(postform:NgForm){
    
    if(postform.invalid){
      alert('Invalid')
      return
    }
    alert(postform.value.enteredID+':'+postform.value.enteredAuthor)

    this.postservice.addpost_services(postform.value.enteredID,postform.value.enteredAuthor,postform.value.enteredPostTitle,postform.value.enteredPostDescription)
    postform.resetForm()
  }
}
