
class AccountType{
    constructor(accountType){
        this.accountType=accountType;
    }

    setAccountType(accountType){
        this.accountType=accountType;
    }
    getAccountType(){
        return accountType;
    }
}

class Account extends AccountType{
    static accountList=[];
    constructor(accountType,name,balance,description){
        super(accountType);
        this.name=name;
        this.balance=balance;
        this.description=description;
        Account.accountList.push(this);
    }


    getName(){
        return this.name;
    }
    getAccountType(){
        return super.getAccountType();
    }
    getBalance(){
        return this.name;
    }
    getDescription(){
        return this.name;
    }
    getAccount(){
        return "Name : "+ this.name + " Account Type : "+ this.accountType + "Balance: " + this.balance + "Remark : " + this.description;
    }
}

function saveAccount(){
let name= document.getElementById("name").value;
console.log(name);

let accountType= document.getElementById("accounttype").value;
let balance= document.getElementById("balance").value;
let direction = document.getElementById("discription").value;
let acc= new Account(accountType,name,balance,direction);
console.log(acc.getAccount());
document.getElementById("savedOne").value= Account.accountList.map((a)=>a.getAccount()).join(" \n");




}



