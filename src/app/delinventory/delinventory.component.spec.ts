import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinventoryComponent } from './delinventory.component';

describe('DelinventoryComponent', () => {
  let component: DelinventoryComponent;
  let fixture: ComponentFixture<DelinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelinventoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
