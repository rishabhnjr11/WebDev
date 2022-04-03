package java;

import java.util.*;

public class Main{

public static void main(String[] args) throws Exception {
    try (Scanner sc = new Scanner(System.in)) {
        System.out.print("Enter array size");
        int n=sc.nextInt();
        int[] arr= new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        build(arr);
    }
 }

public static void build(int[] arr){
    int max=0;
    for(int i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    for(int i=max;i>0;i--){
        for(int j=0;j<arr.length;j++){
            if(i>arr[j]){
                System.out.print(" ");
            }
            else{
                System.out.print("*");
            }
        }
        System.out.println();
    }
}
}