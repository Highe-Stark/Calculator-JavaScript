/**
 * Created by Higher Stark on 2017/7/18.
 */

let M = undefined;

let Token = {

    //   > constructor of Token class
    //   > token stores a number or an operator
    construct: function() {
        let token = {};
        token.value = null;

        //   > Token Method: getvalue()
        //   > get value of token
        //   > either a number or a operator
        token.getvalue = function(){
            return token.value;
        };

        //   > Token Method: set()
        //   > set the value of token
        token.set = function(para) {
            token.value = para;
        };

        return token;
     }
};

let tokenStream = {

    //   > constructor of tokenStream
    construct: function() {
        let rem = false;
        let tokenstream = {};
        tokenstream.stream = [];

        //   > tokenstream Method: push()
        //   > Usage: append a new token to the end of the stream
        tokenstream.push = function(tmp) {
            tokenstream.stream.push(tmp);
        };

        //   > tokenstream Method: build(string)
        //   > Usage: build the tokenstream  with a string
        tokenstream.build = function(s) {
            if (typeof(s) !== "string") throw "Invalid expression";
            for ( let i = 0; i < s.length; i++){
                //   > get an number
                if (isNumerical(s[i])){
                    let quan_point = 0;
                    if (s[i] === "."){
                        console.log(s[i]);
                        throw "Invalid expression";
                    }
                    let j = i + 1;
                    while (j < s.length && isNumerical(s[j])) {
                        if (s[j] === ".") quan_point++;
                        j++;
                    }
                    if (quan_point > 1) throw "Invalid expression!";
                    let num = s.substring(i, j);
                    let v = parseFloat(num);
                    console.log(v);
                    let token = Token.construct();
                    token.set(v);
                    tokenstream.push(token);
                    i = j - 1;
                    //continue;
                }
                else if (s[i] === 'R'){
                    if (M === undefined){
                        throw "No memory stored";
                    }
                    else {
                        let token = Token.construct();
                        token.set(M);
                        tokenstream.push(token);
                    }
                }
                else if (s[i] === 'M'){
                    if (i+1!==s.length){
                        throw "Illegal M";
                    }
                    else {
                        tokenstream.rem = true;
                    }
                }
                else if (isOperator(s[i])){
                    if (s[i] === "s"){
                        if (s[i + 1] === "q" && s[i + 2] === "r" && s[i + 3] === "t"){
                            if (s[i+4] === "("){
                                let token = Token.construct();
                                token.set("sqrt");
                                console.log(token.getvalue());
                                tokenstream.push(token);
                                i = i+3;
                            }
                            else throw "Invalid expression!";
                        }
                        else throw "Invalid expression!";
                        //continue;
                    }
                    else {
                        let token = Token.construct();
                        token.set(s[i]);
                        console.log(token.getvalue());
                        tokenstream.push(token);
                        //continue;
                    }
                }
                else if (s[i] === " " || s[i] === "\t" || s[i] === "\n"){
                    //continue;
                }
                else {
                    throw "Unexpected token!";
                }
            }
            console.log("Build successfully!");
        };

        //   > tokenstream Method: nexttoken()
        //   > Usage: get next token and delete it in the stream;
        tokenstream.nexttoken = function(){
            if (tokenstream.stream.length === 0) return Token.construct();
            else return tokenstream.stream.shift();
        };

        //   > tokenStream Method: putback( token )
        //   > Usage: put a token back to the stream;
        tokenstream.putback = function(tmp){
            tokenstream.stream.unshift(tmp);
        };

        return tokenstream;
    }
};

function isNumerical(ch)
{
    return (ch === "0" || ch === "1" || ch === "2" || ch === "3" || ch === "4" || ch === "5" ||
        ch === "6" || ch === "7" || ch === "8" || ch === "9" || ch === ".");
}

function isOperator(ch)
{
    return ( ch === "+" || ch === "-" || ch === "*" || ch === "/" || ch === "%" ||
        ch ==="|" || ch === "^" || ch === "s" ||  ch === "!");
}