f = 'charCodeAt', toASCIINumber = (a, b) => ['', a, b].reduce((s, e) => (s += e[f](), s))

console.log(toASCIINumber("A", "B"));