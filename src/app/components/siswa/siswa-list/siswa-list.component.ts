import { Component, OnInit } from '@angular/core';
import { Siswa } from 'src/app/models/siswa.model';
import { SiswaService } from 'src/app/services/siswa.service';

@Component({
  selector: 'app-siswa-list',
  templateUrl: './siswa-list.component.html',
  styleUrls: ['./siswa-list.component.css']
})
export class SiswaListComponent implements OnInit {
  siswa?: Siswa[];
  currentSiswa?: Siswa;
  currentIndex = -1;
  nama = '';

  constructor(private siswaService: SiswaService) { }

  ngOnInit(): void {
    this.retrieveSiswa();
  }
  retrieveSiswa(): void {
    this.siswaService.getAll()
      .subscribe(
        data => {
          this.siswa = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveSiswa();
    this.currentSiswa = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(siswa: Siswa, index: number): void {
    this.currentSiswa = siswa;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.siswaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentSiswa = undefined;
    this.currentIndex = -1;

    this.siswaService.findByTitle(this.nama)
      .subscribe(
        data => {
          this.siswa = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
