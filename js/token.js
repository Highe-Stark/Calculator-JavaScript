/**
 * Created by Higher Stark on 2017/7/18.
 */

var Token = {

    //   > constructor of Token class
    //   > token stores a number or an operator
    construct: function() {
        var token = {};
        token.value = null;

        //   > Token Method: getvalue()
        //   > get value of token
        //   > either a number or a operator
        token.getvalue = function(){
            return token.value;
        }

        //   > Token Method: set()
        //   > set the value of token
        token.set = function(para) {
            token.value = para;
        }

        return token;
     }
};

var tokenStream = {

    //   > constructor of tokenStream
    construct: function() {
        var tokenstream = {};
        tokenstream.stream = [];

        tokenstream.push = function(tmp) {
            tokenstream.stream.push(tmp);
        }

        //   > tokenstream Method: nexttoken()
        //   > Usage: get next token and delete it in the stream;
        tokenstream.nexttoken = function(){
            if (tokenstream.stream.length()===0) return null;
            var next = tokenstream.stream.shift();
            return next;
        }

        //   > tokenStream Method: putback( token )
        //   > Usage: put a token back to the stream;
        tokenstream.putback = function(tmp){
            tokenstream.stream.unshift(tmp);
        }

        return tokenstream;
    }
};