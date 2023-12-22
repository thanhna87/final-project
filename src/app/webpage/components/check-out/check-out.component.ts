import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";

@Component({
    selector: 'app-check-out',
    standalone: true,
    templateUrl: './check-out.component.html',
    styleUrl: './check-out.component.css',
    imports: [NavigationComponent, FooterComponent]
})
export class CheckOutComponent {

}
