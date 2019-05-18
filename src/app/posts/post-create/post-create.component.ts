import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent: string;
  enteredTitle: string;
  newPost = 'NO CONTENT';

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post = {
      title: this.enteredTitle, content: this.enteredContent
    };
  }

}
