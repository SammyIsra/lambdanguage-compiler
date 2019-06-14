// All types used in the Parser

// Tuple of literals
/** List of punctuation available in out language */
export const Punctuation = ["{", "}", "[", "]", "(", ")", ",", ";"] as const;

export function isPunctuation(
  candidate: unknown
): candidate is typeof Punctuation[number] {
  return Punctuation.includes(candidate as any);
}

interface PunctuationToken {
  type: "punc";
  // Getting the possible values from the typeof the Punctuation tuple. This happens again later.
  value: typeof Punctuation[number];
}

interface NumberToken {
  type: "number";
  value: number;
}

interface StringToken {
  type: "string";
  value: string;
}

/** List of keywords available in our language */
export const Keywords = [
  "λ",
  "lambda",
  "if",
  "then",
  "else",
  "true",
  "false"
] as const;

export function isKeyword(
  candidate: unknown
): candidate is typeof Keywords[number] {
  return Keywords.includes(candidate as any);
}

interface KeywordToken {
  type: "kw";
  value: typeof Keywords[number];
}

interface IdentifierToken {
  type: "var";
  value: string;
}

/** List of valid operators of our language */
export const Operators = [
  "+",
  "-",
  "*",
  "/",
  "%",
  "=",
  "&",
  "|",
  "<",
  ">",
  "!"
] as const;

export function isOperator(
  candidate: unknown
): candidate is typeof Operators[number] {
  return Operators.includes(candidate as any);
}

interface OperatorToken {
  type: "op";
  value: typeof Operators[number];
}

export type Token =
  | PunctuationToken
  | NumberToken
  | StringToken
  | KeywordToken
  | IdentifierToken
  | OperatorToken;
