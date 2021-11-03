import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlusComponent } from './detail-plus.component';

describe('DetailPlusComponent', () => {
  let component: DetailPlusComponent;
  let fixture: ComponentFixture<DetailPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
