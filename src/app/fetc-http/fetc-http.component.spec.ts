import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetcHttpComponent } from './fetc-http.component';

describe('FetcHttpComponent', () => {
  let component: FetcHttpComponent;
  let fixture: ComponentFixture<FetcHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetcHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetcHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
