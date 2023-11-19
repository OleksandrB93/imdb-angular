import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/movies/loader-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader-interceptor.component.html',
  styleUrls: ['./loader-interceptor.component.sass'],
})
export class LoaderInterceptorComponent {
  constructor(public loaderService: LoaderService) {}

  get isLoading$() {
    return this.loaderService.isLoading$;
  }
}
