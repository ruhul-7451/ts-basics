let myName: string = "";
myName = "John Doe";

let newName: string | null = null;

let newArray = [1, 2, 3, 4, 5, "name"];

let array: string[] | number[] = [];

// const account: {
//   name: string;
//   balance: number;
//   isPremium?: boolean;
// } = {
//   name: "John Doe",
//   balance: 1000,
// };

interface IAccounts {
  name: string;
  balance: number;
  isPremium?: boolean;
  deposit?: () => void;
}

const account: IAccounts = {
  name: "John Doe",
  balance: 1000,
};

let accounts: IAccounts[];

// class InvestmentAccount implements IAccounts {
//   name: string;
//   balance: number;
//   isPremium: boolean;
//   constructor(name: string, balance: number, isPremium: boolean) {
//     this.name = name;
//     this.balance = balance;
//     this.isPremium = isPremium;
//   }
// }

class InvestmentAccount implements IAccounts {
  constructor(public name, public balance, public isPremium) {

  }
  withdraw(){
    
  }
}
