import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-newsdialog',
  templateUrl: './newsdialog.component.html',
  styleUrls: ['./newsdialog.component.css']
})
export class NewsdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
  ngOnInit() {
  }

}
