import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  images = [
    {src:'../../../../assets/img/1.jpg'},
    {src:'../../../../assets/img/2.jpg'},
    {src:'../../../../assets/img/3.jpg'},
    {src:'../../../../assets/img/4.jpg'},
    {src:'../../../../assets/img/5.jpg'},
    {src:'../../../../assets/img/6.jpg'},
    {src:'../../../../assets/img/7.jpg'},
    {src:'../../../../assets/img/8.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  adjustDivSize(event: any) {
    const imgElement = event.target;
    const imgWidth = imgElement.width;
    const imgHeight = imgElement.height;

    // 이미지의 크기에 맞게 div 크기 조정
    imgElement.parentElement.style.width = imgWidth + 'px';
    imgElement.parentElement.style.height = imgHeight + 'px';
  }

}
