import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-boards',
  templateUrl: './route-boards.component.html',
  styleUrls: ['./route-boards.component.scss']
})
export class RouteBoardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleResponse() {
    const response = document.querySelector('.response');
    if (response) {
      response.classList.toggle('hidden');
    }
  }

}
