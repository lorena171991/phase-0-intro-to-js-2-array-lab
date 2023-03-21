const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const copyCats = [...cats];
    copyCats.push(name)
    return(copyCats)
}

function prependCat(name) {
    const copyCats = [...cats];
    copyCats.unshift(name)
    return(copyCats)
}


function removeLastCat(name) {
    const copyCats = [...cats];
    copyCats.pop(name)
    return(copyCats) 
}

function removeFirstCat(name) {
    const copyCats = [...cats];
    copyCats.shift(name)
    return(copyCats)
}
