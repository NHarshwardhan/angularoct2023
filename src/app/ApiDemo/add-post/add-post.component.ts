import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { IPost } from 'src/app/Interface/ipost';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
   
    postForm: FormGroup = new FormGroup({})

    editStatus: boolean = false

    constructor(private postService:PostService){}

    ngOnInit(){
          this.postForm = new FormGroup({
              id: new FormControl(),
              title: new FormControl(),
              body: new FormControl()
          })
    }

    createRecord(){
        console.log(this.postForm.value)
        this.postService.CreateNewRecord(this.postForm.value).subscribe({
             next:(response)=>{
                console.log(response)
                alert('Record has created successfully');
             },
             error:(reason)=>{
                 console.log(reason)
             }
        })

    }

    callParentMethod(postData:IPost){
       this.postForm.patchValue(postData)
       // postForm = {title:'angular',body:'lorem ipsum',id:6}
       // postData = {title:'angular', body:'lorem ipsum',id:6}
       this.editStatus = true

    }
    updateRecord(){
          this.postService.updatePostRecord(this.postForm.value).subscribe({
                   next:(response)=>{
                     console.log(response)
                     alert('Record updated successfully')
                   },
                   error:(reason)=>{
                      console.log(reason)
                   }
          })
    }
}
