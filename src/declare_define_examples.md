### Declare and Define Primitives, Objects, Array, ArrayList of Primitives and Custom Objects
````
// Declare User defined Custom Data Type
//
public class Dog {
  private int age;
  public int getAge() {
    return this.age;
  }
  Dog() {
  }
  Dog(int age_) {
    this.age = age_;
  }
}

void setup() {
  // Declare & Define Java defined Primitive Data Types
  //
  byte b = '\u0045';        //-128 to 127
  short s = 5;              //-32,768 to 32,767
  int i = 10;               //-2^31 to 2^31-1
  long l = 100L;            //-2^63 to 2^63-1
  float f = 3.1415f;        //-3.4e38 to 3.4e38
  double d = 500.25d;       //-1.7e308 to 1.7e308
  boolean bool = false;     //true or false
  char c = 'A';             //'\u0000' to '\uffff'

  System.out.println("byte b = " + b);
  System.out.println("short s = " + s);
  System.out.println("int i = " + i);
  System.out.println("long l = " + l);
  System.out.println("float f = " + f);
  System.out.println("double d = " + d);
  System.out.println("boolean bool = " + bool);
  System.out.println("char c = " + c);
  System.out.println();

  // Declare & Define Java defined Custom Data Type (class)
  //
  String s1 = "My string";
  System.out.println("String s1 = " + s1);

  // Define User defined Custom Data Type
  //
  Dog dog1 = new Dog();
  System.out.println("dog1 age = " + dog1.getAge());
  System.out.println();

  // Declare & Define Array of primitives
  //
  int size = 5;
  int [] intArr = new int[size];
  int [] intArr2 = { 6, 7, 8, 9, 10 };
  for (int ii = 0; ii < size; ii++) {
    intArr[ii] = (int)Math.pow(ii, 2);
  }
  for (int ii = 0; ii < size; ii++) {
    System.out.println("intArr " + ii + " = " + intArr[ii]);
  }
  System.out.println();

  for (int ii = 0; ii < intArr2.length; ii++) {
    intArr2[ii] = (int)Math.pow(intArr2[ii], 2);
  }
  for (int ii = 0; ii < intArr2.length; ii++) {
    System.out.println("intArr2 " + ii + " = " + intArr2[ii]);
  }
  System.out.println();

  // Declare & Define Array of primitives
  //

  //Declare & Define ArrayList of User defined Custom Data Type (class)
  //
  int len = 5;
  ArrayList <Dog> intArrLst = new ArrayList <Dog> ();
  for (int ii = 0; ii < len; ii++) {
    intArrLst.add(new Dog(ii+1));
  }
  for (int ii = 0; ii < len; ii++) {
    Dog aDog = intArrLst.get(ii);
    System.out.println("intArrLst " + ii + " = " + aDog.getAge());
  }
  System.out.println();

  //Declare & Define ArrayList of User defined Custom Data Type (class)
  //using a function call
  ArrayList <Dog> my_dogs = create_dogs(10);
  print_dogs(my_dogs);
  System.out.println();
}

ArrayList create_dogs(int len_) {
  ArrayList <Dog> dogs = new ArrayList <Dog> ();
  for (int ii = 0; ii < len_; ii++) {
    dogs.add(new Dog((ii+1)*2));
  }
  return dogs;
}

void print_dogs(ArrayList <Dog> dogs_) {
  int ii = 0;
  for (Dog aDog : dogs_) {
    System.out.println("intArrLst " + ii + " = " + aDog.getAge());
    ii++;
  }
}
````