import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', '../../../css/bootstrap.min.css'],
    imports: [NavigationComponent, FooterComponent]
})
export class HomeComponent {

    constructor(private router:Router){
        console.log(localStorage.getItem('token'))
        if(localStorage.getItem('token') === '' || localStorage.getItem('token') === null){
            this.router.navigate(['/login']) //chuyen sang Home khi da co token
          }
    }

ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
}

}
