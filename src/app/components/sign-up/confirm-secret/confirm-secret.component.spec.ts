import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSecretComponent } from './confirm-secret.component';

describe('ConfirmSecretComponent', () => {
  let component: ConfirmSecretComponent;
  let fixture: ComponentFixture<ConfirmSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
