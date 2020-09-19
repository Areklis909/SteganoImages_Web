import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  getMessage(err: HttpErrorResponse): Observable<string> {
    if (err.error instanceof Blob) {
      return from(err.error.text());
    } else if(err.error instanceof ErrorEvent) {
      return of(err.error.message);
    } else {
      return of(err.error);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        const msg = err.message;
        this.getMessage(err).subscribe(
          (details) => {
            this.toastr.error(msg + ' ' + details);
          }
        );
        return throwError(err);
      })
    );
  }
}
