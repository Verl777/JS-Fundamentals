const firstArgument = process.argv[2];

if (firstArgument === undefined) {
  console.log("Hello There Am Valerian");
} else {
  console.log(firstArgument);
}
