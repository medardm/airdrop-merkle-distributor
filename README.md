# @uniswap/merkle-distributor

# 📦 A modified merkle-distributor from uniswap that can be used to generate merkle distributor in projects.

### to those who have used the original package one change to take note of:
- The `OldFormat` type now accepts a hex string only for the amount same as the new format (check `old_format_example.json`), this is to ensure accuracy with computation especially when dealing with an amount with decimals places in the project side. 

# Local Development

The following assumes the use of `node@>=18`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`
