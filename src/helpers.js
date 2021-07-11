
function choice(items) {
    const maxIndex = items.length;
    const randomIndex = Math.floor(Math.random() * maxIndex);
    return items[randomIndex];
}

function remove(items, item) {
    const foundIndex = items.indexOf(item);
    if (foundIndex === -1) {
        return undefined;
    } else {
        items.splice(foundIndex, 1)
        return items;
    }
}

export { choice, remove };