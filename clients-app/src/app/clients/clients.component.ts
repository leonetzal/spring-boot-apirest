import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );
  }

}
