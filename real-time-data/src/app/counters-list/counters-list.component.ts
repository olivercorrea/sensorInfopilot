import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-counters-list',
  templateUrl: './counters-list.component.html',
  styleUrls: ['./counters-list.component.css']
})
export class CountersListComponent implements OnInit {
  counters: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllCounters();
  }

  getAllCounters(): void {
    this.apiService.getCounters().subscribe(
      (data) => {
        this.counters = data;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
