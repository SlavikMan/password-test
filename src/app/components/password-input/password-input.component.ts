// src/app/components/password-input/password-input.component.ts
import { Component } from '@angular/core';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  getPasswordStrength() {
    return this.passwordStrengthService.calculateStrength(this.password);
  }
}
