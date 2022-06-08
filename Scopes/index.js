var foo = "bar";    // Global scope

function bar() {    // Function scope
    var foo = "baz";
}

function baz(foo) { // Function scope
    foo = "bam";
    bam = "yay";
}

/********************************************* */

var foo1 = "bar1";

function bar1() {
    var foo = "baz1";
    
    function baz1(foo1) {
        foo1 = "bam1";
        bam1 = "yay1";
    }
    baz1();
}


bar1();
foo1;
bam1;
//baz1();    //HATA

/********************************************* */
