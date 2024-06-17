// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

interface Product {
  id: number;
  name: string;
  date: string;
  venue: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Summer Internship Fair 2024',
      date:'June 20, 2024',
      venue:'Main Auditorium',
      description: 'Meet with top companies and explore exciting internship opportunities. Bring multiple copies of your resume and dress professionally.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwezoR4KVYVofwR2jwom3S6nCCIxIMcjVLQ&s'
    },
    {
      id: 2,
      name: 'Annual Cultural Fest',
      date:'July 15-17, 2024',
      venue:'Campus Grounds',
      description: 'Join us for three days of music, dance, drama, and fun activities. Register your group performance at the Student Activities Office by June 30.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxMs1PX2n1wIk47RWuW1qtRTuWZ3egsKI3A&s'
    },
    {
      id: 3,
      name: 'Workshop on AI and Machine Learning',
      date:'June 25, 2024',
      venue:'Room 204, IT Park',
      description: 'Learn the basics and advancements in AI and Machine Learning. Limited seats available. Sign up in advance at the Computer Science Department.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBS0BV9rQlYmT1lxdpO6ohL9kBmAoIb6LCA&s'
    },
    {
      id: 4,
      name: 'Blood Donation Camp',
      date:'July 1, 2024',
      venue:'Health Center',
      description: 'Donate blood and save lives. All donors will receive a free health check-up and refreshments. Register at the Health Center by June 25.',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP._hl8rSHWpe3ZRFNt-O7ayAHaEL&pid=Api&P=0&h=180'
    },
    {
      id: 5,
      name: 'Student Council Elections',
      date:' June 28, 2024',
      venue:'Student Union Office',
      description: 'Cast your vote for the new student council. Candidate speeches will be held on June 26 in the Main Auditorium.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Epu6MSBLPnl3DYwv6bPmzIGAx46cPqpy1w&s'
    },
    {
      id: 6, 
      name: 'Art Exhibition', 
      date: 'October 20, 2024', 
      venue: 'Art Gallery', 
      description: 'See works from our talented students and local artists.', 
      imageUrl:'data:image/jpeg;base64,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'
    },
    {
      id: 7, 
      name: 'Sports Day', 
      date: 'September 5, 2024', 
      venue: 'Sports Complex', 
      description: 'Participate in various sports events and cheer for your favorite teams.', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYNxutDn4Fh1uePHS4TnJtOQBvYkxvbhKXQ&s'
    }
   ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert(`${product.name} has been added to your reminder`);
  }
}
