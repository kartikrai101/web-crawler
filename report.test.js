const {sortPages} = require('./report')
const {test, expect} = require('@jest/globals')

test('sortPages', () => {
    const input = {
        'https://wagslabe.dev/path' : 1,
        'https://blog.boot.dev' : 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://blog.boot.dev', 3],
        ['https://wagslabe.dev/path', 1]
    ];

    expect(actual).toEqual(expected)
})