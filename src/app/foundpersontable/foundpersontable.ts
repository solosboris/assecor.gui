import { Component, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { PersonsTableService } from '../../services/personstableservice';
import { PersonDTO } from '../../models/persondto.model';

@Component({
  selector: 'app-foundperson-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './foundpersontable.html',
  styleUrls: ['../../styles.css']
})
export class Foundpersontable implements OnInit, AfterViewInit  {
  private personsTableService = inject(PersonsTableService);


  @ViewChild(MatSort) sort!: MatSort;
  personsDataSource = new MatTableDataSource<PersonDTO>();
  displayedColumns: string[] = ["id", "name", "lastName", "zip", "city", "color"];

    ngAfterViewInit() {
      this.personsDataSource.sort = this.sort;
      console.info(
          'Foundpersontable.ngAfterViewInit sort set to elements ' +
            this.personsDataSource.data.length
        );
    }

    ngOnInit(): void {
      this.personsDataSource = this.personsTableService.personsDataSource;
      console.info(
          'Foundpersontable.ngOnInit data ' +
            this.personsDataSource.data.length
        );
    }

}
