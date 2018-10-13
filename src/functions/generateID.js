export function generateID (type) {
    let text = 'Juiceboxes' + type + '-' + new Date().getTime() + Math.random().toString(36).slice(2);
    return text;
}
