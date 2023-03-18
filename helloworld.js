(function(ext) {
    // Extension code goes here
    ext.sayHello = function() {
        console.log("Hello");
    };

    // Block and descriptor for the extension
    var descriptor = {
        blocks: [
            [' ', 'say hello', 'sayHello']
        ],
        menus: {
            squidy: ['hello']
        },
        displayName: 'Squidy\'s Stuff',
        color: '#B57EDC',
        iconURL: 'https://i.imgur.com/2VHP9ty.png',
        version: '1.0.0'
    };

    // Register the extension
    ScratchExtensions.register('squidyStuff', descriptor, ext);
})({});
