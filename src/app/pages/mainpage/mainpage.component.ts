import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  filmIcon = faFilm;
  constructor() { }

  ngOnInit(): void {
  }

}
