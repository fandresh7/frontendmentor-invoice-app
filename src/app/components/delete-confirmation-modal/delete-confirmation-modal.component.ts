import { Component, Inject, inject } from '@angular/core'
import { Router } from '@angular/router'
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'

import { DeleteButtonComponent } from '../../shared/components/buttons/delete-button/delete-button.component'
import { EditButtonComponent } from '../../shared/components/buttons/edit-button/edit-button.component'

import { InvoicesService } from '../../services/invoices.service'
import { Invoice } from '../../models/invoice'

@Component({
  selector: 'app-delete-confirmation-modal',
  standalone: true,
  imports: [DeleteButtonComponent, EditButtonComponent],
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrl: './delete-confirmation-modal.component.css'
})
export class DeleteConfirmationModalComponent {
  invoicesService = inject(InvoicesService)
  router = inject(Router)

  constructor(
    protected dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: { invoice: Invoice }
  ) {}

  delete(invoice: Invoice) {
    this.invoicesService.deleteInvoice(invoice.id).subscribe(() => {
      this.dialogRef.close()
      this.router.navigate(['/'])
    })
  }

  cancel() {
    this.dialogRef.close()
  }
}
