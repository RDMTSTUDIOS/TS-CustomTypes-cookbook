import { Enumerate } from "..."

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
