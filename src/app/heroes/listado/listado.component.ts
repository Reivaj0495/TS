import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan', 'Hulk', 'IronMan', 'Capitan America', 'Thor'];
  heroeBorrado: string ='';
  
  borrarHeoroe(): void {
    console.log('borrando Heroe...');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Heroe borrado ->'+ this.heroeBorrado);
  }

  

      
}
