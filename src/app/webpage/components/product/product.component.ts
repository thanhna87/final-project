import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css','../../../css/bootstrap.min.css'],
    imports: [NavigationComponent, FooterComponent]
})
export class ProductComponent {
    

}
