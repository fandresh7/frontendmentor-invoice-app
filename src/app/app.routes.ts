import { Routes } from '@angular/router'
import { DesignSystemComponent } from './pages/design-system/design-system.component'
import { LayoutComponent } from './layout/layout.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'system',
        component: DesignSystemComponent
      }
    ]
  }
]
