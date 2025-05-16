import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoComponent } from './demos/demo/demo.component';
import { DemoFormComponent } from './demos/demo-form/demo-form.component';
import { DemoRoutingComponent } from './demos/demo-routing/demo-routing.component';
import {HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptors} from '@angular/common/http';
import {tokenInterceptor} from './interceptors/token.interceptor';
import { LoginComponent } from './demos/login/login.component';
import {environment} from '../environments/environment';
import {JwtModule} from '@auth0/angular-jwt';
import { DemoSubjectsComponent } from './demos/demo-subjects/demo-subjects.component';
import { EmbeddedComponent } from './demos/demo-subjects/components/embedded/embedded.component';
import { MainComponent } from './demos/demo-subjects/components/main/main.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoFormComponent,
    DemoRoutingComponent,
    LoginComponent,
    DemoSubjectsComponent,
    EmbeddedComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: [environment.api.domain],
        disallowedRoutes: [`${environment.api.url}/login`]
      }
    }),
  ],
  providers: [
      provideHttpClient(
        withInterceptors([tokenInterceptor])
      )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}
