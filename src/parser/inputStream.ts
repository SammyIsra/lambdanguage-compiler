// Input Stream as defined in http://lisperator.net/pltut/parser/input-stream
// This stage will take the input string and make it easier for us to consume it character by character

/** Creates an input stream that provides methods to read the input string */
export function createInputStream(input: string) {
  /** Current position on the stream */
  let position = 0;
  /** Current line */
  let line = 1;
  /** Current column */
  let column = 0;

  return {
    /** Returns the next character on the input string */
    next() {
      const char = input[position++];
      if (char === "\n") {
        line++;
        column = 0;
      } else {
        column++;
      }
      return char;
    },

    /** Shows the next character on the input string */
    peek() {
      return input[position];
    },

    /** Determines if we are at the end of the file */
    eof() {
      this.peek() === undefined;
    },

    /** Throws an error */
    croak(msg: string = "Unknown Error") {
      throw new Error(`Input Stream Error | ${msg}, Ln ${line}, Col ${column}`);
    }
  };
}
