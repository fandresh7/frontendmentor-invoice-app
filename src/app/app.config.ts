import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import 'cally'

import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
