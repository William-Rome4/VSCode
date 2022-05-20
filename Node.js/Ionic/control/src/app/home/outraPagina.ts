import { Router } from '@angular/router';

export class outraPagina {
  constructor(private route: Router) { }

  nextpage() {
    this.route.navigate(['../insert/insert.page.html']);
  }
}
