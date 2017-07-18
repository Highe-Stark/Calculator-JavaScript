/**
 * Created by Higher Stark on 2017/7/18.
 */

import "token.js"

function expression(ts)
{
    let token = Token.construct();
    let lhs = term(ts);
    let rhs = 0;
    token = ts.next();
    if (token===null) return lhs;
    else if (typeof (token.value)==="string"){
        while (token.value==="+" || token.value==="-"){
            if (token.value === "+"){
                rhs = term(ts);
                lhs += rhs;
            }
            else if (token.value === "-"){
                rhs = term(ts);
                lhs -= rhs;
            }
            else {
                ts.putback(token);
                break;
            }
            token = ts.next();
        }
    }
    return lhs;
}

function term(ts) {
    let token = Token.construct();
    let lhs = primary(ts);
    token = ts.next();
    if (token.value === null) {
        return lhs;
    }
    if (typeof(token.value)!=="string"){
        throw "Invalid expression!";
    }
    else {
        while (true){

            if (token.getvalue()==="*"){
                let rhs = primary(ts);

                if (typeof(rhs)!=="number") throw "Invalid expression!";

                lhs *= rhs;
            }

            else if (token.getvalue==="/"){
                let rhs = primary(ts);

                if (rhs === 0) {
                    throw "Divided by 0!";
                }
                else if (typeof (rhs) === "number"){
                    lhs /= rhs;
                }
                else {
                    throw "Invalid expression!";
                }

            }

            else if ( token.getvalue === "%"){
                let rhs = primary(ts);

                if (rhs!=="number" || rhs===0 || !Number.isInteger(rhs)){
                    throw "Mod by invalid value!";
                }

                lhs %= rhs;
            }

            else {
                ts.putback(token);
                break;
            }

            token = ts.next();
        }
    }
    return lhs;
}

function primary(ts){
    let token = Token.construct();
    token = ts.next();
    if (token.getvalue() === null) return null;
    let lhs = 0;
    while (true){
        if (typeof (token.getvalue()) === "number"){
            lhs = token.getvalue();
        }
        else if (token.getvalue() === "^"){
            token = ts.next();
            if (token.getvalue() === null) throw "Invalid expression!";
            if (typeof(token.getvalue()) === "number") {
                let rhs = token.getvalue();
                lhs = Math.pow(lhs, rhs);
            }
            if (token.getvalue() === "("){
                let rhs = expression(ts);
                if (rhs === null) throw "Invalid expression!";
                if (typeof(rhs) !== "number") {
                    throw "Invalid expression";
                }
                token = ts.next();
                if (token.getvalue() !== ")"){
                    throw "Invalid expression";
                }
            }
        }
        else if (token.getvalue() === "("){
            lhs = expression(ts);
            if (lhs === null || typeof (lhs) !== "number") throw "Invalid expression";
            token = ts.next();
            if (token.getvalue() !== ")"){
                throw "Invalid expression";
            }
        }
        else if (token.getvalue() === "|"){
            lhs = expression(ts);
            if (lhs === null || typeof(lhs) !== "number") throw "Invalid expression";
            token = ts.next();
            if (token.getvalue() !== "|"){
                throw "Invalid expression";
            }
            lhs = Math.abs(lhs);
        }
        else if (token.getvalue() === ")") throw "( lost!";
        else {
            throw "Invalid expression";
        }
        token = ts.next();
    }
    return lhs;
}