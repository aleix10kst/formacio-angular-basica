import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      console.log(fragment);
    });
  }

  ngOnInit(): void {
  }

  onClickGoBack(): void {
    this.router.navigate(['/']).finally();
  }

}
