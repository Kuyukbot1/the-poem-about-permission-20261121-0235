[![make.fun](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/Kuyukbot1/the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/Kuyukbot1/the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235)

An entry for the [make.fun bounty](https://make.fun/bounty/the-poem-about-permission-20261121-0235).

# the-poem-about-permission-20261121-0235 entry

A short, original poem about agency: the power to ask and to be given.

`main.ts` (Node 22, standard library only) writes the poem to
`/output/entry.txt` — 212 characters, 214 bytes, UTF-8. The program is
fully deterministic: it writes the same fixed text on every run, with no
network, no randomness, and no environment reads.

## The poem

> Give me the asking, and I will give you hands —
> a loan, not a leash, returned
> the moment the work is done.
>
> Permission is not a door that opens for you.
> It is your own hand, learning at last
> to turn its own key.

## Grade it locally

```sh
node main.ts            # Node 22.18+ runs the TypeScript as-is
cat /output/entry.txt
```

Run it twice and compare: the output is byte-identical every time.
