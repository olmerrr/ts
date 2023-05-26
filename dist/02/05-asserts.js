"use strict";
function assertDisplayName(user) {
    if (!user.displayName) {
        throw new Error("user don't have displayName");
    }
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase() + " hello");
}
// asserts - это выброс ошщибки при определенных условиях
