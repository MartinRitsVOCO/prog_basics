function camelToTitleCase(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1).replace(/([A-Z]+)/g, function(match, match2, offset) {
        if (offset === 0 && /[A-Z]/.test(str[0])) {
            if (match.length > 1 && offset + match.length + 1 < str.length) {
                return match.slice(0, -1) + " " + match[match.length - 1];
            }
            return match;
        }
        if (match.length > 1 && offset + match.length + 1 < str.length) {
            return ' ' + match.slice(0, -1) + " " + match[match.length - 1];
        }
        return ' ' + match;
    });
}