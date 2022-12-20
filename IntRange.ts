import { Enumerate } from "..."


// number: IntRange must be (F <= number <= T)
type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
