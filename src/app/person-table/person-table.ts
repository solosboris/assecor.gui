import { Component, ElementRef, ViewChild, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CdkContextMenuTrigger } from '@angular/cdk/menu';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy } from '@angular/core';
import { RESTService } from '../../services/restservice';

@Component({
  selector: 'persons-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule,
    CdkContextMenuTrigger,
    CdkMenuModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './person-table.html',
  styleUrls: ['../../styles.css']
})
export class PersonTable implements OnInit {

  personsDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ["id", "name", "lastName", "zip", "city", "color"];
  error: string | null = null;

  constructor(
    private restService: RESTService,
    private router: Router
  ) {}

  selectedRow: any = null;

  onMenuOpen(row: any) {
    this.selectedRow = row;
  }
  
  showPerson() {
    const navigaeToPerson = 'person/' + this.selectedRow.id;
    console.info('Contextmenu.showPerson to ' + navigaeToPerson);
    this.router.navigate([navigaeToPerson]);
  }

  ngOnInit(): void {
    this.restService.allPersons().subscribe({
      next: (dto) => {
        this.personsDataSource.data = dto.dtos;
        console.info(
          'PersonTable.ngOnInit data ' + this.personsDataSource.data.length
        );
      },
      error: () => {
        this.error = "Failed to load all persons";
        console.error('PersonTable.ngOnInit error ', this.error);
      }
    });
  }

}