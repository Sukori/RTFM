interface Point {
  x: number;
  y: number;
  z?: number;
}

interface Greeting {
  name?: string;
  date?: Date;
}

type troolean = true | false | "maybe";
type userInputSanitized = string;

function greet(greet: Greeting): void {
  console.log(`Hello ${greet.name}, today is ${greet.date?.toDateString()!}`)
}

function print_coord(coord: Point): void {
  if (coord.z != undefined)
    console.log(`x = ${coord.x}, y = ${coord.y}, z = ${coord.z}`);
  else
    console.log(`x = ${coord.x}, y = ${coord.y}`);
}

//Although this is not necessary, I'll use a "main" scope in order to keep consistency with basically all compiled languages

//main
{
  const greeting: Greeting = {
    name: "Github",
    date: new Date()
  }

  greet(greeting);

  const coord: Point = {
    x: 42,
    y: 4.2,
    z: 42.42
  };

  print_coord(coord);

  let greetAgain: Greeting = {};

  greet(greetAgain);

  greetAgain.name = "Forgetfull programer";
  greetAgain.date = new Date();

  greet(greetAgain);

  let coord_no_z: Point = {
    x: 0,
    y: 0
  };

  coord_no_z.x = 23;
  coord_no_z.y = 2.3;

  print_coord(coord_no_z);
}
