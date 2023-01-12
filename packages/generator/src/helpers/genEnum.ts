import { DMMF } from '@prisma/generator-helper'

export const genEnum = ({ name, values }: DMMF.DatamodelEnum) => {
  const enumValues = values.map(({ name }) => `${name}="${name}"`).join(',\n')
  // name to pascal case
  const pascalName = name.charAt(0).toUpperCase() + name.slice(1)
  const camelName = name.charAt(0).toLowerCase() + name.slice(1)

  return `
    import * as z from "zod";

    export const ${camelName} = [${values
    .map((v) => `"${v.name}"`)
    .join(',\n')}] as const;

    export type ${pascalName} = typeof ${camelName}[number]

    export const ${camelName}Schema = z.enum(${camelName})
  `
}
