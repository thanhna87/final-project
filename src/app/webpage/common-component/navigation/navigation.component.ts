import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['../../../css/bootstrap.min.css', './navigation.component.css'],
})
export class NavigationComponent {
  constructor(private router: Router) {}
  logOut() {
    //xoa token
    localStorage.removeItem('token');
    //redirect Login
    this.router.navigate(['/login']);
  }
}
