import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 allClients: any;

  constructor(private clientService:ClientService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params=>{
    //   let clientId = params['id'];
    //   this.id=clientId;
    // })
    this.getAllClients();
  }

  getAllClients(): void{
    this.clientService.getAllClients().subscribe(clients=>console.log(clients))
    this.clientService.getAllClients().subscribe(c=>this.allClients=c)
  }
}
