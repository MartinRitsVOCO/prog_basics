function camelToTitleCase(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1).replace(/([A-Z])/g, ' $1');
}