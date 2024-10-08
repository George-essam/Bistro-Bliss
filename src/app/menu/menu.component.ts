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
}