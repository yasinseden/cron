import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSharedComponent } from './services-shared.component';

describe('ServicesSharedComponent', () => {
  let component: ServicesSharedComponent;
  let fixture: ComponentFixture<ServicesSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
