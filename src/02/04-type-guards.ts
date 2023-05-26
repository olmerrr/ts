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
  // Оператор as позволяет сделать утверждение, что та или иная переменная является конкретным типом.
  // Он позволяет делать сужение типа для any и unknown, а также для union типов.
  return (pet as Fish).swim !== undefined
}
function isBird(pet: Fish | Bird): pet is Bird {
  // as утверждение означает используй данную запись как Bird
  return (pet as Bird).fly !== undefined

}
  interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  // чтобы вернуть булевое значение я добавил !!
  return !!order && "email" in order
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return !!order && "callerNumber" in order
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}

// type guards