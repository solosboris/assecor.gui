import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { PersonsTableService } from '../../services/personstableservice';

@Component({
  selector: 'foundpersontable',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './foundpersontable.html',
  styleUrls: ['../../styles.css']
})
export class Foundpersontable implements OnInit {

  personsDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ["id", "name", "lastName", "zip", "city", "color"];

    constructor(
      private personsTableService : PersonsTableService
    ) {}
  
    ngOnInit(): void {
      this.personsDataSource = this.personsTableService.personsDataSource;
              console.info(
          'Foundpersontable.ngOnInit data ' +
            this.personsDataSource.data.length
        );
    }

}