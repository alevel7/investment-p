import { email, minLength, required, schema, validate } from "@angular/forms/signals";


export interface SignUpInterface {
    email: string;
    password: string;
    confirmPassword: string;
}

export const signUpSchema = schema<SignUpInterface>((rootPath) => {
    required(rootPath.email, {message: 'Email is required'});
    email(rootPath.email, {message: 'Email is invalid'});
    minLength(rootPath.password, 8, {message: 'Password must be at least 8 characters long'});
    minLength(rootPath.email, 5, {message: 'Email must be at least 5 characters long'});
    required(rootPath.password, {message: 'Password is required'});
    required(rootPath.confirmPassword, {message: 'Confirm Password is required'});
    validate(rootPath.confirmPassword, ({ value, valueOf }) => {
        const confirmPassword = value();
        const password = valueOf(rootPath.password);
        if (confirmPassword !== password) {
            return {
                kind: 'passwordMismatch',
                message: 'Passwords do not match',
            };
        }
        return null;
    });
})