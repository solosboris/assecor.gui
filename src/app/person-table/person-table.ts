import { Component, ViewChild, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CdkContextMenuTrigger } from '@angular/cdk/menu';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ChangeDetectionStrategy } from '@angular/core';
import { RESTService } from '../../services/restservice';
import { PersonDTO } from '../../models/persondto.model';

@Component({
  selector: 'app-persons-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
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
export class PersonTable implements OnInit, AfterViewInit {
  private restService = inject(RESTService);
  private router = inject(Router);

  @ViewChild(MatSort) sort!: MatSort;
  personsDataSource = new MatTableDataSource<PersonDTO>();
  displayedColumns: string[] = ["id", "name", "lastName", "zip", "city", "color"];
  error: string | null = null;
  isToShowByColor = false;

  selectedRow: PersonDTO = new PersonDTO();

  ngAfterViewInit() {
    this.personsDataSource.sort = this.sort;
    console.info(
        'PersonTable.ngAfterViewInit sort set to elements ' +
          this.personsDataSource.data.length
      );
  }

  onMenuOpen(row: PersonDTO) {
    this.selectedRow = row;
    console.info(
      'PersonTable.onMenuOpen id ' + this.selectedRow.id +
      ' color ' + this.selectedRow.color
    );
    this.restService
      .personsByColorCnt(this.selectedRow.color)
      .subscribe({
        next: (cnt) => {
          this.isToShowByColor = !isNaN(cnt) && (cnt > 1);
          console.info(
            'PersonTable.onMenuOpen isToShowByColor ' + this.isToShowByColor
          );
        },
        error: () => {
          this.error = "Failed to ask for isToShowByColor";
          console.error('PersonTable.onMenuOpen error ', this.error);
        }
      });
  }

  showPerson() {
    const navigaeToPerson = 'person/' + this.selectedRow.id;
    console.info('Contextmenu.showPerson to ' + navigaeToPerson);
    this.router.navigate([navigaeToPerson]);
  }

  showByColor() {
    const navigaeToPersonsByColor = 'color/' + this.selectedRow.color;
    console.info(
      'Contextmenu.showByColor to ' + navigaeToPersonsByColor
    );
    this.router.navigate([navigaeToPersonsByColor]);
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
