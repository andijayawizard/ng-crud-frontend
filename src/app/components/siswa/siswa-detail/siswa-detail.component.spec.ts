import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiswaDetailComponent } from './siswa-detail.component';

describe('SiswaDetailComponent', () => {
  let component: SiswaDetailComponent;
  let fixture: ComponentFixture<SiswaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiswaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiswaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
