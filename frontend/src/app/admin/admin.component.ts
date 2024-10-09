import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  http = inject(HttpClient);
  items: any[] = [];
  selectedItem: any = {};
  isModalOpen = false; 
  isEdit = false;

  ngOnInit(): void {
    this.fetchMenuItems();
  }

  fetchMenuItems() {
    this.http.get('http://localhost:3000/menu')
      .subscribe((response: any) => {
        this.items = response;
        console.log(this.items);
      }, (error) => {
        console.error('Error fetching menu items:', error);
      });
  }

  addMenuItem() {
    this.http.post('http://localhost:3000/menu', this.selectedItem)
      .subscribe((response: any) => {
        this.items.push(response);
        this.closeModal();
        console.log('New item added:', response);
      }, (error) => {
        console.error('Error adding item:', error);
      });
  }

  updateMenuItem() {
    this.http.put(`http://localhost:3000/menu/${this.selectedItem._id}`, this.selectedItem)
      .subscribe((response: any) => {
        const index = this.items.findIndex(item => item._id === response._id);
        this.items[index] = response;
        this.closeModal();
        console.log('Item updated:', response);
      }, (error) => {
        console.error('Error updating item:', error);
      });
  }

  deleteMenuItem(id: string) {
    this.http.delete(`http://localhost:3000/menu/${id}`)
      .subscribe(() => {
        this.items = this.items.filter(item => item._id !== id);
        console.log('Item deleted:', id);
      }, (error) => {
        console.error('Error deleting item:', error);
      });
  }

  addItem() {
    this.selectedItem = {}; // Reset selected item
    this.isEdit = false;
    this.isModalOpen = true; // Open modal
  }

  editItem(item: any) {
    this.selectedItem = { ...item }; // Copy selected item
    this.isEdit = true;
    this.isModalOpen = true; // Open modal
  }

  saveItem() {
    if (this.isEdit) {
      this.updateMenuItem();
    } else {
      this.addMenuItem();
    }
  }

  closeModal() {
    this.isModalOpen = false; // Close modal
  }
}