import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./webpage/common-component/navigation/navigation.component";
import { HomeComponent } from "./webpage/components/home/home.component";
import { FooterComponent } from "./webpage/common-component/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterModule, RouterOutlet, NavigationComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'final-project-thanhnh';
}
