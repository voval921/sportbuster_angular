import {Component, ComponentFactoryResolver, ComponentRef, Inject, ViewChild, ViewContainerRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-signindialog',
    templateUrl: './signindialog.component.html'
})

export class SignindialogComponent {

  @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  componentRef: ComponentRef<any>;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SignindialogComponent>,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
    sessionStorage.setItem('token', '');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  getTitleSignInDialog() {
    return 'Sign In';
  }

}

