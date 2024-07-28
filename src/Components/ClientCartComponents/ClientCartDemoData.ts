export interface Cuisine {
    Name: string;
    Amount: number;
    DineType: string;
    Price: number;
}

export interface Voucher {
    Number: string;
    Value: number;
}

export const ClientCartDemoData: Cuisine[] = [
    { Name: 'Kung Pao Chicken', Amount: 1, DineType: 'Dine In', Price: 17 },
    { Name: 'Sweet and Sour Pork', Amount: 2, DineType: 'Takeaway', Price: 15 },
    { Name: 'Mapo Tofu', Amount: 3, DineType: 'Dine In', Price: 12 },
    { Name: 'Spring Rolls', Amount: 5, DineType: 'Takeaway', Price: 7 },
    { Name: 'Hot and Sour Soup', Amount: 4, DineType: 'Dine In', Price: 10 },
    { Name: 'Beef with Broccoli', Amount: 2, DineType: 'Dine In', Price: 14 },
    { Name: 'General Tso\'s Chicken', Amount: 3, DineType: 'Takeaway', Price: 16 },
    { Name: 'Szechuan Shrimp', Amount: 1, DineType: 'Dine In', Price: 18 },
    { Name: 'Lo Mein', Amount: 4, DineType: 'Takeaway', Price: 11 },
    { Name: 'Egg Fried Rice', Amount: 6, DineType: 'Dine In', Price: 8 }
];

export const DemoVoucher = {Number: "12165154135", Value: 8};