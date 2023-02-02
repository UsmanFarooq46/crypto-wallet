import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelvePhraseComponent } from './twelve-phrase.component';

describe('TwelvePhraseComponent', () => {
  let component: TwelvePhraseComponent;
  let fixture: ComponentFixture<TwelvePhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelvePhraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwelvePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
