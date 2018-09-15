/**
 * we know that multipling a number
 * with a string results in a NaN
 */
"123" * "test"

// the above is the same as
parseInt("123") * parseInt("test")

// however, if we use numbers.
// this is the result

parseInt("123") * parseInt("123") // -> 15129
