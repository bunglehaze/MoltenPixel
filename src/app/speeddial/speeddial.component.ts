import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-speeddial',
  templateUrl: './speeddial.component.html',
  styleUrls: ['./speeddial.component.css'],
  providers: [MessageService],
})
export class SpeeddialComponent {
  speedItems: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.speedItems = [
      {
        icon: 'pi pi-pencil',
        label: 'Hello',
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated',
          });
        },
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Delete',
            detail: 'Data Deleted',
          });
        },
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
    ];
  }
}
