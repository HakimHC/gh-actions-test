const DEFAULT_MESSAGE: string = "Hello, World!";

function greetUser(msg: string = DEFAULT_MESSAGE): void {
  console.log(msg);
}

greetUser("klk joaquin");
