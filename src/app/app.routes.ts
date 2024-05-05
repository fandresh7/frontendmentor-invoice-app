import { Routes } from '@angular/router'
import { DesignSystemComponent } from './pages/design-system/design-system.component'
import { LayoutComponent } from './layout/layout.component'
import { InvoicesComponent } from './pages/invoices/invoices.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InvoicesComponent
      },
      {
        path: 'system',
        component: DesignSystemComponent
      }
    ]
  }
]
