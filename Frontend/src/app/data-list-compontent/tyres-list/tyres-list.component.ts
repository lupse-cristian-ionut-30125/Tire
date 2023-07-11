import { Component, OnInit } from '@angular/core';
import { TyreCondition } from 'src/app/models/tyrecondition.model';

@Component({
  selector: 'app-tyres-list',
  templateUrl: './tyres-list.component.html',
  styleUrls: ['./tyres-list.component.css']
})

export class TyresListComponent implements OnInit {


tyres: TyreCondition[] = [ 
];
constructor(){}

ngOnInit(): void {
}


}
