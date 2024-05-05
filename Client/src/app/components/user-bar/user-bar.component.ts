import { Component, OnInit } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faUserCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss'],
})
export class UserBarComponent {
  userEl: IconDefinition = faUserCircle;
  search: IconDefinition = faSearch;

  constructor(public accountService: AccountService) {}
}
