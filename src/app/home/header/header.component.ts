import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



changeState() {

}

  logout(){
    this.router.navigate(['/']).then(nav => {
      console.log(nav);
    }, err => {
      console.log(err);
    });
  }
}
