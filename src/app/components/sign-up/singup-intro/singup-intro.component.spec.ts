import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupIntroComponent } from './singup-intro.component';

describe('SingupIntroComponent', () => {
  let component: SingupIntroComponent;
  let fixture: ComponentFixture<SingupIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
