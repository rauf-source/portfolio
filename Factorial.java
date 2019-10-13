import java.util.Scanner;
public class Factorial{

	public static void main(String args[])
	{

		System.out.println("Factorial of the number: " );

		Scanner input  =  new Scanner(System.in);
		int num  =  input.nextInt();

			System.out.println(num + "! = " + (num < 0 ? "Math Error": factorial(num)));

	}
	public static int factorial(int num)
	{
		int n = num;
	if(n > 0)
	{
		for(int i = 1; i < num ; i++)
		{
			n  =  n * (num - i);
		}
		return n;

	}
	else 
	{
		return 1;
	}

	



}


}
 //code by AbdulRauf(github.com/abdulCode) with love for educational purposes only