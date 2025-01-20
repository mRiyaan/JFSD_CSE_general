import java.util.Scanner;
import java.util.Arrays;
public class Jfsd_cse_general_collections {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Integer[] arr = new Integer[n];
        for(int i= 0;i<arr.length;i++){
            arr[i]=sc.nextInt();
        }
        Arrays.sort(arr,1,4);
        for(int i=0;i<n;i++){
            System.out.println(" "+arr[i]+" ");
        }
    }
}
