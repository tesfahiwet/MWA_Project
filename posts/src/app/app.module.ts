import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
<<<<<<< HEAD
    MatExpansionModule,
<<<<<<< HEAD
    HttpClientModule
=======
    MatPaginationModule
>>>>>>> 147c62a951f383be795fd71bac0c5b4d3f7b86ed
=======
    MatExpansionModule
>>>>>>> 1af67c8a4f9721d65fb00d8c881e14d2793841ad
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
