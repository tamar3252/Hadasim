using System;
namespace TwitterTowers
{
 class RectangleTower:Tower
 {
  public RectangleTower(int height, int width) : base(height, width) { }
  public override int Area()
  {
   return Height * Width;
  }
  public override int Perimeter()
  {
   return (Height + Width) * 2;
  }
 }
}