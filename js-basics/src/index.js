console.log("Start");

function fa() {
    return "AAAAAAAAAAA";
}

function fb() {
    return "CCCCCCCCCCC";
}

function fz() {
    return 10;
}

// null, undefined
function fc(x) {
    console.log("->" + x + "<-");
    return x + x;
}

function fd(p) {
    const x = p();
    console.log("x:", x);
    return x + 2;
}

function fe() {
    return fc;
}

const rfe = fe()(10);
console.log(rfe);

// const wertA = fa();
// console.log(wertA);

// let f = fa;
// console.log( f );
// console.log( f() );
// f = fb;
// console.log( f );
// console.log( f() );

// const rc = fc("Hallo ");
// console.log(rc);

// const rfa = fd(fa); // callbacks
// console.log(rfa);
// const rfb = fd(fb)
// console.log(rfb);
// const rfz = fd(fz)
// console.log(rfz);

// console.log("Ende");

// const l = console.log;
// l("Hallo")

function ende() {
    console.log('Ende');
}

console.log('Start');
setTimeout(() => {
    console.log('Ende');
}, 2000);

