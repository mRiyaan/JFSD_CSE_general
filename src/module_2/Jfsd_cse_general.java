import java.util.Scanner;
public class Jfsd_cse_general {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter name and age");
        String name = sc.next();
        int age = sc.nextInt();
        System.out.println("Hello "+ name +",You are now "+ age +" years old");
        char c= sc.next().charAt(0);
        System.out.println(c);
    }
}
