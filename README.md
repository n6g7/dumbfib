# Dumbfib

Run with `npm start`.
Request using query parameters: `http://localhost/?n=10`.
That's it.

On a `t2.micro` instance:

| n   | time (avg) | Peak CPU % |
| --- | ---------- | ---------- |
| 0   | 0.009ms    | ε (< 1%)   |
| 10  | 0.011ms    | ε (< 1%)   |
| 20  | 0.135ms    | ε (< 1%)   |
| 30  | 14.268ms   | 2%         |
| 40  | 1.761s     | 100%       |
| 50  | ∞ (>30s)   | 100%       |