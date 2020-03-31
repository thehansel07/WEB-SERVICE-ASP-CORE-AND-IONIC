import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarEstudiantePage } from './agregar-estudiante.page';

describe('AgregarEstudiantePage', () => {
  let component: AgregarEstudiantePage;
  let fixture: ComponentFixture<AgregarEstudiantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEstudiantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
