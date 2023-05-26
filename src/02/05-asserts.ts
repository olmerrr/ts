// asserts - это выброс ошщибки при определенных условиях
type NewUser = {
  name: string,
  displayName: string | null,
}

function assertDisplayName(user: NewUser):asserts user is NewUser & {displayName: string} {
  if (!user.displayName) {
    throw new Error("user don't have displayName")
  }
}
function logUserByDisplayName(user: NewUser) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase() + " hello");
}
// asserts - это выброс ошщибки при определенных условиях
