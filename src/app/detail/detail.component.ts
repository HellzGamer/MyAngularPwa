import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClientWithId();
  }

  getClientWithId(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClientWithClientID(id).subscribe(c=>this.client=c)

  }

}
