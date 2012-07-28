var vows = require('vows'),
    assert = require('assert'),
    fizzbuzz = require('./fizzbuzz.js').me;

vows.describe('Fizz Buzz Suite').addBatch({
    'Fizz test': {
        topic: function () { return fizzbuzz.isFizz( 3 ) },

        'is fizz': function ( topic ) {
            assert.equal( topic, true );
        }
    },

    'Buzz test': {
        topic: function () { return fizzbuzz.isBuzz( 5 ) },

        'is buzz': function ( topic ) {
            assert.equal( topic, true );     
        }
    },

    'FizzBuzz test': {
        topic: function () { return fizzbuzz.isMe( 15 ) },

        'is me': function ( topic ) {
            assert.equal( topic, true );    
        }
    },

    'FizzBuzz sequence test': {
        topic: function () { return fizzbuzz.answareMe( 1, 6 ) },

        'answare Me who\'s who': function ( topic ) {
            assert.equal(
                JSON.stringify( topic ), 
                JSON.stringify( [1, 2, 'Fizz', 4, 'Buzz', 'Fizz'] ) 
            )    
        }
    }
}).run();
