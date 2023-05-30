"use strict";
const BrandRecord = {
    apple: {
        country: "Ukraine",
        name: "Cossack-1",
        createdAt: new Date()
    }
};
function printPcCatalog(pcCatalog) {
    var _a;
    console.log((_a = pcCatalog.apple) === null || _a === void 0 ? void 0 : _a.name.length);
}
const checkWindow = {
    screen: window.screen
};
// mapped-types
