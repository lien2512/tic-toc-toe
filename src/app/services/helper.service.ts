import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private toastr: ToastrService
  ) { }
  showSuccess(title, content, options = null) {
    this.toastr.success(content, title, options = null);
  }
  showError(title, content, options = null) {
    this.toastr.error(content, title, options = null);
  }
  markFormGroupTouched(formGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
