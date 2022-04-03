import java.util.Arrays;
import java.util.Scanner;
public class Newpr {

    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        int n=sc.nextInt();
        int arr[]= new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        int m=sc.nextInt();
        int arr2[]= new int[m];
        for(int i=0;i<m;i++){
            arr2[i]=sc.nextInt();
        }
        extracted(sc);
        int a=Math.max(n,m);
        int[] arr3=new int[a+1];
        int carry=0;
        for(int i=a-1;i>=0;i--){
            int lastone = digitGetter(arr, a, i);
            int lasttwo = digitGetter(arr2, a, i); 
            int lastsum=0;
            lastsum=lastone+lasttwo+carry;
            if(lastsum>9)
                carry=1;
            else 
                carry=0;
            lastsum%=0;
            arr3[i]=lastsum;
        }
        System.out.println(Arrays.toString(arr3));
    }
    private static void extracted(Scanner sc) {
        sc.close();
    }
    public static int digitGetter(int[] arr, int max, int i){
        int factor = max-arr.length;
        if((i-factor) < arr.length)
            return arr[i-factor];
        return 0;
    }

}