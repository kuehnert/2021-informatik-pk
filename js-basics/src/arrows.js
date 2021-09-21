function fa(params) {
    return "AAAAAA" + params + "AAAAA";
}

const fb = (params) => {
    return "CCCCCC" + params + "CCCCC";
};

const fc = (params) => "CCCCCC" + params + "CCCCC";

const dup = (p) => 2*p;

console.log(fa("Holger"));
console.log(fb("Holger"));
console.log(dup(4));

// Functional Components mit Hooks
