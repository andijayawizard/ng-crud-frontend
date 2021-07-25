import { Component, OnInit } from '@angular/core';
import { Siswa } from 'src/app/models/siswa.model';
import { SiswaService } from 'src/app/services/siswa.service';

@Component({
  selector: 'app-siswa-add',
  templateUrl: './siswa-add.component.html',
  styleUrls: ['./siswa-add.component.css']
})
export class SiswaAddComponent implements OnInit {
  siswa: Siswa = {
    nama: '',
    alamat: '',
    isActive: false
  };
  submitted = false;

  constructor(private siswaService: SiswaService) { }

  ngOnInit(): void {
  }
  saveSiswa(): void {
    const data = {
      nama: this.siswa.nama,
      alamat: this.siswa.alamat,
    };

    this.siswaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newSiswa(): void {
    this.submitted = false;
    this.siswa = {
      nama: '',
      alamat: '',
      isActive: false
    };
  }

}
