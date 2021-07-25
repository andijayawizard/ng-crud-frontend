import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiswaAddComponent } from './siswa-add.component';

describe('SiswaAddComponent', () => {
  let component: SiswaAddComponent;
  let fixture: ComponentFixture<SiswaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiswaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiswaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
