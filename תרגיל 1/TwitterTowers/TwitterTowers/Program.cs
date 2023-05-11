using TwitterTowers;

class Program
{
 static void Main(string[] args)
 {
  int choice;
  int height;
  int width;
  Console.WriteLine("please enter 1 for rectangle, 2 for triangle and 3 for exit");
  choice = int.Parse(Console.ReadLine());
  while (choice != 3) {
   Console.WriteLine("please enter height");
   height = int.Parse(Console.ReadLine());
   Console.WriteLine("please enter width");
   width = int.Parse(Console.ReadLine());
   switch (choice)
   {
    case 1:
     RectangleTower rectangleTower = new RectangleTower(height, width);
     if (rectangleTower.Height == rectangleTower.Width || Math.Abs(height - width) > 5)
      Console.WriteLine("area of rectangle:"+rectangleTower.Area());
     else
      Console.WriteLine("perimeter of rectangle:" + rectangleTower.Perimeter());
     break;
    case 2:
     int triangleChoice;
     TriangleTower triangleTower = new TriangleTower(height, width);
     Console.WriteLine("enter 1 to calculate the perimeter of the triangle,and 2 to print the triangle ");
     triangleChoice = int.Parse(Console.ReadLine());
     switch (triangleChoice)
     {
      case 1:
       Console.WriteLine("perimeter of triangle:" + triangleTower.Perimeter());
       break;
      case 2:
       if (width % 2 == 0 || width > height * 2)
        Console.WriteLine("The triangle cannot be printed");
       else
       triangleTower.print();
       break;
     }
     break;
    case 3:
     break;
   }
   Console.WriteLine("please enter 1 for rectangle, 2 for triangle and 3 for exit");
   choice = int.Parse(Console.ReadLine());
  }
 }
}
