exports.me = (function () {    
    var core = function () {};

    core.prototype = {
        isFizz: function ( value ) {
            var output = false;
            
            if ( value % 3 === 0 ) {
                output = true; 
            }

            return output;
        },    
        
        isBuzz: function ( value ) {
            var output = false;

            if ( value % 5 === 0 ) {
                output = true;    
            }

            return output;
        },    

        isMe: function ( value ) {
            var self = this,
                output = false;

            if ( self.isFizz( value ) && self.isBuzz( value ) ) {
                output = true;    
            }

            return output;
        },

        answareMe: function ( start, end ) {
            var self = this,
                output = [];

            for ( var start = start, end = end; start <= end; start++ ) {
                if ( self.isFizz( start ) && !self.isMe( start ) ) {
                    output.push('Fizz');    
                } else if ( self.isBuzz( start ) && !self.isMe( start ) ) {
                    output.push('Buzz');    
                } else if ( self.isMe( start ) ) {
                    output.push('FizzBuzz');    
                } else {
                    output.push( start );    
                }
            }

            return output;
        },


    };

    return new core;
} ());
