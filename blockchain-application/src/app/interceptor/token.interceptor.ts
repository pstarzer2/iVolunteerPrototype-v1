import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.getAccessToken();
    if(token) {
      request = request.clone({
        setHeaders: {'X-Access-Token': token}
      });
    }
    
     return next.handle(request);
  }

  private getAccessToken(): string {
    let token: string =  this.cookieService.get('access_token').split('\.')[0].split(':')[1];
    console.error("token: ", token);
    return token;
  }
}
