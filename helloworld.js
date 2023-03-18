(function(ext) {

  // Define your blocks here
  ext.say_hello = function() {
    console.log("Hello, world!");
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      [' ', 'say hello', 'say_hello'],
    ]
  };

  // Register the extension
  ScratchExtensions.register('Hello World', descriptor, ext);
})({});
