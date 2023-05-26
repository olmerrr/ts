// type guards - это и есть сужение типов
export type Fish = {
  swim: () => void
}
export type Bird = {
  fly: () => void
}
// type gurd это когда от функции мы ожидаем в итоге получить непривычный тип как:  pet is Fish
function isFish(pet: Fish | Bird): pet is Fish {
  // as утверждение означает используй данную запись как Fish
  return (pet as Fish).swim !== undefined
}
function isBird(pet: Fish | Bird): pet is Bird {
  // as утверждение означает используй данную запись как Bird
  return (pet as Bird).fly !== undefined

}

// type guards