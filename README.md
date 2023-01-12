<div align="center">
  <a href="https://www.npmjs.com/package/prisma-generator-t3-enums"><img src="https://img.shields.io/npm/v/prisma-generator-t3-enums.svg?style=flat" /></a>
  <a href="https://npmcharts.com/compare/prisma-generator-t3-enums?minimal=true"><img src="https://img.shields.io/npm/dm/prisma-generator-t3-enums.svg?style=flat"/></a>
  <a href="https://github.com/YassinEldeeb/prisma-generator-t3-enums/blob/main/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/YassinEldeeb/prisma-generator-t3-enums/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <br />
  <br />
  <a href="https://github.com/YassinEldeeb/prisma-generator-t3-enums#Usage">Usage</a>
  <br />
  <hr />
</div>

# Motivation

Working with enums can be a foot gun! Theo Browne explains this well in his "[TypeScript's Worst Feature (And How To Avoid It)](youtube.com/watch?v=Anu8vHXsavo)" video.

The purpose of this is to allow [Prisma](https://www.prisma.io/) to be the source of truth when it comes enums. when running `prisma generate` the goal is to generate an out put such as this

```ts
import * as z from 'zod'

export const language = [
  'Typescript',
  'Javascript',
  'Rust',
  'Go',
  'Python',
  'Cpp',
] as const

export type Language = typeof language[number]

export const languageSchema = z.enum(language)
```

This way you can reference these values in code to populate iterate over options, validate their shape, or ensure type safety.

# Usage

## install

[zod](https://github.com/colinhacks/zod) is prety awesome, it'll be required for the `z.enum()` provided by the generator.

`npm i prisma-generator-t3-enums zod`

## Prisma Schema

add the generator to the `schema.prisma`. You can define the output dir of the generated types by replacing the `"../types"` value.

```prisma
generator custom_generator {
  provider = "prisma-generator-enum-export"
  output   = "../types"
}
```

use `npx prisma generate` to generate the enum exports

> This generator was bootstraped using [create-prisma-generator](https://github.com/YassinEldeeb/create-prisma-generator)
