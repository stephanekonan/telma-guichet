import { NgModule } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'

const primengs = [
  ButtonModule,
  CardModule,
  SelectButtonModule
];

@NgModule({
  declarations: [],
  imports: [primengs],
  exports: [primengs],
})
export class PrimengsModule {}
