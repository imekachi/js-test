import { plus } from './helpers/plus'

export const sum = (...numbers) => numbers.reduce((result, number) => plus(result, number), 0)