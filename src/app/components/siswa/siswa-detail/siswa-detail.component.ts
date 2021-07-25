import { Component, OnInit } from '@angular/core';
import { SiswaService } from 'src/app/services/siswa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Siswa } from 'src/app/models/siswa.model';

@Component({
  selector: 'app-siswa-detail',
  templateUrl: './siswa-detail.component.html',
  styleUrls: ['./siswa-detail.component.css']
})
export class SiswaDetailComponent implements OnInit {
  currentSiswa: Siswa = {
    nama: '',
    alamat: '',
    isActive: false
  };
  message = '';

  constructor(
    private siswaService: SiswaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.params.id);
  }
  getTutorial(id: string): void {
    this.siswaService.get(id)
      .subscribe(
        data => {
          this.currentSiswa = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      nama: this.currentSiswa.nama,
      alamat: this.currentSiswa.alamat,
      isActive: status
    };

    this.message = '';

    this.siswaService.update(this.currentSiswa.id, data)
      .subscribe(
        response => {
          this.currentSiswa.isActive = status;
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.message = '';

    this.siswaService.update(this.currentSiswa.id, this.currentSiswa)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.siswaService.delete(this.currentSiswa.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }

}
