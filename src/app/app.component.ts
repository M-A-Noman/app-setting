import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-setting';
  isHome: boolean =false;
  constructor(private router: Router, ) {}
  ngOnInit(): void {
   
    

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('/setting')) {
          this.isHome=false;
        } else {
          this.isHome=true;
        }
      }
    });
  }
  onClickSetting() {
    this.isHome = !this.isHome;
    if (!this.isHome) this.router.navigate(['/setting/account']);
    else this.router.navigate(['']);
  }
}
