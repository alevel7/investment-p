import { email, minLength, required, schema } from "@angular/forms/signals";


export interface LoginInterface {
    email: string;
    password: string;
}

export const loginSchema = schema<LoginInterface>((rootPath) => {
    required(rootPath.email, {message: 'Email is required'});
    email(rootPath.email, {message: 'Email is invalid'});
    minLength(rootPath.password, 8, {message: 'Password must be at least 8 characters long'});
    minLength(rootPath.email, 5, {message: 'Email must be at least 5 characters long'});
    required(rootPath.password, {message: 'Password is required'});
})