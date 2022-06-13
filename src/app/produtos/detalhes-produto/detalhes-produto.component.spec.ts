import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesProdutooComponent } from './detalhes-produto.component';



describe('DetalhesProdutooComponent', () => {
  let component: DetalhesProdutooComponent;
  let fixture: ComponentFixture<DetalhesProdutooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesProdutooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesProdutooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
