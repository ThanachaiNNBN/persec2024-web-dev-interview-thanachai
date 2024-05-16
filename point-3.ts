enum TextCompare {
    a = 'z',
    b = 'y',
    c = 'x',
    d = 'w',
    e = 'v',
    f = 'u',
    g = 't',
    h = 's',
    i = 'r',
    j = 'q',
    k = 'p',
    l = 'o',
    m = 'n',
    n = 'm',
    o = 'l',
    p = 'k',
    q = 'j',
    r = 'i',
    s = 'h',
    t = 'g',
    u = 'f',
    v = 'e',
    w = 'd',
    x = 'c',
    y = 'b',
    z = 'a'
}

export class ReverseEncoder{

    encode(data: string): string{
        const charList = data.split('');
        const mapText = charList.reduce((prev, curr) => {
            const text = ( TextCompare[curr.toLowerCase()] ) ? TextCompare[curr.toLowerCase()] : ",";
            const toUpper = (curr == curr.toUpperCase()) ? text.toUpperCase() : text;
            return prev + toUpper;

        },'');

        const alternate = mapText.split(',').sort((a,b) => a.localeCompare(b));
        return alternate.toString().replace(/,/g, ' ');
    }

    decode(data: string): string{
        const charList = data.split(' ').sort((a,b) => b.localeCompare(a));
        const text = charList.toString().replace(/,/g, ' ');

        return text.split('').reduce((prev, curr) => {
            const text = (TextCompare[curr.toLowerCase()] ) ? TextCompare[curr.toLowerCase()] : " ";
            const toUpper = (curr == curr.toUpperCase()) ? text.toUpperCase() : text;
            return prev + toUpper;
        },'');
    }
}