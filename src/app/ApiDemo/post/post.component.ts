import { Component, EventEmitter, Output } from '@angular/core';
import { IPost } from 'src/app/Interface/ipost';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   
    posts: IPost[]=[]
   
    
    @Output() childEvent = new EventEmitter()

    constructor(private postService: PostService){}

    ngOnInit(){
        this.postService.getPostsList().subscribe({
            next:(response)=>{
                 console.log(response)
                 this.posts = response
            },
            error:(reason)=>{
                 console.log(reason)
            }
        })
    }

    editRecord(postData: IPost){
         this.childEvent.emit(postData)
    }
    deleteRecord(id: number){
          if(confirm('Are you sure to delete this record')){
              this.postService.deletePostRecord(id).subscribe({
                 next:(response)=>{
                           alert('Record deleted successfully')
                 },
                 error:(reason)=>{
                      console.log(reason)
                 }
              })
          }
    }
}
