using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTowers
{
 internal class TriangleTower:Tower
 {
  public TriangleTower(int height, int width) : base(height, width) { }
  public override int Area()
  {
   return (Height * Width)/2;
  }
  public override int Perimeter()
  {
   return (Height *2)+Width;
  }
  public void print()
  {
   //the first line
   int numOfSpace=Width/2;
   printGroup(1, numOfSpace,1 );
   int numAsterisksInCurrentLines=3;
   numOfSpace -= 1;
   int numOfGroups = (Width - 3) / 2;
   int numOfLinesInfirstGroup = Height - 2 - (((Height - 2) / numOfGroups) * (numOfGroups - 1));
   int numOfLinesInGroups = (Height - 2) / numOfGroups;
   //the middle lines
   printGroup(numOfLinesInfirstGroup,numOfSpace, numAsterisksInCurrentLines);
   numOfGroups -= 1;
   numOfSpace -= 1;
   while (numOfGroups != 0)
   {
    numAsterisksInCurrentLines += 2;
    printGroup(numOfLinesInGroups, numOfSpace, numAsterisksInCurrentLines);
    numOfGroups -= 1;
    numOfSpace -= 1;
   }
   //the last line
   for (int i = 0; i < Width; i++)
    Console.Write('*');
   Console.WriteLine();
 }
  private void printGroup(int numOfLinesInGroups, int numOfSpace,int numAsterisksInCurrentLines)
  {
   for (int i = 0; i < numOfLinesInGroups; i++)
   {
    for (int j = 0; j < numOfSpace; j++)
    {
     Console.Write(" ");
    }
    for (int j = 0; j < numAsterisksInCurrentLines; j++)
    {
     Console.Write('*');
    }
    Console.WriteLine();
   }
  }
 }
}
