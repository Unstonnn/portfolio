const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('fr')) {
    window.location.href = "/fr";
}
else {
    window.location.href = "/en";
}