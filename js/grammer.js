/**
 * Created by Higher Stark on 2017/7/18.
 */

function expression(ts)
{
    let lhs = term(ts);
    let token = ts.nexttoken();
    let rhs = 0;
    if (token === null) return lhs;
    else if (typeof (token.value) === "string"){
        while (true){
            if (token.value === "+"){
                rhs = term(ts);
                if (rhs === null) throw "Invalid expression";
                lhs += rhs;
            }
            else if (token.value === "-"){
                rhs = term(ts);
                if (rhs === null) throw "Invalid expression";
                lhs -= rhs;
            }
            else {
                ts.putback(token);
                break;
            }
            token = ts.nexttoken();
        }
    }
    return lhs;
}

function term(ts) {
    let lhs = primary(ts);

    //   >
    console.log(lhs);

    let token = ts.nexttoken();

    //   >
    console.log(token.value);

    //token = ts.nexttoken();
    if (token.value === null) {
        return lhs;
    }
    if (typeof(token.value) !== "string"){
        throw "Invalid expression!";
    }
    else {
        while (true){

            if (token.getvalue() === "*"){
                let rhs = primary(ts);

                if (typeof(rhs) !== "number") throw "Invalid expression!";

                lhs *= rhs;
            }

            else if (token.getvalue === "/"){
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

                if (rhs !== "number" || rhs === 0 || !Number.isInteger(rhs)){
                    throw "Mod by invalid value!";
                }

                lhs = lhs % rhs;
            }

            else {
                ts.putback(token);
                break;
            }

            token = ts.nexttoken();
        }
    }
    return lhs;
}

function primary(ts){
    let lhs = null;
    let token = ts.nexttoken();
    if (token.getvalue() === null) return lhs;
    while (true){
        if (typeof (token.getvalue()) === "number"){
            lhs = token.getvalue();
        }
        else if (token.getvalue() === "^"){
            if (lhs === null) throw "Invalid expression";
            let rhs = primary(ts);
            if (rhs === null) throw "Invalid expression";
            if (typeof ( rhs ) === "number"){
                lhs = Math.pow(lhs, rhs);
            }
            else {
                throw "Invalid expression";
            }
        }
        else if (token.getvalue() === "("){
            lhs = expression(ts);
            if (lhs === null || typeof (lhs) !== "number") throw "Invalid expression";
            token = ts.nexttoken();
            if (token.getvalue() !== ")"){
                throw "Invalid expression";
            }
        }
        else if (token.getvalue() === "|"){
            lhs = expression(ts);
            if (lhs === null || typeof(lhs) !== "number") throw "Invalid expression";
            token = ts.nexttoken();
            if (token.getvalue() !== "|"){
                throw "Invalid expression";
            }
            lhs = Math.abs(lhs);
        }
        else if (token.getvalue() === ")") throw "( lost!";
        else if (token.getvalue() === "+") {
            if (lhs !== null){
                ts.putback(token);
                break;
            }
            lhs = primary(ts);
        }
        else if (token.getvalue() === "-") {
            if (lhs !== null) {
                ts.putback(token);
                break;
            }
            lhs = -primary(ts);
        }
        else {
            ts.putback(token);
            break;
        }
        token = ts.nexttoken();
    }
    return lhs;
}