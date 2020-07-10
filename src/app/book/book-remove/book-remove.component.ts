import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-book-remove',
  templateUrl: './book-remove.component.html',
  styleUrls: ['./book-remove.component.css']
})
export class BookRemoveComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @Input() public id;

  ngOnInit(): void {
  }


  c(action: any) {

  }

  open(content: any) {

  }

  passBack() {
    this.activeModal.close(this.id);

  }

}
