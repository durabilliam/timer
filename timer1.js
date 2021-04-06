const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (Number(args[i]) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(Number(args[i])) * 1000);
  }
}


