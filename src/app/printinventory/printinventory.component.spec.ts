import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintinventoryComponent } from './printinventory.component';

describe('PrintinventoryComponent', () => {
  let component: PrintinventoryComponent;
  let fixture: ComponentFixture<PrintinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintinventoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
