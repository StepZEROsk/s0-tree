import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ExampleComponent} from './example.component';
import {TreeModule} from '../common/modules/tree/tree.module';

@NgModule({
  imports: [
    BrowserModule,
    TreeModule,
  ],
  exports: [
    ExampleComponent,
  ],
  declarations: [
    ExampleComponent
  ],
  entryComponents: [],
  providers: [],
})
export class ExampleModule { }
