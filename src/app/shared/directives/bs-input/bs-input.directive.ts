import { Directive, HostBinding, Input } from '@angular/core';

/* menambahkan class ke form-control
  dgn menambahkan @HostBinding()
*/

enum InputSize {
  default = '',
  large = 'form-control-lg',
  small = 'form-control-sm'
}

@Directive({
  selector: '[appBsInput]'
})
// class yg di tambahkan dicpratopr derective
// target elemen
// di tambahkan dengan HostBinding
export class BsInputDirective {

  


  
}


// get aksesor, membuat sebuah methiod bisa di akses  seperti property


