/**
 * Created by Higher Stark on 2017/8/1.
 */

describe("Calculator function", function(){
    it ("test input 1", function(){
        let ts = tokenStream.construct("1");
        expect(1).toEqual(expression(ts));
    });

    it("test input -2", function(){
        let ts = tokenStream.construct("-2");
        expect(-2).toEqual(expression(ts));
    });

    it ("test input 1+3", function(){
        let ts = tokenStream.construct("1+3");
        expect(4).toEqual(expression(ts));
    });

    it("test input 1 - 5", function(){
        let ts = tokenStream.construct("1-5");
        expect(-4).toEqual(expression(ts));
    });

    it("test input 3.5*6.5", function(){
        let ts = tokenStream.construct("3.5*6.5");
        expect( 3.5 * 6.5).toEqual(expression(ts));
    });

    it("test input 4.0/2.0",function(){
        let ts = tokenStream.construct("4.0/2.0");
        expect(4.0 /2.0).toEqual(expression(ts));
    });

    it("test input (9.04+6.02*25-6.4/3.2)",function(){
        let ts = tokenStream.construct("(9.04+6.02*25-6.4/3.2)");
        expect( 9.04+6.02*25-6.4/3.2 ).toEqual(expression(ts));
    });

});

