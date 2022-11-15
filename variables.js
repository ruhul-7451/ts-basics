var myName = "";
myName = "John Doe";
var newName = null;
var newArray = [1, 2, 3, 4, 5, "name"];
var array = [];
var account = {
    name: "John Doe",
    balance: 1000
};
var accounts;
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
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance, isPremium) {
        this.name = name;
        this.balance = balance;
        this.isPremium = isPremium;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
