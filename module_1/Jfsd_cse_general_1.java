import java.util.Scanner;
public class Jfsd_cse_general_1 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your name");
        String name;
        name=sc.nextLine();
        System.out.println("Enter age");
        int age;
        age = sc.nextInt();
        System.out.println("Enter CGPA");
        double cgpa;
        cgpa= sc.nextDouble();
        System.out.println("Enter grade");
        char grade;
        grade = sc.next().charAt(0);

        System.out.println("Name : "+name);
        System.out.println("Age : "+age);
        System.out.println("CGPA : "+cgpa);
        System.out.println("Grade : "+grade);


    }
}
