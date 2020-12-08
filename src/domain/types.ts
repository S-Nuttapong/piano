
//Option type is union type represent value of TEntity or null (we are not sure, it could be either)
//TEntity is just generic T type, this is more verbose (explicit) for readability only
//so depend on you what you want to use T or TEntity
export type Optional<TEntity> = TEntity | null