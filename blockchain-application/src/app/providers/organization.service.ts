import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';
import {Organization, Volunteer} from 'app/model/at.jku.cis';

@Injectable()
export class OrganizationService {

  private NAMESPACE = 'Organization';

  constructor(private dataService: DataService<Organization>) {
  };

  public getAll(): Observable<Organization[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getAsset(id: any): Observable<Organization> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public updateAsset(id: any, itemToUpdate: Organization): Observable<Organization> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }
}
