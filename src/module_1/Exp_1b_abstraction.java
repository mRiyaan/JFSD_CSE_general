package module_1;
//abstraction
//defination : hiding the details and letting know only the essential parts of the program
// methods to absratction
// Abstract classes, metods   - Java -8  0-100%
//Interfaces   - after Java - 8 ,-100%

interface Atm{
    void withdraw(int a);
    void showDetails();

    // interfaces contains abtract methods , default methods and final contants
}
class AnyBank implements Atm {
    private int balance=1000;
    private String name ;
   public void withdraw(int a){
        System.out.println("amount "+a+" withdrawn");
    }
   public void showDetails(){
        System.out.println("Bank Name: Any bank");
       System.out.println("user name: "+name);
       System.out.println("Balance : "+balance);
    }
    public void setName(String s){
       name = s;
    }
}

public class Exp_1b_abstraction {
    public static void main(String[] args) {
        AnyBank a = new AnyBank();
        a.setName("sample user");
        a.showDetails();
        a.withdraw(100);
    }
}
