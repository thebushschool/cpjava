public final static String e = "2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274274663919320030599218174135966290435";
public void setup()
{
  //your code here
  ArrayList <Double> digits1 = new ArrayList <Double>();
  String temp1;
  double temp2;
  int i = 0;
  while (true)
  {
    temp1 = e.substring(i+2, i+12);
    temp2 = Double.parseDouble(temp1);
    digits1.add(temp2);
    if ( isPrime(digits1.get(i)) )
    {
      System.out.println("Puzzle 1:");
      System.out.println("first 10-digit prime found in consecutive digits of 'e': " + String.format( "%.0f", digits1.get(i) ) );
      break;
    }
    i++;
  }

  int z = 0;
  i = 0;
  ArrayList <Double> digits2 = new ArrayList <Double>();
  System.out.println("Puzzle 2:");
  while (true)
  {
    temp1 = e.substring(i+2, i+12);
    temp2 = Double.parseDouble(temp1);
    digits2.add(temp2);
    int sum = 0;
    for (int a = i+2; a < i+12; a++)
    {
      temp1 = e.substring(a, a+1);
      temp2 = Double.parseDouble(temp1);
      sum += temp2;
    }
    if (sum == 49)
    {
      z++;
      System.out.println("f(" + z + ")= " + String.format( "%.0f", digits2.get(i) ) );
      if (z == 5)
      {
        break;
      }
    }
    i++;
  }
}

public boolean isPrime(double dNum)
{
  //your code here
  if (dNum < 2)
  {
    return false;
  }
  for (int i = 2; i <= Math.sqrt(dNum); i++)
  {
    if (dNum % i == 0)
    {
      return false;
    }
  }
  return true;
}
