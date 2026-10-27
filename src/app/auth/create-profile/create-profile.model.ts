

import { email, minLength, required, schema } from "@angular/forms/signals";


export interface CreateIndividualProfileInterface {
    companyName: string;
    registrationNumber: string;
    companyIndustry: string;
    companySize: string;
    taxIdentificationNumber: string;
    dateOfIncorporation: string;
    estimatedAnnualRevenue: string;
    companyAddress: string;
    state: string;
    localGovernmentArea: string;
}

export const createIndividualProfileSchema = schema<CreateIndividualProfileInterface>((rootPath) => {
    required(rootPath.companyName, { message: 'Company Name is required' });
    required(rootPath.registrationNumber, { message: 'Registration Number is required' });
    required(rootPath.companyIndustry, { message: 'Company Industry is required' });
    required(rootPath.companySize, { message: 'Company Size is required' });
    required(rootPath.taxIdentificationNumber, { message: 'Tax Identification Number is required' });
    required(rootPath.dateOfIncorporation, { message: 'Date of Incorporation is required' });
    required(rootPath.estimatedAnnualRevenue, { message: 'Estimated Annual Revenue is required' });
})

