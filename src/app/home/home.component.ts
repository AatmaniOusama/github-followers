import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ajouter(){
    this.route.navigate(['followers', '12', 'idbrahimdev'],{
      queryParams: { page: 12, type: 'Admin'}
    })
  }

}
