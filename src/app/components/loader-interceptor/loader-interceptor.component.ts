import { Component, Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/movies/loader-service.service';

@Injectable()
@Component({
  selector: 'app-loader',
  templateUrl: './loader-interceptor.component.html',
  styleUrls: ['./loader-interceptor.component.sass'],
})
export class LoaderInterceptorComponent implements HttpInterceptor {
  isLoading$: Observable<boolean>;

  constructor(
    private loaderService: LoaderService,
    private renderer: Renderer2
  ) {
    this.isLoading$ = this.loaderService.loaderState$;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.showLoader();
    this.renderer.addClass(document.body, 'no-scroll');

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.hideLoader();
        this.renderer.removeClass(document.body, 'no-scroll');
      })
    );
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}
