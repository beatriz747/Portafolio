
function assetUrl(path) {
    const arr = [process.env.PUBLIC_URL, 'assets'];
    const trimmedPath = path.startsWith('/') ? path.substring(1) : path;
    arr.push(trimmedPath);
    return arr.join('/');
}

export { assetUrl };
