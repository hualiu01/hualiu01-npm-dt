1. To export and import using ES modules rather than CommonJS, you need to specify `"type": "module"` in `package.json`.   
2. When the package name does not start with `@`, it is a public package. You can use a namespace by prefixing the package name in `package.json` with `@`. Note that this would make the package private by default. If you try to publish it using `npm publish`, you will get a `402 Payment Required` error. To publish it as a public package, use `npm publish --access=public`.
   1. Tip: Running `npm init --scope=hualiu01` will automatically add `@hualiu01` as a prefix/namespace to the package name.
3. To run a ES `.js` file directly
    ```JS
    if (import.meta.url === `file://${process.argv[1]}`) {
        // This block will only run if the file is executed directly
        console.log("This script str_date.js is being run directly.");
    } else {
        // This block will run if the file is imported as a module
        console.log("This script str_date.js is being imported as a module.");
    }
    ```
4. 