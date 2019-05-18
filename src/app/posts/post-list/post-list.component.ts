import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'T1', content: 'c1'},
  //   {title: 'T2', content: 'c2'},
  //   {title: 'T3', content: 'c3'}
  // ];

  posts = [];

  constructor() { }

  ngOnInit() {
  }
}
