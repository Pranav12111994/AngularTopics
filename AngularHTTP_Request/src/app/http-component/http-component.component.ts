import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css'],
  imports: [CommonModule]
})
export class HttpComponentComponent implements OnInit{
  constructor(private http: HttpClient) { }
  receivedPosts: any[] = [];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response: any) => {
      console.log(response);
      this.receivedPosts = response;
    }, (error) => {
      console.error('Error fetching posts:', error);  
    });
  }
}
