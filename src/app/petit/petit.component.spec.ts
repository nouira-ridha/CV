import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitComponent } from './petit.component';

describe('PetitComponent', () => {
  let component: PetitComponent;
  let fixture: ComponentFixture<PetitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
