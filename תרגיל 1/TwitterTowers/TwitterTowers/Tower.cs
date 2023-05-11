using System;
using System.Runtime.CompilerServices;

namespace TwitterTowers
{
 abstract class Tower
 {
  public int Height { get; set; }
  public int Width { get; set; }
  public Tower(int height, int width)
  {
   Height = height;
   Width = width;
  }
  public abstract int Area();
  public abstract int Perimeter();
 }
}