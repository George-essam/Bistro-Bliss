import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FooterComponent,NavComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  http = inject(HttpClient)
  item : any[] = []
  
  fetchMenuItems() {
    this.http.get('http://localhost:3000/menu')
    .subscribe((response: any) => this.item=response)
    console.log(this.item)
  }

  ngOnInit(): void {
    this.fetchMenuItems()
  }
  // try {
    //     const response = await fetch('http://localhost:3000/api/menu'); // Adjust the URL if necessary
    //     const menuItems = await response.json();

    //     const menuGrid = document.getElementById('menu-grid');
    //     menuGrid.innerHTML = ''; // Clear any existing content

    //     menuItems.forEach(item => {
    //         const menuItem = document.createElement('div');
    //         menuItem.classList.add('menu-item');

    //         menuItem.innerHTML = `
    //             <img src="${item.imageUrl}" alt="${item.name}">
    //             <h3>${item.name}</h3>
    //             <p>$${item.price.toFixed(2)}</p>
    //             <p>${item.description}</p>
    //         `;

    //         menuGrid.appendChild(menuItem); // Add the new item to the grid
    //     });
    // } catch (error) {
    //     console.error('Error fetching menu items:', error);
    // }
}