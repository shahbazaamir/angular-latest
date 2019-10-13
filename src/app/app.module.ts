import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SubjectComponent } from './subject/subject.component';
import { QuizService } from './quiz.service';
import {environment} from "../environments/environment";
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,  AngularFireModule.initializeApp(environment.firebase)],
  declarations: [ AppComponent,
  
   HelloComponent, SubjectComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QuizService , AngularFirestore]
})
export class AppModule { }
