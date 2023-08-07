import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor() { }

  register(user: User): void {
    // Implement user registration logic here
    // Typically, you'll send a request to the backend API to register the user
  }

  login(username: string, password: string): boolean {
    // Implement user login logic here
    // Check credentials and return true if successful, else return false
    // On successful login, store the current user in the session
    this.currentUser = {
      id: 1,
      username: username,
      email: 'user@example.com',
      password: 'hashed_password_here' // In real-world, hash the password before storing
    };
    return true;
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser; // Return true if a user is logged in
  }
}
