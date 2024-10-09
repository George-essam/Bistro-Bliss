import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{

  // currentLocation: string = '';

  //   ngOnInit(): void {
  //   console.log('ngOnInit is called');
  //   // Get the current URL
  //   this.currentLocation = location.href;

  //   // Get all menu items
  //   const menuItem = document.querySelectorAll('a');
  //   const menuLength = menuItem.length;

  //   // Loop through each menu item and add the 'active' class to the correct link
  //   for (let i = 0; i < menuLength; i++) {
  //     if (menuItem[i].getAttribute('href') === this.currentLocation) {
  //       menuItem[i].classList.add('active');
  //     }
  //   }
  // }
}