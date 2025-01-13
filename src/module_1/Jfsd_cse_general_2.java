package module_1;

import java.util.Scanner;
public class Jfsd_cse_general_2 {
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
        int rows,cols,treeNo;
        System.out.println("Enter the no of rows");
        rows = sc.nextInt();
        System.out.println("enter the no of colums");
        cols= sc.nextInt();
        System.out.println("enter the tree no ");
        treeNo = sc.nextInt();

        if (treeNo == cols || treeNo%4 ==0 || treeNo%4 == 1){
            System.out.println("Mango tree planted");
        }
        else {
            System.out.println("No mango tree");
        }

    }
}
