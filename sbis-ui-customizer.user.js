// ==UserScript==
// @name          SBIS UI-Customizer v1.4.15.rc1
// @namespace     SBIS
// @version       1.4.15.rc1
// @date          24.11.2020 19:04:07
// @author        Новожилов И. А.
// @description   Пользовательская настройка web интерфейса сайтов SBIS
// @homepage      https://github.com/sbis-team/ui-customizer
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR42s3TOQvCQBAF4HjggWcnaCF4K1YiaQTvwhiiphBBsBAsLcT/X/gW3sIoum6ZgQ8yJDM77G4cJ2qxgrTIO6QjB3NTgw1kRN4jHXlYmxqcoS7yEelowfZXsRptCguofpmgCQGEnCIli2uwFPkN4qJBEk7i/QEasoH64AJZTqDHVE3HfPZZNIAra95CbdAdhpBgscvVJhADD3amTfQ4RYWFOh5Q5iK+7TEG3PWQ5291jHtOoOMIXZEX/k3whOLHReqLvMRFrK9ym+RVnkXr73sBExASEE+L5FQAAAAASUVORK5CYII=
// @icon64        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADzElEQVR42u1aW0hUQRje9ZpaZhJZUZB2o0QiiiK1ICKkGyWVUBQYFPRglvmgkfTQxaCLmZRBhZQFBZb1kiBFQVEkQeBDdLGCHorQLlDQvez74Vs4CLs7szvretz54OPsOeefmX++88+cf+asx2NhYWFhYWFhoY/h4G0eQ8VOcEcY5TPpw9BoCDAB7OUxVJwjQ8Uk+jDOCmAFsAJYAawAVgD3CdAKXo1lAZ6BT90qQDJYAyaFUccFMlSk0IfE/uz4GLAC3MZzOW4HR/XjHCA+lIOlPK+gDyMj2XF50rXgT4ZdG69f5/kP3k+KoADyxI+Cv9hmK6+38fwbeAAcYrrzqVx0/AMbOfacyGVHxIk7tDctQAbYQR9OgDl97k8Dm+nDA9BrUoCLfMJFQeyK+XSaDQsgnbkB/gaXB7FdzfaNCbCIqm5RtC+nfaFBAYpZZ5nmJG1kcrwGvgTjFO0TwDfgJYMC3ARfgPEafreDl8PtvITRF7Bes5yM0Q8KYagiQCIn3oOaPpwFe8IVIJ2hV6lZroLl0g0IMJ51bdb0YRfLpYYjQDIr2a1ZrpLlMgwIMJZ1bdX0odqEAB6O52bNMk0MPxNDQOaer+BJTR/Og29NTIKnOZ5TFO3TwI8UQWWcnlGwawG7WbcKhoGfwVMmBMhj8lGraH8M/ANODzKxzQJHg1ngTL49/GEew7lB0YcG5gyTTeUC+x1zQVyAUN0TZM6QJ7iXEdXLpKWEv7tZ3t+YraddTQAf5DW5j3bVJjNBafA4K34MrnM4Ksf14CPeP+xn7Evq+pzR1MLOJ5KS6Fxh+Sdgtp/ONTlS3bUMdV+avIG+yf1DplNhH1bQQWmkk9eqeC6dWxWgbB0nxvkBbBaCn8AuP28QL8V+xTY7eL3L4cPKSC+HxYkF4GLHhDNbIVOUFVqmQv35HL+NQSJSUu25DuHyNbJVI5C197sIrcHrmP0FEyyLPowYyFtiS8CHmguTiax7zUDeElMV4Aj4PYTw7FGYyV0hQAOTEl28VkjBXSFAleLCqG+iJFGzcTAIMId2JRp1L1Ws2xUCeJmgdCpOhAlMqtoVbF3zYUTe2X+ZyQXa1Ynn4kjygBmDSQAP1/Nif5cJjLdPlBSA95gqlyrW6bpPY5Iqv2e5+47rvnWEJDXLNOpz5bfBNG5vye5xEVNq2ULbFMLujf08Hk0BprLxKVEUII8+ZEdDgEKP+geQSAng2ynKjVUBojoECth4QawKkGNg/LlagJh/C1gBYl0A+Zv8Lc11fl9INlgWRvlM+hCVv8tbWFhYWFhYuBv/AfqkHP1yGxiiAAAAAElFTkSuQmCC
// @supportURL    https://github.com/sbis-team/ui-customizer/issues
// @include       *online.sbis.ru/*
// @exclude       *online.sbis.ru/obj/*
// @exclude       *online.sbis.ru/shared/*
// @exclude       *online.sbis.ru/docview/*
// @exclude       *online.sbis.ru/auth/*
// @exclude       *online.sbis.ru/webrtc/*
// @exclude       *online.sbis.ru/carry.html*
// @exclude       *online.sbis.ru/presto.html*
// @exclude       *online.sbis.ru/booking.html*
// @run-at        document-start
// @grant         unsafeWindow
// @grant         GM_setClipboard
// @noframes
// ==/UserScript==
(function (window, verinfo, settings, sources) {
'use strict';
var JSModules = {};
window.UICustomizerDefine = UICustomizerDefine;
window.UICustomizerRequire = UICustomizerRequire;
window.UICustomizerEvent = UICustomizerEvent;
var globalContainer = document.createElement('userscript');
globalContainer.id = 'SBIS-UI-Customizer';
globalContainer.setAttribute('data-vdomignore', 'true');
document.getElementsByTagName('html')[0].appendChild(globalContainer);
document.addEventListener('DOMNodeInserted', function () {
if (!document.querySelector('#' + globalContainer.id)) {
document.getElementsByTagName('html')[0].appendChild(globalContainer);
}
}, false);
UICustomizerRequire(['Engine'], function (Engine) {
Engine.init(verinfo, settings, sources, {
GM_info: GM_info,
GM_setClipboard: GM_setClipboard
});
});
function UICustomizerDefine(name, dependences, constructor) {
if (typeof dependences === 'function') {
constructor = dependences;
dependences = [];
}
UICustomizerRequire(dependences, function () {
try {
JSModules[name] = constructor.apply(null, dependences);
} catch (err) {
console.error(name, '-', err);
}
});
}
function UICustomizerRequire(dependences, func) {
if (typeof dependences === 'function') {
func = dependences;
dependences = [];
}
for (let i = 0; i < dependences.length; i++) {
let name = dependences[i];
if (!(name in JSModules)) {
let module = document.createElement('script');
module.id = `SBIS-UI-Customizer-${name}-script`;
module.className = 'SBIS-UI-Customizer';
module.type = 'text/javascript';
module.innerHTML = sources.js[name + '.js'];
globalContainer.appendChild(module);
}
if (typeof (dependences[i] = JSModules[name]) !== 'object') {
console.error('Модуль', name, 'недоступен');
return false;
}
}
func.apply(null, dependences);
}
function UICustomizerEvent(moduleName, eventName) {
var args = [];
for (let i = 2; i < arguments.length; i++) {
args.push(arguments[i]);
}
UICustomizerRequire([moduleName], function (module) {
try {
module[eventName].apply(module, args);
} catch (err) {
console.error(moduleName + '.' + eventName, '-', err);
}
});
}
})(unsafeWindow , {
"version": "1.4.15.rc1",
"date": "24.11.2020 19:04:07",
"notes": {
"added": [],
"changed": [],
"fixed": [
"Исправлено отображение новогодней темы"
],
"issues": []
}
} , (() => {
return {
'HomePage': {
'title': 'Главная страница',
'view': 'section',
'options': {
/*
'HideAccordion': {
'title': 'Скрыть пункты аккордеона',
'view': 'group',
'module': 'AccordionHideItems',
'options': {
'Main': {
'title': 'Основные',
'view': 'block',
'options': {
'Documents': {
'title': 'Документы',
'view': 'option',
'type': 'boolean',
'value': false
},
'Staff': {
'title': 'Сотрудники',
'view': 'option',
'type': 'boolean',
'value': false
},
'Tasks': {
'title': 'Задачи',
'view': 'option',
'type': 'boolean',
'value': false
},
'Contacts': {
'title': 'Контакты',
'view': 'option',
'type': 'boolean',
'value': false
},
'Calendar': {
'title': 'Календарь',
'view': 'option',
'type': 'boolean',
'value': false
},
'MyPage': {
'title': 'Моя страница',
'view': 'option',
'type': 'boolean',
'value': false
},
'OurCompany': {
'title': 'Наша компания',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Other': {
'title': 'Прочие',
'view': 'block',
'options': {
'Company': {
'title': 'Компании',
'view': 'option',
'type': 'boolean',
'value': false
},
'Business': {
'title': 'Бизнес',
'view': 'option',
'type': 'boolean',
'value': false
},
'Accounting': {
'title': 'Учет',
'view': 'option',
'type': 'boolean',
'value': false
},
'UTS': {
'title': 'УЦ',
'view': 'option',
'type': 'boolean',
'value': false
},
'Telephony': {
'title': 'Телефония',
'view': 'option',
'type': 'boolean',
'value': false
},
'Retail': {
'title': 'Магазин',
'view': 'option',
'type': 'boolean',
'value': false
},
'Presto': {
'title': 'Presto',
'view': 'option',
'type': 'boolean',
'value': false
},
'Booking': {
'title': 'Салон',
'view': 'option',
'type': 'boolean',
'value': false
}
}
}
}
},
*/
'HideOther': {
'title': 'Скрыть прочие блоки',
'view': 'group',
'module': 'OtherBlocksHide',
'options': {
'Banners': {
'title': 'Баннеры',
'view': 'block',
'options': {
'Owl': {
'title': 'Сова > Как просто',
'view': 'option',
'type': 'boolean',
'value': false
},
'HideMaximumButton': {
'title': 'Переключатель аккордеона',
'view': 'option',
'type': 'boolean',
'value': false
}
}
}
}
},
/* 'Modify': {
'title': 'Изменить внешний вид',
'view': 'group',
'module': 'HomePageModify',
'options': {
'News': {
'title': 'Новости',
'view': 'block',
'options': {
'InOneColumn': {
'title': 'Лента в одну колонку',
'view': 'option',
'type': 'boolean',
'value': false
}
},
'SmallImg': {
'title': 'Уменьшить фото новости',
'view': 'option',
'type': 'boolean',
'value': false
},
'HideAttachments': {
'title': 'Скрыть вложения под спойлер',
'view': 'option',
'type': 'boolean',
'value': false
},
'HideFooterBtn': {
'title': 'Скрыть оценки и репосты',
'view': 'option',
'type': 'boolean',
'value': false
},
'SlimBorder': {
'title': 'Тонкие границы новости',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Other': {
'title': 'Прочее',
'view': 'block',
'options': {
'HideHeaderText': {
'title': 'Скрыть текст кнопок в шапке',
'view': 'option',
'type': 'boolean',
'value': false
}
}
}
}
} */
}
},
'CardTask': {
'title': 'Карточка задачи и ошибки',
'view': 'section',
'options': {
'TaskToolbarBtns': {
'title': 'Кнопки в шапке',
'view': 'group',
'module': 'TaskToolbarBtns',
'options': {
'Hide': {
'title': 'Скрыть базовые',
'view': 'block',
'options': {
'Print': {
'title': 'Распечатать',
'view': 'option',
'type': 'boolean',
'value': false
},
'LinkOld': {
'title': 'Получить ссылку (старая)',
'view': 'option',
'type': 'boolean',
'value': false
},
'Delete': {
'title': 'Удалить',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Add': {
'title': 'Добавить новые',
'view': 'block',
'options': {
'BranchName': {
'title': 'Имя ветки',
'view': 'option',
'type': 'boolean',
'value': false
},
'СommitMsg': {
'title': 'Комментарий для коммита',
'view': 'option',
'type': 'boolean',
'value': false
},
'PullRequest': {
'title': 'Создать MR (Beta)',
'view': 'option',
'type': 'boolean',
'value': false
},
'TaskURL': {
'title': 'Ссылка на задачу',
'view': 'option',
'type': 'boolean',
'value': false
}
}
}
}
}
}
},
'CardMR': {
'title': 'Карточка MR',
'view': 'section',
'options': {
'MRToolbarBtns': {
'title': 'Кнопки в шапке',
'view': 'group',
'module': 'MRToolbarBtns',
'options': {
'Hide': {
'title': 'Скрыть базовые',
'view': 'block',
'options': {
'Print': {
'title': 'Распечатать',
'view': 'option',
'type': 'boolean',
'value': false
},
'LinkOld': {
'title': 'Получить ссылку (старая)',
'view': 'option',
'type': 'boolean',
'value': false
},
'Delete': {
'title': 'Удалить',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Add': {
'title': 'Добавить новые',
'view': 'block',
'options': {
'TaskURL': {
'title': 'Ссылка на MR',
'view': 'option',
'type': 'boolean',
'value': false
}
}
}
}
}
}
},
'CardErrand': {
'title': 'Карточка поручения и пр.',
'view': 'section',
'options': {
'ErrandToolbarBtns': {
'title': 'Кнопки в шапке',
'view': 'group',
'module': 'ErrandToolbarBtns',
'options': {
'Hide': {
'title': 'Скрыть базовые',
'view': 'block',
'options': {
'Print': {
'title': 'Распечатать',
'view': 'option',
'type': 'boolean',
'value': false
},
'LinkOld': {
'title': 'Получить ссылку (старая)',
'view': 'option',
'type': 'boolean',
'value': false
},
'Delete': {
'title': 'Удалить',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Add': {
'title': 'Добавить новые',
'view': 'block',
'options': {
'TaskURL': {
'title': 'Ссылка на задание',
'view': 'option',
'type': 'boolean',
'value': false
},
'CopyInfo': {
'title': 'Копировать описание',
'view': 'option',
'type': 'boolean',
'value': false
}
}
}
}
}
}
},
'Themes': {
'title': 'Темы оформления',
'view': 'section',
'options': {
'ChristmasStyle': {
'title': 'Новогодний Онлайн',
'module': 'ChristmasStyle',
'view': 'group',
'options': {
'Accordion': {
'title': 'Аккордеон',
'view': 'block',
'options': {
'MenuIcons': {
'title': 'Иконки в аккордеоне',
'view': 'option',
'type': 'boolean',
'value': false
},
'MenuIconsColor': {
'title': 'Иконки в аккордеоне (цветные)',
'view': 'option',
'type': 'boolean',
'value': false
},
'TreeArrow': {
'title': 'Ёлочки вместо стрелок',
'view': 'option',
'type': 'boolean',
'value': false
},
'ChristmasTree': {
'title': 'Ёлка под меню',
'view': 'option',
'type': 'boolean',
'value': false
},
}
},
'Logo': {
'title': 'Логотип',
'view': 'block',
'options': {
'SantaHat': {
'title': 'Новогодняя шапка',
'view': 'option',
'type': 'boolean',
'value': false
},
'Bird': {
'title': 'Птица',
'view': 'option',
'type': 'boolean',
'value': false
},
'Owl': {
'title': 'Сова > Как просто',
'view': 'option',
'type': 'boolean',
'value': false
}
}
}
}
}
}
}
};
/* eslint-disable-next-line semi */
})()
, {'css':{'ChristmasStyle-Accordion-ChristmasTree.css':`
.OnlineSidebar-Sidebar__accordion {
background-image: url("{{christmas-tree-big}}") !important;
background-repeat: no-repeat;
background-position-y: calc(100% - 24px);
background-position-x: center;
}
.acc-menu-container {
margin-bottom: 200px;
}
.online-howEasy {
max-height: 58px;
}
.online-Sidebar {
background: #2c3e50c8 !important;
}
.NavigationPanels-Accordion__item {
background: none !important;
}
.NavigationPanels-Accordion__item:hover {
background-color: #465e7399 !important;
}
.NavigationPanels-Accordion__item_activeMenu .nav-menu-counter__shadow::after,
.NavigationPanels-Accordion__item_level-2 .nav-menu-counter__shadow::after,
.NavigationPanels-Accordion__item_level-3 .nav-menu-counter__shadow::after,
.NavigationPanels-Accordion__item_level-4 .nav-menu-counter__shadow::after,
.NavigationPanels-Accordion__item:hover .nav-menu-counter__shadow::after,
.NavigationPanels-Accordion__item_activeMenu .nav-menu-counter__shadow,
.NavigationPanels-Accordion__item_level-2 .nav-menu-counter__shadow,
.NavigationPanels-Accordion__item_level-3 .nav-menu-counter__shadow,
.NavigationPanels-Accordion__item_level-4 .nav-menu-counter__shadow,
.NavigationPanels-Accordion__item:hover .nav-menu-counter__shadow,
.NavigationPanels-Accordion__title_activeMenu::after,
.NavigationPanels-Accordion__title_activeMenu,
.NavigationPanels-Accordion__item_activeMenu .nav-menu-counter__shadow,
.NavigationPanels-SubMenu__separator::after,
.NavigationPanels-Accordion__item:hover .NavigationPanels-Accordion__title_level-1::after,
.nav-menu-counter__separator::after,
.nav-menu-counter__shadow,
.nav-menu-counter__shadow::after {
background: none !important;
border-left: none !important;
}
.NavigationPanels-Accordion__title_level-1::after {
width: 0;
}
.OnlineSidebar-Sidebar__header,
.OnlineSidebar-Sidebar__accordion>.controls-Scroll__content {
background: #2c3e5022;
}
.OnlineSidebar-Sidebar {
background-repeat: repeat-y;
background-image: url('data:image/jpeg;base64,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') !important;
}
`,'ChristmasStyle-Accordion-MenuIcons.css':`
.acc-contacts:before,
.acc-groups:before,
.acc-icon-Ereport:before,
.acc-icon-ereport:before,
.acc-icon-cashbox:before,
.acc-auction:before,
.acc-sales:before,
.acc-purchases:before,
.acc-icon-Purchases:before,
.acc-nomenclature:before,
.acc-egais:before,
.acc-icon-Mercury:before,
.acc-market:before,
.acc-icon-Stock:before,
.acc-icon-Production:before,
.acc-icon-Money:before,
.acc-instructStorage:before,
.acc-icon-work:before,
.acc-business:before,
.acc-accounting:before,
.acc-icon-staff:before,
.acc-documents:before,
.acc-icon-contragents:before,
.acc-icon-calendar:before,
.acc-icon-calendar:after,
.acc-icon-Clients:before,
.acc-presto:before,
.acc-retail:before,
.acc-booking:before,
.acc-ca_navication:before {
content: '' !important;
}
.acc-icon-small,
.acc-icon {
background-repeat: no-repeat !important;
height: 24px !important;
width: 24px !important;
margin-left: 8px !important;
margin-right: 8px !important;
}
.OnlineSidebar-Sidebar__width_minimal .acc-icon {
margin-left: 12px !important;
margin-right: 12px !important;
}
.acc-contacts {
background-image: url("{{christmas-card}}") !important;
}
.acc-icon-work {
background-image: url("{{christmas-sock}}") !important;
}
.acc-icon-staff {
background-image: url("{{gingerbread-man}}") !important;
}
.acc-documents {
background-image: url("{{christmas-card2}}") !important;
}
.acc-icon-calendar {
background-image: url("{{christmas-day}}") !important;
}
.acc-icon-contragents {
background-image: url("{{snow-globe}}") !important;
}
.acc-accounting {
background-image: url("{{christmas-ball}}") !important;
}
.acc-business {
background-image: url("{{cabin}}") !important;
}
.acc-ca_navication {
background-image: url("{{light}}") !important;
}
.acc-icon-Ereport,
.acc-icon-ereport {
background-image: url("{{christmas-card3}}") !important;
}
.acc-auction {
background-image: url("{{mitten}}") !important;
}
.acc-icon-Purchases,
.acc-purchases {
background-image: url("{{shopping-bag}}") !important;
}
.acc-sales {
background-image: url("{{sale}}") !important;
}
.acc-egais {
background-image: url("{{mug}}") !important;
}
.acc-icon-Mercury {
background-image: url("{{reindeer}}") !important;
}
.acc-market {
background-image: url("{{champagne}}") !important;
}
.acc-nomenclature {
background-image: url("{{gift}}") !important;
}
.acc-icon-Clients {
background-image: url("{{mittens}}") !important;
}
.acc-icon-cashbox {
background-image: url("{{sleigh}}") !important;
}
.acc-icon-Stock {
background-image: url("{{gift2}}") !important;
}
.acc-icon-Production {
background-image: url("{{elf}}") !important;
}
.acc-icon-Money {
background-image: url("{{candy-cane}}") !important;
}
.acc-groups {
background-image: url("{{cane}}") !important;
}
.acc-instructStorage {
background-image: url("{{card}}") !important;
}
.acc-presto {
background-image: url("{{santa-claus}}") !important;
}
.acc-retail {
background-image: url("{{shopping-bag}}") !important;
}
.acc-booking {
background-image: url("{{gift3}}") !important;
}
`,'ChristmasStyle-Accordion-TreeArrow.css':`
.NavigationPanels-Counter__arrow:empty:before {
content: '';
width: 16px;
height: 16px;
background-image: url("{{tree}}") !important;
background-repeat: no-repeat;
}
.ws-is-hover .NavigationPanels-Counter__container_has-hover:hover:empty:before {
transform: rotate(25deg);
}
`,'ChristmasStyle-Logo-Bird.css':`
.onlineSidebar-SidebarLogo__default {
background-image: url("{{logo_penguin}}") !important;
background-repeat: no-repeat;
background-size: auto;
margin-top: 1px;
margin-bottom: 13px;
}
`,'ChristmasStyle-Logo-Owl.css':`
.hint-helpButton__button {
background-image: url("{{owl}}") !important;
background-repeat: no-repeat;
background-size: 38px;
}
.hint-helpButton__icon {
background: none;
}
`,'ChristmasStyle-Logo-SantaHat.css':`
.OnlineSidebar-Sidebar__logoWrapper {
background-image: url("{{santa-hat}}") !important;
background-repeat: no-repeat;
}
`,'HomePageModify-FixHeight.css':`
.sn-NewsPage__oneNews-contentArticle {
height: 20px;
}
.sn-NewsPage__oneNews-contentLogoBrif,
.sn-NewsPage__oneNews-contentText:not(.sn-NewsPage__oneNews-NewsOnlyMedia) {
min-height: 100px !important;
max-height: 100px !important;
}
.sn-NewsPage__oneNews-contentLogoBrif {
margin-bottom: 2px !important;
overflow: hidden;
}
.sn-NewsPage__oneNews-itemAll,
.sn-NewsPage__oneNews {
min-height: 156px;
}
`,'HomePageModify-HideAttachments.css':`
.sn-NewsPage__oneNews-contentCollage:before {
content: 'Показать вложения...';
color: #8991A9;
font-size: 12px;
}
.sn-NewsPage__oneNews-contentCollage {
height: auto !important;
margin-top: 0px;
display: inline-block;
margin: 0px 0px 2px 0px !important;
}
.sn-NewsPage__oneNews-contentCollage .socnet-collage,
.sn-NewsPage__oneNews-contentCollage .socnet-collage__content {
display: none;
}
.sn-NewsPage__oneNews-contentCollage:hover {
display: block;
z-index: 1;
position: relative;
}
.sn-NewsPage__oneNews-contentCollage:hover .socnet-collage,
.sn-NewsPage__oneNews-contentCollage:hover .socnet-collage__content {
display: block;
background: white;
border: 1px solid #f4f4f4;
}
`,'HomePageModify-HideAuthor.css':`
.sn-NewsPage__oneNews-headerPhoto,
.sn-NewsPage__oneNews-headerName,
.sn-NewsPage__oneNews-headerPosition,
.sn-NewsPage__oneNews-headerDestination,
.sn-NewsPage__repostHeader .sn-NewsPage__oneNews-headerDate,
.sn-NewsPage__oneNews-itemAll .sn-NewsPage__oneNews-repostComment,
.sn-NewsPage__oneNews-itemAll .sn-RepostIcon,
.sn-NewsPage__oneNews-itemAll .activity__ActivityMarker {
display: none !important;
}
.sn-NewsPage__oneNews>.sn-NewsPage__oneNews-itemAll {
padding: 3px 6px 3px 6px !important;
}
.sn-NewsPage__oneNews-headerTop,
.sn-NewsPage__oneNews-contentButtons div {
z-index: 1;
}
.sn-NewsPage__oneNews-header {
margin: 0px !important;
}
.sn-NewsPage__repostHeader,
.sn-NewsPage__oneNews-header,
.sn-NewsPage__oneNews-headerTop {
height: auto !important;
}
.sn-NewsPage .controls-ItemsToolbar {
top: 8px !important;
}
.sn-NewsPage .sn-DraftIcon,
.sn-NewsPage .sn-FavoriteIcon,
.sn-NewsPage .sn-PinIcon {
top: -4px !important;
right: 88px !important;
}
.np-View__twoColumns .np-News__item[style*="left: 0px"] .sn-DraftIcon,
.np-View__twoColumns .np-News__item[style*="left: 0px"] .sn-FavoriteIcon {
right: 85px !important;
}
.sn-NewsPage__oneNews-headerRead {
top: 0 !important;
margin-top: 0 !important;
background-color: #fff;
line-height: 16px;
padding-left: 80px;
}
.sn-NewsPage__oneNews-contentButtons div {
padding-top: 0px !important;
}
.sn-NewsPage__oneNews-headerDate {
max-width: none !important;
line-height: inherit !important;
margin-top: 0 !important;
}
`,'HomePageModify-HideFooterBtn.css':`
.sn-NewsPage__oneNews-footer {
display: none !important;
}
.sn-NewsPage__oneNews-itemAll {
padding: 3px 12px 3px 12px !important;
}
`,'HomePageModify-HideHeaderText.css':`
.onlinePage_Base_header>.controls-BaseButton .controls-BaseButton__text {
display: none !important;
}
`,'HomePageModify-SlimBorder.css':`
.sn-NewsPage__oneNews-itemAll {
margin-top: 0 !important;
border-radius: 0 !important;
}
.sn-NewsPage__oneNews-contentArticle {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
.np-View__twoColumns .np-News__item[style*="left: 0px"] .sn-NewsPage__oneNews-itemAll {
margin-right: 1px !important;
border-radius: 0 !important;
}
.np-View__twoColumns .np-News__item:not([style*="left: 0px"]) .sn-NewsPage__oneNews-itemAll {
margin-left: 0 !important;
}
.sn-NewsPage .controls-ItemsToolbar {
top: 14px;
}
`,'HomePageModify-SmallImg.css':`
img.sn-NewsPage__oneNews-contentLogo {
width: 64px !important;
height: 64px !important;
}
div.sn-NewsPage__oneNews-withLogo {
margin-left: 74px !important;
}
.sn-NewsPage__oneNews-contentLogoBrif,
.sn-NewsPage__oneNews-contentText:not(.sn-NewsPage__oneNews-NewsOnlyMedia) {
min-height: 64px !important;
max-height: 64px !important;
}
.sn-NewsPage__oneNews-itemAll,
.sn-NewsPage__oneNews {
min-height: 120px !important;
}
`,'SettingsButton.css':`
#SBIS-UI-Customizer-SettingsButton {
margin-bottom: 4px;
padding-bottom: 4px;
padding-top: 4px;
height: 100%;
font-size: 15px;
border-bottom: 1px solid #e4e4e4;
}
#SBIS-UI-Customizer-SettingsButton .row {
padding: 6px 0px 6px;
}
#SBIS-UI-Customizer-SettingsButton .row:hover {
cursor: pointer;
background: #F0F4FB;
}
#SBIS-UI-Customizer-SettingsButton .icon {
float: left;
margin: 2px 0px 0 15px;
height: 16px;
width: 16px;
}
#SBIS-UI-Customizer-SettingsButton .title {
margin-left: 37px;
}
#SBIS-UI-Customizer-SettingsButton .title:hover {
color: #313E78;
}
#SBIS-UI-Customizer-SettingsButton-Header {
float: right;
margin-right: 8px;
margin-top: 5px;
}
#SBIS-UI-Customizer-SettingsButton-Header .icon {
height: 16px;
width: 16px;
cursor: pointer;
}
#SBIS-UI-Customizer-SettingsButton .icon>svg,
#SBIS-UI-Customizer-SettingsButton-Header .icon>svg {
fill: #587AB0;
}
#SBIS-UI-Customizer-SettingsButton .icon>svg>g,
#SBIS-UI-Customizer-SettingsButton-Header .icon>svg>g {
stroke: #587AB0;
}
#SBIS-UI-Customizer-SettingsButton .icon:hover>svg,
#SBIS-UI-Customizer-SettingsButton-Header .icon:hover>svg {
fill: #313E78;
}
#SBIS-UI-Customizer-SettingsButton .icon:hover>svg>g,
#SBIS-UI-Customizer-SettingsButton-Header .icon:hover>svg>g {
stroke: #313E78;
}
.engine-OnlineBaseInnerMinCoreView__headerCell #SBIS-UI-Customizer-SettingsButton-Header {
float: left;
margin-top: 4px;
}
.engine-ViewSettingsWindow #SBIS-UI-Customizer-SettingsButton {
border-bottom: none;
border-top: 1px solid #e4e4e4;
margin-bottom: 0;
width: 100%;
}
`,'SettingsDialog.css':`
#SBIS-UI-Customizer-SettingsDialog-Area {
background: #FFFFFF;
border-left: 2px solid #DDDDDD;
border-bottom: 2px solid #DDDDDD;
border-bottom-left-radius: 5px;
position: absolute;
top: 0;
right: 0;
z-index: 1000000;
}
#SBIS-UI-Customizer-SettingsDialog {
width: 520px;
}
.SBIS-UI-Customizer-close-btn {
float: right;
font-size: 18px;
padding: 0px 4px;
margin: 10px 7px;
color: #999;
font-weight: bold;
cursor: pointer;
}
.SBIS-UI-Customizer-close-btn:hover {
color: #313e78;
}
#SBIS-UI-Customizer-SettingsDialog .link {
color: #05b;
outline: 0;
text-decoration: none;
cursor: pointer;
}
#SBIS-UI-Customizer-SettingsDialog .right {
float: right;
}
#SBIS-UI-Customizer-SettingsDialog>.header {
height: 24px;
padding: 9px;
border-bottom: 1px solid #EAEAEA;
}
#SBIS-UI-Customizer-SettingsDialog>.header .title {
font-weight: bold;
font-size: 20px;
color: #313e78;
margin-right: 12px;
}
#SBIS-UI-Customizer-SettingsDialog>.feedback {
position: absolute;
right: 32px;
height: 16px;
top: 14px;
display: inline-block;
}
#SBIS-UI-Customizer-SettingsDialog>.feedback i {
cursor: pointer;
margin-right: 4px;
height: 16px;
width: 16px;
display: inline-block;
}
#SBIS-UI-Customizer-SettingsDialog>.feedback i.separator {
width: 4px;
border-right: 1px solid #E4E4E4;
}
#SBIS-UI-Customizer-SettingsDialog>.feedback i svg {
fill: #587AB0;
}
#SBIS-UI-Customizer-SettingsDialog>.feedback i:hover svg {
fill: #FF7033;
}
#SBIS-UI-Customizer-SettingsDialog>.Settings-panel {
overflow-y: auto;
width: 100%;
}
.SBIS-UI-Customizer .SettingsDialog-section {
float: left;
width: 100%;
}
.SBIS-UI-Customizer .SettingsDialog-section:last-child>.header {
border-bottom: none;
border-bottom-left-radius: 3px;
}
.SBIS-UI-Customizer .SettingsDialog-section.active>.header {
background: #F3F3F3;
}
.SBIS-UI-Customizer .SettingsDialog-section>.header {
padding: 6px 12px;
cursor: pointer;
border-bottom: 1px solid #F5F5F5;
}
.SBIS-UI-Customizer .SettingsDialog-section>.header:hover {
background: #F0F5FB;
}
.SBIS-UI-Customizer .SettingsDialog-section>.header .title {
font-size: 18px;
color: #313E78;
font-weight: bold;
}
.SBIS-UI-Customizer .SettingsDialog-section .slider {
float: left;
width: 100%;
border-bottom: 1px solid #EAEAEA;
display: none;
}
.SBIS-UI-Customizer .SettingsDialog-section.active .slider {
display: block;
}
.SBIS-UI-Customizer .SettingsDialog-section:last-child .slider {
border-bottom: none;
}
.SBIS-UI-Customizer .SettingsDialog-group {
float: left;
width: 100%;
}
.SBIS-UI-Customizer .SettingsDialog-group>.box {
float: left;
width: 100%;
border-bottom: 1px solid #EAEAEA;
}
.SBIS-UI-Customizer .SettingsDialog-section .SettingsDialog-group:last-child>.box {
border-bottom: none;
}
.SBIS-UI-Customizer .SettingsDialog-group>.header {
border-bottom: 1px solid #F5F5F5;
}
.SBIS-UI-Customizer .SettingsDialog-group>.header .title {
font-size: 16px;
padding: 4px 12px;
display: inline-block;
}
.SBIS-UI-Customizer .SettingsDialog-block {
float: left;
width: 250px;
}
.SBIS-UI-Customizer .SettingsDialog-block>.title {
color: #313E78;
font-size: 14px;
font-weight: bold;
padding: 6px 12px 0;
display: inline-block;
}
.SBIS-UI-Customizer .SettingsDialog-block>.box {
padding: 0px 0px 6px 12px;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean label {
cursor: pointer;
display: inline-block;
padding: 2px 0;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean input {
-webkit-appearance: none;
/*-moz-appearance: none;*/
border: 1px solid #ADADAD;
vertical-align: middle;
height: 14px;
width: 14px;
position: relative;
cursor: pointer;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean label:hover input {
background: #F0F5FB;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean input:checked:after {
content: '\\2714';
font-size: 14px;
position: absolute;
left: 0;
color: #FF7033;
font-weight: bold;
line-height: 12px;
vertical-align: middle;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean span {
vertical-align: middle;
padding-left: 4px;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean label:hover span {
text-decoration: underline;
color: #FF7033;
}
.SBIS-UI-Customizer .SettingsDialog-footer {
background-color: #F8F8F8;
border-top: 1px solid #DDDDDD;
color: #8991A9;
padding: 12px;
}
`,'SocNet.css':`
.SBIS-UI-Customizer-SocNet-InputDialog {
background: #FFFFFF;
border-left: 2px solid #DDDDDD;
border-bottom: 2px solid #DDDDDD;
border-bottom-left-radius: 5px;
position: absolute;
top: 0;
right: 0;
z-index: 1000001;
}
.SBIS-UI-Customizer-SocNet-InputDialog>.header {
height: 24px;
padding: 9px;
border-bottom: 1px solid #EAEAEA;
}
.SBIS-UI-Customizer-SocNet-InputDialog>.header .title {
font-weight: bold;
font-size: 20px;
color: #313e78;
}
.SBIS-UI-Customizer-SocNet-InputDialog textarea {
width: 350px;
resize: none;
padding: 6px;
margin: 8px;
border: 1px solid #EAEAEA;
}
.SBIS-UI-Customizer-SocNet-InputDialog .send {
position: absolute;
top: 9px;
right: 44px;
padding: 2px 8px;
cursor: pointer;
border: 1px solid #ff7033;
border-radius: 16px;
}
.SBIS-UI-Customizer-SocNet-InputDialog .send:hover {
background: #FDECD9;
}
.SBIS-UI-Customizer-SocNet-InputDialog .send:active {
background: #FDD2C0
}
`,'TaskToolbarBtns-ExtraButtons.css':`
.SBIS-UI-Customizer-TaskToolbarBtns-ExtraButtons {
display: inline-block;
border-right: 1px solid #E4E4E4;
padding-right: 4px;
margin-right: 8px;
}
.SBIS-UI-Customizer-TaskToolbarBtns-ExtraButtons i {
vertical-align: middle;
cursor: pointer;
margin-right: 4px;
height: 24px;
width: 24px;
display: inline-block;
margin-top: -2px;
}
.SBIS-UI-Customizer-TaskToolbarBtns-ExtraButtons i svg {
fill: #587AB0;
}
.SBIS-UI-Customizer-TaskToolbarBtns-ExtraButtons i:hover svg {
fill: #FF7033;
}
`,'VersionInformer.css':`
.SBIS-UI-Customizer .VersionInformer .background {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 7000000;
background-color: #000;
opacity: 0.1;
}
.SBIS-UI-Customizer .VersionInformer .area {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 7000001;
}
.SBIS-UI-Customizer .VersionInformer .dialog {
min-width: 600px;
max-width: 800px;
display: inline-block;
background: #FFFFFF;
border: 2px solid #DDDDDD;
border-top-width: 0px;
font-family: TensorFont, sans-serif;
font-size: 14px;
text-decoration-skip-ink: none;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.header {
height: 24px;
padding: 12px;
border-bottom: 1px solid #EAEAEA;
border-top: 3px solid #135091;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.header .title {
font-weight: bold;
font-size: 20px;
color: #313e78;
padding-right: 16px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.header .info {
float: right;
color: #999;
font-size: 12px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.content {
padding: 12px 16px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.content>.group {
padding-bottom: 8px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.content>.group>.title {
color: #313E78;
font-weight: bold;
font-size: 15px;
line-height: 24px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.content>.group>ul {
padding-left: 26px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.content>.group>ul>li {
padding-bottom: 8px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer {
padding: 16px 0;
border-top: 1px solid #EAEAEA;
background: #F5F5F5;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer>.links {
float: left;
padding: 0 12px;
line-height: 25px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer>.links.right {
float: right;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer>.links>a {
border-right: 1px solid #EAEAEA;
padding-right: 6px;
padding-left: 2px;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer>.links>a:last-child {
border-right: none;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer .button {
border: 1px solid #ff7033;
margin: auto;
border-radius: 16px;
padding: 2px;
width: 100px;
text-align: center;
cursor: pointer;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer .button:hover {
background-color: #fdecd9;
}
.SBIS-UI-Customizer .VersionInformer .dialog>.footer .button:active {
background-color: #fdd2c0 !important;
}
.SBIS-UI-Customizer .VersionInformer .link {
color: #05b;
outline: 0;
text-decoration: none;
cursor: pointer;
}
`},'js':{'AccordionHideItems.js':`
UICustomizerDefine('AccordionHideItems', ['Engine'], function (Engine) {
'use strict';
const selectors = {
'Documents': '.nav-menu-container a[data-id="documents"]',
'Staff': '.nav-menu-container a[data-id="staff"]',
'Tasks': '.nav-menu-container a[data-id="work"]',
'Contacts': '.nav-menu-container a[data-id="contacts"]',
'Calendar': '.nav-menu-container a[data-id="calendar"]',
'MyPage': '.nav-menu-container a[data-id="myProfile"]',
'OurCompany': '.nav-menu-container a[data-id="our_company"]',
'Company': '.nav-menu-container a[data-id="contragents"]',
'Business': '.nav-menu-container a[data-id="business"]',
'Accounting': '.nav-menu-container a[data-id="accounting"]',
'UTS': '.nav-menu-container a[data-id="ca_navication"]',
'Telephony': '.nav-menu-container a[data-id="tel"]',
'Retail': '.nav-menu-container a[data-id="retail"]',
'Presto': '.nav-menu-container a[data-id="presto"]',
'Booking': '.nav-menu-container a[data-id="booking"]'
};
return {
applySettings: applySettings
};
function applySettings(settings) {
var css = '';
for (let groupName in settings.options) {
let group = settings.options[groupName];
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.generateCSS.displayNone(selectors[name]);
}
}
}
if (css) {
Engine.appendCSS('AccordionHideItems', css);
} else {
Engine.removeCSS('AccordionHideItems');
}
}
});
`,'ChristmasStyle.js':`
UICustomizerDefine('ChristmasStyle', ['Engine'], function (Engine) {
'use strict';
var images = {
/* Иконки меню */
'christmas-card': Engine.getPNG('christmas-card-24'),
'christmas-sock': Engine.getPNG('christmas-sock-24'),
'gingerbread-man': Engine.getPNG('gingerbread-man-24'),
'christmas-card2': Engine.getPNG('christmas-card2-24'),
'christmas-card3': Engine.getPNG('christmas-card3-24'),
'christmas-day': Engine.getPNG('christmas-day-24'),
'cabin': Engine.getPNG('cabin-24'),
'christmas-ball': Engine.getPNG('christmas-ball-24'),
'snow-globe': Engine.getPNG('snow-globe-24'),
'light': Engine.getPNG('light-24'),
'mitten': Engine.getPNG('mitten-24'),
'shopping-bag': Engine.getPNG('shopping-bag-24'),
'sale': Engine.getPNG('sale-24'),
'mug': Engine.getPNG('mug-24'),
'reindeer': Engine.getPNG('reindeer-24'),
'champagne': Engine.getPNG('champagne-24'),
'gift': Engine.getPNG('gift-24'),
'gift2': Engine.getPNG('gift2-24'),
'mittens': Engine.getPNG('mittens-24'),
'sleigh': Engine.getPNG('sleigh-24'),
'elf': Engine.getPNG('elf-24'),
'candy-cane': Engine.getPNG('candy-cane-24'),
'cane': Engine.getPNG('cane-24'),
'card': Engine.getPNG('card-24'),
'santa-claus': Engine.getPNG('santa-claus-24'),
'shopping-bag2': Engine.getPNG('shopping-bag2-24'),
'gift3': Engine.getPNG('gift3-24'),
/* Прочие картинки */
'tree': Engine.getPNG('tree-16'),
'santa-hat': Engine.getPNG('santa-hat-24'),
'logo_penguin': Engine.getPNG('logo_penguin'),
'owl': Engine.getPNG('owl-64'),
'christmas-tree-big': Engine.getPNG('christmas-tree-big'),
};
var imagesColor = {
'christmas-card': Engine.getPNG('christmas-card-24-color'),
'christmas-sock': Engine.getPNG('christmas-sock-24-color'),
'gingerbread-man': Engine.getPNG('gingerbread-man-24-color'),
'christmas-card2': Engine.getPNG('christmas-card2-24-color'),
'christmas-card3': Engine.getPNG('christmas-card3-24-color'),
'christmas-day': Engine.getPNG('christmas-day-24-color'),
'cabin': Engine.getPNG('cabin-24-color'),
'christmas-ball': Engine.getPNG('christmas-ball-24-color'),
'snow-globe': Engine.getPNG('snow-globe-24-color'),
'light': Engine.getPNG('light-24-color'),
'mitten': Engine.getPNG('mitten-24-color'),
'shopping-bag': Engine.getPNG('shopping-bag-24-color'),
'sale': Engine.getPNG('sale-24-color'),
'mug': Engine.getPNG('mug-24-color'),
'reindeer': Engine.getPNG('reindeer-24-color'),
'champagne': Engine.getPNG('champagne-24-color'),
'gift': Engine.getPNG('gift-24-color'),
'gift2': Engine.getPNG('gift2-24-color'),
'mittens': Engine.getPNG('mittens-24-color'),
'sleigh': Engine.getPNG('sleigh-24-color'),
'elf': Engine.getPNG('elf-24-color'),
'candy-cane': Engine.getPNG('candy-cane-24-color'),
'cane': Engine.getPNG('cane-24-color'),
'card': Engine.getPNG('card-24-color'),
'santa-claus': Engine.getPNG('santa-claus-24-color'),
'shopping-bag2': Engine.getPNG('shopping-bag2-24-color'),
'gift3': Engine.getPNG('gift3-24-color'),
};
var colorTheme = {
'MenuIconsColor': 'MenuIcons'
};
return {
applySettings: applySettings
};
function applySettings(settings) {
var css = '';
for (let groupName in settings.options) {
let group = settings.options[groupName];
for (let name in group.options) {
let color = name in colorTheme;
let cssname = 'ChristmasStyle-' + groupName + '-' + (color ? colorTheme[name] : name);
if (group.options[name].value && Engine.hasCSS(cssname)) {
css += Engine.getCSS(cssname, color ? imagesColor : images);
}
}
}
if (css) {
Engine.appendCSS('ChristmasStyle', css);
} else {
Engine.removeCSS('ChristmasStyle');
}
}
});
`,'Engine.js':`
UICustomizerDefine('Engine', function () {
'use strict';
const keyWordRE = /\\{\\{([\\w-]+)\\}\\}/g;
const migrateSettingsGroup = {};
var verinfo, baseSettings, sources, gmapi, settings;
var SbisService, InformationPopupManager;
var _onload = false;
var _onloadEvents = [];
window.onload = function () {
_onloadEvents.forEach(function (fn) {
fn();
});
_onload = true;
_onloadEvents = null;
};
var _waitRequire = false;
var _waitRequireEvents = [];
var _waitRequireFN = function _waitRequireFN() {
if (_waitRequireEvents) {
_waitRequireEvents.forEach(function (fn) {
fn(window.require);
});
}
_waitRequire = true;
_waitRequireEvents = null;
};
var _waitRequireID = setInterval(function () {
onload(function () {
if (typeof window.require !== 'undefined') {
_waitRequireFN();
clearInterval(_waitRequireID);
}
});
}, 100);
var _waitID = null;
var _wait = {};
var _waitSync = {};
var _waitOnce = {};
document.addEventListener('DOMNodeInserted', function () {
_waiting();
_waitingSync();
}, false);
return {
init: init,
getVerInfo: getVerInfo,
waitRequire: waitRequire,
onload: onload,
wait: wait,
waitSync: waitSync,
unsubscribeWait: unsubscribeWait,
unsubscribeWaitSync: unsubscribeWaitSync,
waitOnce: waitOnce,
unsubscribeWaitOnce: unsubscribeWaitOnce,
getHTML: getHTML,
createElement: createElement,
createComponent: createComponent,
generateCSS: {
custom: generateCSS_custom,
displayNone: generateCSS_displayNone,
visibilityHidden: generateCSS_visibilityHidden,
inlineBlock: generateCSS_inlineBlock
},
hasCSS: hasCSS,
getCSS: getCSS,
appendCSS: appendCSS,
removeCSS: removeCSS,
getSVG: getSVG,
getPNG: getPNG,
getSettings: getSettings,
setSetting: setSetting,
cutTags: cutTags,
textFromJSON: textFromJSON,
cutOverflow: cutOverflow,
copyToClipboard: copyToClipboard,
getDate: getDate,
rpc: {
sbis: rpc_sbis
},
openInformationPopup: openInformationPopup
};
function init(_verinfo, _baseSettings, _sources, _gmapi) {
/* jshint -W040 */
delete this.init;
verinfo = _verinfo;
baseSettings = _baseSettings;
sources = _sources;
gmapi = _gmapi;
settings = _copyObject(baseSettings);
var localSettings = localStorage.getItem('SBIS-UI-Customizer-Settings');
if (localSettings) {
localSettings = JSON.parse(localSettings);
_applySettings(settings, localSettings).then(function () {
localStorage.setItem('SBIS-UI-Customizer-Settings', JSON.stringify(_minimizeSettings(settings)));
}, console.error);
}
localStorage.setItem('SBIS-UI-Customizer-Settings', JSON.stringify(_minimizeSettings(settings)));
var lastversion = localStorage.getItem('SBIS-UI-Customizer-LastVersion');
if (lastversion || localSettings) {
if (lastversion !== verinfo.version) {
UICustomizerRequire(['VersionInformer'], function (VersionInformer) {
VersionInformer.open();
});
}
} else {
localStorage.setItem('SBIS-UI-Customizer-LastVersion', verinfo.version);
}
UICustomizerRequire(['SettingsButton'], function (SettingsButton) {
SettingsButton.init();
});
UICustomizerRequire(['HotKeys'], function (HotKeys) {
HotKeys.init();
});
}
function getVerInfo() {
return _copyObject(verinfo);
}
function onload(fn) {
if (_onload) {
fn();
} else {
_onloadEvents.push(fn);
}
}
function waitRequire(fn) {
if (_waitRequire) {
fn(window.require);
} else {
_waitRequireEvents.push(fn);
}
}
function wait(selector, fn) {
if (!(selector in _wait)) {
_wait[selector] = new Set();
}
_wait[selector].add(fn);
_waiting();
}
function waitSync(selector, fn) {
if (!(selector in _waitSync)) {
_waitSync[selector] = new Set();
}
_waitSync[selector].add(fn);
_waitingSync();
}
function unsubscribeWait(selector, fn) {
if (typeof (fn) === 'undefined') {
delete _wait[selector];
} else {
if (selector in _wait) {
let set = _wait[selector];
set.delete(fn);
if (!set.size) {
delete _wait[selector];
}
}
}
}
function unsubscribeWaitSync(selector, fn) {
if (typeof (fn) === 'undefined') {
delete _waitSync[selector];
} else {
if (selector in _waitSync) {
let set = _waitSync[selector];
set.delete(fn);
if (!set.size) {
delete _waitSync[selector];
}
}
}
}
function waitOnce(selector, fn) {
if (!(selector in _waitOnce)) {
_waitOnce[selector] = new Set();
}
_waitOnce[selector].add(fn);
_waiting();
}
function unsubscribeWaitOnce(selector, fn) {
if (typeof (fn) === 'undefined') {
delete _waitOnce[selector];
} else {
if (selector in _waitOnce) {
let set = _waitOnce[selector];
set.delete(fn);
if (!set.size) {
delete _waitOnce[selector];
}
}
}
}
function _waiting() {
if (!_waitID) {
_waitID = setTimeout(_waitingHandler, 1);
}
}
function _waitingHandler() {
for (let i in _wait) {
let elms = document.querySelectorAll(i);
let ret_elms = [];
for (let j = 0; j < elms.length; j++) {
let elm = elms[j];
if (!elm.UIC_Found) {
elm.UIC_Found = true;
ret_elms.push(elm);
}
}
if (ret_elms.length > 0) {
for (let item of _wait[i]) {
item(ret_elms);
}
}
}
for (let i in _waitOnce) {
let elm = document.querySelector(i);
if (elm) {
for (let item of _waitOnce[i]) {
item(elm);
}
delete _waitOnce[i];
}
}
_waitID = null;
}
function _waitingSync() {
for (let i in _waitSync) {
let elms = document.querySelectorAll(i);
let ret_elms = [];
for (let j = 0; j < elms.length; j++) {
let elm = elms[j];
if (!elm.UIC_Found) {
elm.UIC_Found = true;
ret_elms.push(elm);
}
}
if (ret_elms.length > 0) {
for (let item of _waitSync[i]) {
item(ret_elms);
}
}
}
}
function getHTML(name, data) {
name += '.xhtml';
if (name in sources.xhtml) {
let xhtml = sources.xhtml[name];
if (data) {
xhtml = xhtml.replace(keyWordRE, function (str, key) {
return key in data ? data[key] : str;
});
}
return xhtml;
} else {
throw Error('Неизвестное имя файла: ' + name);
}
}
function createElement(name, data) {
var html = getHTML(name, data);
var cnt = document.createElement('div');
cnt.className = 'SBIS-UI-Customizer ' + name;
cnt.innerHTML = html;
return cnt;
}
function createComponent(name, data) {
var html = getHTML(name, data);
var cnt = document.createElement('div');
cnt.id = 'SBIS-UI-Customizer-' + name;
cnt.className = 'SBIS-UI-Customizer';
cnt.innerHTML = html;
return cnt;
}
function generateCSS_custom(selector, rule, value) {
return \`\${selector} { \${rule}: \${value}; }\`;
}
function generateCSS_displayNone(selector) {
return \`\${selector} { display: none !important; }\`;
}
function generateCSS_visibilityHidden(selector) {
return \`\${selector} { visibility: hidden; }\`;
}
function generateCSS_inlineBlock(selector) {
return \`\${selector} { display: inline-block !important; }\`;
}
function hasCSS(name) {
name += '.css';
return name in sources.css;
}
function getCSS(name, data) {
name += '.css';
if (name in sources.css) {
var css = sources.css[name];
if (data) {
css = css.replace(keyWordRE, function (str, key) {
return key in data ? data[key] : str;
});
}
return css;
} else {
throw Error('Неизвестное имя файла: ' + name);
}
}
function appendCSS(name, use_css) {
let fullname = name + '.css';
if (fullname in sources.css || use_css) {
var id = \`SBIS-UI-Customizer-\${fullname}\`;
var elm = document.getElementById(id);
if (!elm) {
elm = document.createElement('style');
elm.id = id;
elm.type = 'text/css';
elm.className = 'SBIS-UI-Customizer';
document.getElementById('SBIS-UI-Customizer').appendChild(elm);
}
elm.innerHTML = use_css || getCSS(name);
}
}
function removeCSS(name) {
let fullname = name + '.css';
var id = \`SBIS-UI-Customizer-\${fullname}\`;
var elm = document.getElementById(id);
if (elm) {
elm.remove();
}
}
function getSVG(name) {
name += '.svg';
if (name in sources.svg) {
return sources.svg[name];
} else {
throw Error('Неизвестное имя файла: ' + name);
}
}
function getPNG(name) {
name += '.png';
if (name in sources.png) {
return sources.png[name];
} else {
throw Error('Неизвестное имя файла: ' + name);
}
}
function getSettings(minimize) {
return minimize ? _minimizeSettings(_copyObject(settings)) : _copyObject(settings);
}
function setSetting(name, value) {
var names = name.split('.');
var setting = settings;
var moduleSettings = null;
while (names.length > 0) {
setting = setting[names.shift()];
if (setting.module) {
moduleSettings = setting;
}
if (names.length > 0) {
setting = setting.options;
}
}
switch (setting.type) {
case 'boolean':
setting.value = !!value;
break;
}
_applySettings_toModule(moduleSettings).then(function () {
localStorage.setItem('SBIS-UI-Customizer-Settings', JSON.stringify(_minimizeSettings(settings)));
}, console.error);
}
function cutTags(text) {
return (text + '')
.replace(/<\\/?\\w+[^>]*>/g, '')
.replace(/&nbsp;/g, ' ')
.replace(/\\n\\s+\\n/g, '\\n\\n')
.replace(/\\n\\n+/g, '\\n\\n')
.replace(/\\n\\n+$/g, '\\n');
}
function _parseJSON(json) {
var text = '';
for (let item of json) {
let tag = item[0];
let data = item.slice(1);
switch (tag) {
case 'p':
for (let itemData of data) {
let type = typeof itemData;
if (type === 'string') {
text += itemData;
} else if (itemData instanceof Array) {
text += _parseJSON(itemData[0] instanceof Array ? itemData : [itemData]);
}
}
text += '\\n';
break;
case 'a':
text += data[0].href;
break;
default:
for (let itemData of data) {
let type = typeof itemData;
if (type === 'string') {
text += itemData;
}
}
}
}
return text;
}
function textFromJSON(originText) {
let json = [];
try {
json = JSON.parse(originText);
} catch (error) {
console.error(error.stack);
}
return _parseJSON(json);
}
function cutOverflow(text, maxLine, maxLength) {
text = (text + '').split('\\n');
maxLine = maxLine || 80;
maxLength = maxLength || 256;
let result = [];
for (let i = 0; i < text.length; i++) {
let line = text[i];
if (line.length > maxLine) {
line = line.split(' ');
let newLine = '';
while (line.length > 0) {
let word = line.shift();
let testLine = newLine + (newLine ? ' ' : '') + word;
if (testLine.length < maxLine) {
newLine = testLine;
} else {
if (newLine) {
result.push(newLine);
}
while (word.length > maxLine) {
result.push(word.substring(0, maxLine));
word = word.substring(maxLine);
}
newLine = word;
}
}
result.push(newLine);
} else {
result.push(line);
}
}
result = result.join('\\n');
if (result.length > maxLength) {
result = result.substring(0, maxLength - 3) + '...';
}
return result;
}
function copyToClipboard(text) {
gmapi.GM_setClipboard(text, { type: 'text', mimetype: 'text/plain' });
}
function getDate(date) {
date = date || new Date();
var d = ('0' + date.getDate()).slice(-2);
var m = ('0' + (date.getMonth() + 1)).slice(-2);
var y = String(date.getFullYear()).slice(-2);
return d + '.' + m + '.' + y;
}
function rpc_sbis(obj) {
if (!SbisService) {
return waitRequire(function (require) {
require(['Types/source'], function (svr) {
SbisService = svr.SbisService;
rpc_sbis(obj);
});
});
}
var service = obj.service ? ('/' + obj.service) : '';
var method = obj.method.split('.');
var params = obj.params || {};
var callback = obj.callback;
var errback = obj.errback;
var bl = new SbisService({
endpoint: {
address: service + '/service/',
contract: method[0]
}
}).call(method[1], params);
if (callback) {
bl.addCallback(callback);
}
if (errback) {
bl.addErrback(errback);
}
}
function openInformationPopup(text, status) {
if (!InformationPopupManager) {
return waitRequire(function (require) {
require(['SBIS3.CONTROLS/Utils/InformationPopupManager'], function (ipm) {
InformationPopupManager = ipm;
return openInformationPopup(text, status);
});
});
}
status = status ? status : 'success';
InformationPopupManager.showNotification({
status: status,
caption: text
});
}
function _copyObject(obj) {
var newObj = {};
for (let name in obj) {
let val = obj[name];
if (val instanceof Array) {
newObj[name] = obj[name].slice();
} else if (typeof val === 'object') {
newObj[name] = _copyObject(obj[name]);
} else {
newObj[name] = obj[name];
}
}
return newObj;
}
function _applySettings(target, source, ptName) {
let queue = [];
for (let name in target) {
let sName = name;
if (!(sName in source)) {
if (name in migrateSettingsGroup) {
sName = migrateSettingsGroup[name];
} else {
continue;
}
}
let fName = ptName ? \`\${ptName}.\${name}\` : name;
let tVal = target[name];
let sVal = source[sName];
let tType = typeof tVal;
let sType = typeof sVal;
if (
tType === 'object' &&
'options' in tVal &&
sType === 'object'
) {
queue.push(_applySettings(tVal.options, sVal, fName));
} else if (
tType === 'object' &&
'value' in tVal &&
sType !== 'object' &&
typeof tVal.value === sType
) {
tVal.value = sVal;
} else {
console.error(Error(\`Неверный тип опции \${fName}\`));
}
if (tVal.module) {
queue.push(_applySettings_toModule(tVal));
}
}
return Promise.all(queue);
}
function _applySettings_toModule(moduleSettings) {
return new Promise(function (resolve) {
try {
UICustomizerRequire([moduleSettings.module], function (module) {
try {
module.applySettings.call(module, moduleSettings);
} catch (err) {
console.error(err);
}
resolve();
});
} catch (err) {
console.error(err);
resolve();
}
});
}
function _minimizeSettings(conf) {
var min = {};
for (let name in conf) {
let obj = conf[name];
if ('value' in obj) {
min[name] = obj.value;
} else if ('options' in obj) {
min[name] = _minimizeSettings(obj.options);
}
}
return min;
}
});
`,'ErrandToolbarBtns.js':`
UICustomizerDefine('ErrandToolbarBtns', ['Engine', 'TaskToolbarBtns'], function (Engine, Task) {
'use strict';
var property = {
btns: {
TaskURL: {
icon: 'link'
},
CopyInfo: {
icon: 'info'
}
},
ExcludeDocTypeName: ['Merge request', 'Ошибка', 'Задача'],
selectors: {
'Print': '.SBIS-UI-Customizer-TaskToolbarBtns-ErrandToolbarBtns .controls-Toolbar__item[title="Распечатать"]',
'LinkOld': '.SBIS-UI-Customizer-TaskToolbarBtns-ErrandToolbarBtns .controls-Toolbar__item[title="Скопировать в буфер"]',
'Delete': '.SBIS-UI-Customizer-TaskToolbarBtns-ErrandToolbarBtns .controls-Toolbar__item[title="Удалить"]'
}
};
return {
applySettings: applySettings,
copyToClipboard: copyToClipboard
};
function applySettings(settings) {
Task.applySettings(settings, 'ErrandToolbarBtns', property);
}
function copyToClipboard(elm, action) {
var docName, number, date, face, info_text, url, msg = '';
var text = '';
var record = Task._resolve_edo_dialog_record(elm);
switch (action) {
case 'CopyInfo':
msg = 'Описание скопировано в буфер обмена';
docName = Task._get_doc_name(record);
date = Task._get_doc_date(record);
number = Task._get_doc_number(record);
face = Task._get_doc_author(record) ||
record.get('ЛицоСоздал.Название') ||
record.get('Лицо1.Название') ||
record.get('Автор.Название') ||
'';
if (docName === 'Обращение') {
let clt = record.get('Лицо.Название') || '';
face = clt ? (face + ' (' + clt + ')') : face;
}
info_text = Task._get_doc_description(record) ||
record.get('РазличныеДокументы.Информация') ||
record.get('Примечание') ||
record.get('Описание') ||
record.get('ДокументРасширение.Название') ||
'';
url = Task._get_doc_url(record);
number = number ? (' № ' + number) : '';
face = face ? (' ' + face) : '';
info_text = Engine.cutOverflow(Engine.cutTags(info_text), 98, 1024);
text =
docName + number + ' от ' + date +
face + '\\n' + url + '\\n\\n' + info_text;
break;
}
Engine.copyToClipboard(text);
Engine.openInformationPopup(msg);
}
});
`,'HomePageModify.js':`
UICustomizerDefine('HomePageModify', ['Engine'], function (Engine) {
'use strict';
/*
let __oneColumnMode = false;
let _changeColumnsOrigon;
*/
return {
applySettings: applySettings
};
function applySettings(settings) {
var css = '';
/*let news = settings.options.News.options;*/
for (let groupName in settings.options) {
let group = settings.options[groupName];
for (let name in group.options) {
let cssname = 'HomePageModify-' + name;
if (group.options[name].value && Engine.hasCSS(cssname)) {
css += Engine.getCSS(cssname);
}
}
}
if (css) {
Engine.appendCSS('HomePageModify', css);
} else {
Engine.removeCSS('HomePageModify');
}
/*
Engine.unsubscribeWait('.feed-LeftItems', oneColumnMode);
__oneColumnMode = news.InOneColumn.value;
if (__oneColumnMode) {
if (document.querySelector('.feed-LeftItems')) {
oneColumnMode();
}
Engine.wait('.feed-LeftItems', oneColumnMode);
} else {
oneColumnMode();
}
*/
}
/*
function oneColumnMode() {
let news = document.querySelector('.feed-All .ws-ListView');
if (news && news.controlNodes && news.controlNodes[0] && news.controlNodes[0].control) {
news = news.controlNodes[0].control;
if (!_changeColumnsOrigon) {
_changeColumnsOrigon = news._changeColumns;
news._changeColumns = (clientWidth) => {
if (!__oneColumnMode) {
_changeColumnsOrigon.call(news, clientWidth);
}
};
}
if (news.oneColumnMode !== __oneColumnMode) {
news.changeColumnMode(__oneColumnMode);
}
} else {
setTimeout(oneColumnMode, 10);
}
}
*/
});
`,'HotKeys.js':`
UICustomizerDefine('HotKeys', ['SettingsDialog'], function (SettingsDialog) {
'use strict';
var keys = {
'ctrl-shift-KeyU': () => SettingsDialog.toggle(),
'ctrl-alt-KeyU': () => SettingsDialog.toggle()
};
return {
init: init
};
function init() {
document.addEventListener('keydown', (event) => {
var hkey = '';
if (event.ctrlKey) {
hkey += 'ctrl-';
}
if (event.shiftKey) {
hkey += 'shift-';
}
if (event.altKey) {
hkey += 'alt-';
}
hkey += event.code;
if (hkey in keys) {
keys[hkey]();
event.stopPropagation();
}
}, {
capture: true
});
}
});
`,'MRToolbarBtns.js':`
UICustomizerDefine('MRToolbarBtns', ['Engine', 'TaskToolbarBtns'], function (Engine, Task) {
'use strict';
var property = {
btns: {
TaskURL: {
icon: 'link'
}
},
ApplyDocTypeName: ['Merge request'],
selectors: {
'Print': '.SBIS-UI-Customizer-TaskToolbarBtns-MRToolbarBtns .controls-Toolbar__item[title="Распечатать"]',
'LinkOld': '.SBIS-UI-Customizer-TaskToolbarBtns-MRToolbarBtns .controls-Toolbar__item[title="Скопировать в буфер"]',
'Delete': '.SBIS-UI-Customizer-TaskToolbarBtns-MRToolbarBtns .controls-Toolbar__item[title="Удалить"]'
}
};
return {
applySettings: applySettings
};
function applySettings(settings) {
Task.applySettings(settings, 'MRToolbarBtns', property);
}
});
`,'OtherBlocksHide.js':`
UICustomizerDefine('OtherBlocksHide', ['Engine'], function (Engine) {
'use strict';
const selectors = {
'Owl': {
cls: 'div.online-Sidebar__helpButton'
},
'HideMaximumButton': {
cls: '.OnlineSidebar-NavSchemeLink',
visibilityHidden: true
}
};
return {
applySettings: applySettings
};
function applySettings(settings) {
var css = '';
for (let groupName in settings.options) {
let group = settings.options[groupName];
if (group.module) {
continue;
}
for (let name in group.options) {
if (group.options[name].value) {
var cfg = selectors[name];
if (cfg.visibilityHidden) {
css += Engine.generateCSS.visibilityHidden(cfg.cls);
} else {
css += Engine.generateCSS.displayNone(cfg.cls);
}
}
}
}
if (css) {
Engine.appendCSS('OtherBlocksHide', css);
} else {
Engine.removeCSS('OtherBlocksHide');
}
}
});
`,'SettingsButton.js':`
UICustomizerDefine('SettingsButton', ['Engine'], function (Engine) {
'use strict';
return {
init: init
};
function init() {
Engine.appendCSS('SettingsButton');
var container = Engine.createComponent('SettingsButton', {
icon: Engine.getSVG('settings')
});
Engine.wait('div.engineUser-MenuPanel__scrollContainer', function (elm) {
elm.forEach(element => element.append(container));
});
Engine.wait('div.engine-ViewSettingsWindow__width', function (elm) {
elm.forEach(element => element.append(container));
});
}
});
`,'SettingsDialog.js':`
UICustomizerDefine('SettingsDialog', ['Engine', 'SocNet'], function (Engine, SocNet) {
'use strict';
var dialog;
return {
open: open,
close: close,
toggle: toggle,
toggleSection: toggleSection,
onchangeOptionBoolean: onchangeOptionBoolean
};
function open() {
var up = document.querySelector('div[templatename="AccountsManagement/User/Panel"]');
if (up) {
up.wsControl.hide();
}
if (dialog) {
dialog.style.display = '';
} else {
_createDialog();
}
_resize();
window.addEventListener('resize', _resize);
}
function close() {
dialog.style.display = 'none';
window.removeEventListener('resize', _resize);
}
function toggle() {
if (!dialog || dialog.style.display === 'none') {
open();
} else {
close();
}
}
function toggleSection(section) {
var classList = section.parentElement.classList;
if (classList.contains('active')) {
classList.remove('active');
} else {
classList.add('active');
}
}
function onchangeOptionBoolean(element) {
var optname = element.getAttribute('optname');
var value = element.checked;
Engine.setSetting(optname, value);
}
function _createDialog() {
var verinfo = Engine.getVerInfo();
Engine.appendCSS('SettingsDialog');
dialog = document.createElement('div');
dialog.id = 'SBIS-UI-Customizer-SettingsDialog-Area';
var template = Engine.createComponent('SettingsDialog');
var feedback = document.createElement('div');
feedback.className = 'feedback';
feedback.innerHTML = SocNet.getFeedbackButtons();
template.appendChild(feedback);
_buildSettings(template);
template.appendChild(Engine.createElement('SettingsDialog-footer', {
version: verinfo.version
}));
dialog.appendChild(template);
document.body.appendChild(dialog);
open();
}
function _buildSettings(parent) {
var stgs = Engine.getSettings();
var container = document.createElement('div');
container.className = 'Settings-panel';
for (let i in stgs) {
stgs[i].fullName = i;
container.appendChild(_buildComponent(stgs[i]));
}
parent.appendChild(container);
}
function _buildComponent(options) {
switch (options.view) {
case 'section':
return _buildSection(options);
case 'group':
return _buildGroup(options);
case 'block':
return _buildBlock(options);
case 'option':
return _buildOption(options);
}
}
function _buildSection(options) {
var section = Engine.createElement('SettingsDialog-section', {
title: options.title
});
var slider = document.createElement('div');
slider.className = 'slider';
for (let i in options.options) {
options.options[i].fullName = options.fullName + '.' + i;
slider.appendChild(_buildComponent(options.options[i]));
}
section.appendChild(slider);
return section;
}
function _buildGroup(options) {
var group = Engine.createElement('SettingsDialog-group', {
title: options.title
});
var box = document.createElement('div');
box.className = 'box';
for (let i in options.options) {
options.options[i].fullName = options.fullName + '.' + i;
box.appendChild(_buildComponent(options.options[i]));
}
group.appendChild(box);
return group;
}
function _buildBlock(options) {
var block = Engine.createElement('SettingsDialog-block', {
title: options.title
});
var box = document.createElement('div');
box.className = 'box';
for (let i in options.options) {
options.options[i].fullName = options.fullName + '.' + i;
box.appendChild(_buildComponent(options.options[i]));
}
block.appendChild(box);
return block;
}
function _buildOption(options) {
var tmpl = \`SettingsDialog-option-\${options.type}\`;
var option = Engine.createElement(tmpl, {
title: options.title,
optname: options.fullName,
value: options.value ? 'checked' : ''
});
return option;
}
function _resize() {
var panel = dialog.children[0].children[3];
panel.style['max-height'] = (document.body.clientHeight - 86) + 'px';
}
});
`,'SocNet.js':`
/* globals UICustomizerEvent */
UICustomizerDefine('SocNet', ['Engine'], function (Engine) {
'use strict';
var GroupUUID = '2d110a8e-7edb-469a-a3cb-5eb6d8095c10';
var ChatUUID = '3af31f44-c91a-4bbf-8470-3dd423f0b6eb';
var AuthorUUID = 'd7dde799-21cb-49ea-89cf-de56e4f7f78b';
if (location.host === 'test-online.sbis.ru') {
GroupUUID = 'ceeeedd4-8d0e-4dd0-9635-88f1758c3ef3';
ChatUUID = '83adaca3-d02b-490b-bbbf-95ce9953797d';
AuthorUUID = '8cab8a51-da51-40fd-bef3-6f090edbdeaa';
}
var feedbackButtons = '';
Engine.appendCSS('SocNet');
return {
getFeedbackButtons: getFeedbackButtons,
sendFeedback: sendFeedback
};
function getFeedbackButtons() {
if (!feedbackButtons) {
feedbackButtons = Engine.getHTML('SocNet-FeedbackButtons', {
//'LikeIt': Engine.getSVG('thumbsup'),
'SendQuestion': Engine.getSVG('comment-discussion'),
//'SendFeedback': Engine.getSVG('megaphone'),
'ReportError': Engine.getSVG('bug')
});
}
return feedbackButtons;
}
function sendFeedback(elm, action) {
switch (action) {
case 'SendQuestion':
_showInputDialog('Задать вопрос', 'Задайте вопрос, оставьте предложение, пожелание...', function (msg) {
_SendQuestion(msg);
});
break;
case 'SendFeedback':
_showInputDialog('Оставить отзыв', 'Оставьте отзыв о данном плагине, опишите что Вам понравилось, а что нет...', function (msg) {
_SendFeedback(msg);
});
break;
case 'ReportError':
_showInputDialog('Сообщить о проблеме', 'Опишите проблему возникшую с данным плагином...', function (msg) {
_ReportError(msg);
});
}
}
function _showInputDialog(title, hint, callback) {
var dlg = document.createElement('div');
dlg.className = 'SBIS-UI-Customizer-SocNet-InputDialog';
dlg.innerHTML = Engine.getHTML('SocNet-InputDialog', {
'title': title,
'hint': hint
});
dlg.children[3].onkeydown = function (event) {
if (event.ctrlKey && event.keyCode === 13) {
if (dlg.children[3].value) {
callback(dlg.children[3].value);
dlg.remove();
}
}
};
dlg.children[1].onclick = function () {
if (dlg.children[3].value) {
callback(dlg.children[3].value);
dlg.remove();
}
};
document.body.appendChild(dlg);
dlg.children[3].focus();
}
function _SendQuestion(msg) {
_JoinToGroup(function () {
Engine.rpc.sbis({
method: 'Персона.СОтправить',
params: {
'Получатели': [],
'Текст': msg,
'Диалог': ChatUUID,
'Документ': null,
'Сообщение': null,
'Файлы': [],
'Опции': {
'd': [
false,
false
],
's': [
{ 't': 'Логическое', 'n': 'МассовоеСообщение' },
{ 't': 'Логическое', 'n': 'СлитьСПредыдущим' }
],
'_type': 'record'
}
},
callback: function () {
UICustomizerEvent('SettingsDialog', 'close');
Engine.openInformationPopup('Ваше сообщение успешно отправлено в чат "SBIS UI-Customizer"');
}
});
});
}
function _SendFeedback(msg) {
_JoinToGroup(function () {
Engine.rpc.sbis({
method: 'Event.CreateNews',
params: {
'Object': {
'd': [
GroupUUID,
null,
1,
1,
false,
msg
],
's': [
{ 'n': 'Channel', 't': 'UUID' },
{ 'n': 'News', 't': 'UUID' },
{ 'n': 'Visibility', 't': 'Число целое' },
{ 'n': 'EventType', 't': 'Число целое' },
{ 'n': 'FromGroup', 't': 'Логическое' },
{ 'n': 'Text', 't': 'Строка' }
],
'_type': 'record'
}
},
callback: function () {
UICustomizerEvent('SettingsDialog', 'close');
Engine.openInformationPopup('Ваш отзыв успешно отправлен в группу "SBIS UI-Customizer"');
}
});
});
}
function _ReportError(msg) {
Engine.waitRequire(function (require) {
require(['Core/helpers/generate-helpers'], function (gh) {
var guid = gh.createGUID();
var ver = Engine.getVerInfo();
msg = 'Ошибка: SBIS UI-Customizer ' + ver.version + '\\nСборка от: ' +
ver.date + '\\n\\nСообщение:\\n' + msg + '\\n\\n--- Настройки плагина ---\\n' +
JSON.stringify(Engine.getSettings(true)) +
'\\n------------------------';
Engine.rpc.sbis({
method: 'Персона.СОтправить',
params: {
'Получатели': [AuthorUUID],
'Текст': msg,
'Диалог': guid,
'Документ': null,
'Сообщение': null,
'Файлы': [],
'Опции': {
'd': [
false,
false,
false
],
's': [
{ 't': 'Логическое', 'n': 'МассовоеСообщение' },
{ 't': 'Логическое', 'n': 'СлитьСПредыдущим' },
{ 't': 'Логическое', 'n': 'ВсемУчастникамТемы' }
],
'_type': 'record'
}
},
callback: function () {
UICustomizerEvent('SettingsDialog', 'close');
Engine.openInformationPopup('Ваше сообщение успешно отправлено автору плагина');
}
});
});
});
}
function _JoinToGroup(callback) {
Engine.rpc.sbis({
method: 'Subscription.Create',
params: {
'Filter': {
'd': [
false,
GroupUUID,
false
],
's': [
{ 'n': 'Admin', 't': 'Логическое' },
{ 'n': 'Channel', 't': 'Строка' },
{ 'n': 'Obligatory', 't': 'Логическое' }
]
}
},
callback: callback
});
}
});
`,'TaskToolbarBtns.js':`
UICustomizerDefine('TaskToolbarBtns', ['Engine'], function (Engine) {
'use strict';
const PARSE_ERROR = 'TaskToolbarBtns: Ошибка разбора карточки задачи';
const ReplaceDocTypeName = {
'Ошибка в разработку': 'Ошибка',
'Задача в разработку': 'Задача'
};
const taskDialogClass = 'edo3-Dialog';
const toolbarClass = '.edo3-Dialog__head-firstLine-buttons .controls-Toolbar';
var property = {
btns: {
TaskURL: {
icon: 'link'
},
BranchName: {
icon: 'git-branch'
},
СommitMsg: {
icon: 'git-commit'
},
PullRequest: {
icon: 'git-pull-request'
}
},
ApplyDocTypeName: ['Ошибка', 'Задача'],
selectors: {
'Print': '.SBIS-UI-Customizer-TaskToolbarBtns-TaskToolbarBtns .controls-Toolbar__item[title="Распечатать"]',
'LinkOld': '.SBIS-UI-Customizer-TaskToolbarBtns-TaskToolbarBtns .controls-Toolbar__item[title="Скопировать в буфер"]',
'Delete': '.SBIS-UI-Customizer-TaskToolbarBtns-TaskToolbarBtns .controls-Toolbar__item[title="Удалить"]'
}
};
var BranchNameUserLogin = '';
var idReadedUserLogin = false;
var modulesProperties = {};
var isListener = false;
var taskChangeCache = new WeakMap();
var toolbarSources = new WeakMap();
return {
applySettings: applySettings,
copyToClipboard: copyToClipboard,
createPullRequest: createPullRequest,
_resolve_edo_dialog_record: _resolve_edo_dialog_record,
_get_doc_number: _get_doc_number,
_get_doc_author: _get_doc_author,
_get_doc_name: _get_doc_name,
_get_doc_date: _get_doc_date,
_get_doc_url: _get_doc_url,
_get_doc_description: _get_doc_description
};
function applySettings(settings, moduleName, moduleProperty) {
var group, css = '';
moduleName = moduleName ? moduleName : 'TaskToolbarBtns';
moduleProperty = moduleProperty ? moduleProperty : property;
group = settings.options.Hide;
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.generateCSS.displayNone(moduleProperty.selectors[name]);
}
}
group = settings.options.Add;
let addExtraButtons = false;
moduleProperty.ExtraButtonsHTML = '';
for (let name in group.options) {
if (group.options[name].value) {
addExtraButtons = true;
let btn = Engine.getHTML(moduleName + '-' + name);
btn = btn.replace(/\\{\\{icon\\}\\}/, Engine.getSVG(moduleProperty.btns[name].icon));
moduleProperty.ExtraButtonsHTML += btn;
}
}
if (addExtraButtons) {
let extbtn = Engine.getCSS('TaskToolbarBtns-ExtraButtons');
if (moduleName !== 'TaskToolbarBtns') {
extbtn = extbtn.replace(/TaskToolbarBtns/g, moduleName);
}
css += extbtn;
}
if (css) {
Engine.appendCSS(moduleName, css);
} else {
Engine.removeCSS(moduleName);
}
if (addExtraButtons || !!css) {
modulesProperties[moduleName] = { moduleProperty, addExtraButtons, css: !!css };
} else {
delete modulesProperties[moduleName];
}
if (Object.keys(modulesProperties).length > 0) {
if (!isListener) {
const edo3Dialog = document.querySelector('.' + taskDialogClass);
if (edo3Dialog) {
taskFinderHandler({ srcElement: edo3Dialog });
}
document.addEventListener('DOMNodeInserted', taskFinderHandler);
isListener = true;
}
} else {
if (isListener) {
document.removeEventListener('DOMNodeInserted', taskFinderHandler);
isListener = false;
}
}
}
function taskFinderHandler(event) {
const srcElement = event.srcElement;
if (srcElement && srcElement.classList && srcElement.classList.contains(taskDialogClass)) {
srcElement.addEventListener('DOMNodeRemovedFromDocument', taskRemoverHandler);
srcElement.addEventListener('DOMSubtreeModified', taskModifierHandler);
}
}
function taskRemoverHandler(event) {
const srcElement = event.srcElement;
if (srcElement && srcElement.classList && srcElement.classList.contains(taskDialogClass)) {
srcElement.removeEventListener('DOMNodeRemovedFromDocument', taskRemoverHandler);
srcElement.removeEventListener('DOMSubtreeModified', taskModifierHandler);
}
}
function taskModifierHandler(event) {
const edo3Dialog = event.currentTarget;
if (edo3Dialog.controlNodes && edo3Dialog.controlNodes[0] && edo3Dialog.controlNodes[0].control) {
const control = edo3Dialog.controlNodes[0].control;
const controlRecord = control.getRecordField ? control.getRecordField() : null;
if (controlRecord && controlRecord !== taskChangeCache.get(control)) {
taskChangeCache.set(control, controlRecord);
prepareTask(edo3Dialog, control, controlRecord);
}
}
}
function prepareTask(edo3Dialog, control, controlRecord) {
const docName = _get_doc_name(controlRecord);
let moduleName = null;
let moduleProps = null;
for (const _moduleName in modulesProperties) {
const props = modulesProperties[_moduleName];
const moduleProperty = props.moduleProperty;
if (moduleProperty.ApplyDocTypeName && ~moduleProperty.ApplyDocTypeName.indexOf(docName) ||
moduleProperty.ExcludeDocTypeName && !~moduleProperty.ExcludeDocTypeName.indexOf(docName)) {
moduleName = _moduleName;
moduleProps = props;
break;
}
}
const toolbar = edo3Dialog.querySelector(toolbarClass);
const oldBtns = toolbar.querySelector('.SBIS-UI-Customizer-TaskToolbarBtns-ExtraButtons');
if (oldBtns) {
oldBtns.remove();
}
toolbar.classList.forEach(clsName => {
if (clsName.startsWith('SBIS-UI-Customizer-TaskToolbarBtns-')) {
toolbar.classList.remove(clsName);
}
});
if (moduleProps) {
if (moduleProps.addExtraButtons) {
let btns = document.createElement('div');
btns.className = 'SBIS-UI-Customizer-TaskToolbarBtns-ExtraButtons ';
btns.innerHTML = moduleProps.moduleProperty.ExtraButtonsHTML;
btns.setAttribute('data-vdomignore', 'true');
toolbar.insertBefore(btns, toolbar.children[0]);
}
if (moduleProps.css) {
toolbar.classList.add('SBIS-UI-Customizer-TaskToolbarBtns-' + moduleName);
}
}
}
function _get_doc_url(record) {
var uuid = record.get('РП.Документ').get('ИдентификаторПереписки');
return location.protocol + '//' + location.host + '/doc/' + uuid;
}
function _get_doc_name(record) {
var docName = record.get('РП.Документ').get('Регламент').get('Название');
docName = ReplaceDocTypeName[docName] || docName;
return docName;
}
function _get_doc_date(record) {
var doc_date = Engine.getDate(record.get('Документ.Дата'));
return doc_date;
}
function _get_doc_number(record) {
var numb = record.get('Документ.Номер') || record.get('Номер');
return numb;
}
function _get_doc_author(record) {
var author = record.get('Сотрудник.Название');
return author;
}
function _get_doc_version(record) {
var flds = record.get('РП.ПоляДляРендера');
var milestone = ((flds || {})['ВехаДокумента'] || {}).name || '';
var version = milestone.split(' ')[0] || '';
if (!/^[\\d.]+$/.test(version)) {
if (!milestone && record.get('РП.ВехаДокумента')) {
const enumerator = record.get('РП.ВехаДокумента').getEnumerator();
while (enumerator.moveNext()) {
milestone = enumerator.getCurrent();
milestone = milestone.get('ДокументРасширение.Название');
const __version = milestone.split(' ')[0] || '';
if (/^[\\d.]+$/.test(__version)) {
version = __version;
break;
}
}
}
}
return version || 'dev';
}
function _get_doc_description(record) {
var flds = record.get('РП.ПоляДляРендера');
var description = (flds || {}).Description;
if (!description) {
description = Engine.cutOverflow(Engine.cutTags(record.get('РазличныеДокументы.Информация') || ''), 98, 1024);
}
if (!description) {
description = Engine.cutOverflow(Engine.textFromJSON(record.get('РазличныеДокументы.ИнформацияJSON') || '[]'), 98, 1024);
}
return description;
}
function _get_doc_commit_description(record) {
var docName = _get_doc_name(record);
var docNumber = ' № ' + _get_doc_number(record);
var version = ' веха ' + _get_doc_version(record);
var date = ' от ' + _get_doc_date(record);
var author = ' ' + _get_doc_author(record);
var utl = _get_doc_url(record);
var description = _get_doc_description(record);
return docName + docNumber + version + date + author + '\\n' + utl + '\\n\\n' + description;
}
function _get_doc_branch_name(record) {
var version = _get_doc_version(record);
var prefix = _get_doc_name(record) === 'Ошибка' ? 'bugfix' : 'feature';
var docNumber = _get_doc_number(record);
if (!/^[\\d.]+$/.test(version)) {
version = 'dev';
}
return version + '/' + prefix + '/' + (BranchNameUserLogin ? BranchNameUserLogin + '/' : '') + docNumber;
}
function _resolve_edo_dialog(elm) {
var edo3Dialog = elm;
while (edo3Dialog && !edo3Dialog.classList.contains('edo3-Dialog')) {
edo3Dialog = edo3Dialog.parentElement;
}
if (edo3Dialog && edo3Dialog.controlNodes && edo3Dialog.controlNodes[0]) {
edo3Dialog = edo3Dialog.controlNodes[0];
} else {
console.error(PARSE_ERROR);
return false;
}
return edo3Dialog;
}
function _resolve_edo_dialog_record(elm) {
var edo3Dialog = _resolve_edo_dialog(elm);
var record = (edo3Dialog.control || {}).record || (edo3Dialog.options || {}).record;
if (!record) {
console.error(PARSE_ERROR);
return false;
}
return record;
}
function copyToClipboard(elm, action) {
var msg = '';
var text = '';
var record = _resolve_edo_dialog_record(elm);
switch (action) {
case 'СommitMsg':
msg = 'Описание скопировано в буфер обмена';
text = _get_doc_commit_description(record);
break;
case 'TaskURL':
msg = 'Ссылка скопирована в буфер обмена';
text = _get_doc_url(record);
break;
case 'BranchName':
if (!idReadedUserLogin) {
return _readUserLogin(function () {
copyToClipboard(elm, action);
});
}
text = _get_doc_branch_name(record);
msg = 'Имя ветки скопировано в буфер обмена:\\n' + text;
if (text.startsWith('dev')) {
msg = 'Не удалось определить версию по вехе, для ветки указан \\'dev\\'.\\n' + msg;
}
break;
}
Engine.copyToClipboard(text);
Engine.openInformationPopup(msg);
}
function createPullRequest(elm) {
var edo3Dialog = _resolve_edo_dialog(elm);
var self = edo3Dialog.control;
var record = self.record;
var id = 'linkedDocuments';
//copyToClipboard(elm, 'BranchName'); // Сделать авто-заполнение вехи в МР
Engine.waitRequire(require => {
require(['EDO3/Document/Toolbar/Source'], ToolbarSource => {
let toolbarSource = toolbarSources.get(self);
if (!toolbarSource) {
toolbarSource = new ToolbarSource({
options: {
linkedDocs: self.linkedDocs,
objectName: record && record.getModelField('РП.Документ/ИмяОбъекта'),
ruleId: record && record.getModelField('ИдРегламента'),
docId: record && record.getModelField('РП.Документ/ИдО'),
isIncoming: record && record.getModelField('РП.Документ/Состояние/Подписание/Входящий'),
id: id
}
});
toolbarSources.set(self, toolbarSource);
}
toolbarSource.query().addCallback(data => {
const enumerator = data.getEnumerator();
while (enumerator.moveNext()) {
const item = enumerator.getCurrent();
if (item.get('title') === 'Merge request') {
self._toolbarItemClickHandler({ target: edo3Dialog }, item);
break;
}
}
});
});
});
}
function _readUserLogin(callback) {
if (!idReadedUserLogin) {
idReadedUserLogin = true;
Engine.rpc.sbis({
service: 'auth',
method: 'САП.ТекущийПользователь',
callback: function (data) {
BranchNameUserLogin = data.getRow().get('ЛогинПользователя');
callback();
}
});
} else {
callback();
}
}
});
`,'VersionInformer.js':`
UICustomizerDefine('VersionInformer', ['Engine', 'SettingsDialog'], function (Engine, SettingsDialog) {
'use strict';
var _dialog = '';
return {
open: open,
close: close,
settings: settings
};
function open() {
var verinfo = Engine.getVerInfo();
var notes = verinfo.notes;
var content = '';
if (notes.added.length) {
content += '<div class="group"><span class="title">Новые возможности</span><ul>';
for (let i = 0; i < notes.added.length; i++) {
content += '<li>' + notes.added[i] + '</li>';
}
content += '</ul></div>';
}
if (notes.changed.length) {
content += '<div class="group"><span class="title">Небольшие изменения</span><ul>';
for (let i = 0; i < notes.changed.length; i++) {
content += '<li>' + notes.changed[i] + '</li>';
}
content += '</ul></div>';
}
if (notes.fixed.length) {
content += '<div class="group"><span class="title">Исправленные ошибки</span><ul>';
for (let i = 0; i < notes.fixed.length; i++) {
content += '<li>' + notes.fixed[i] + '</li>';
}
content += '</ul></div>';
}
if (notes.issues.length) {
content += '<div class="group"><span class="title">Выполненные задачи</span><ul>';
for (let i = 0; i < notes.issues.length; i++) {
let note = notes.issues[i];
if (note instanceof Array) {
let id = note[0].replace(/.*\\/(\\d+).*/g, '$1');
content += '<li>[<a target="_blank" href="' + note[0] +
'">issue#' + id + '</a>] ' + note[1] + '</li>';
} else {
content += '<li>' + note + '</li>';
}
}
content += '</ul></div>';
}
if (!content) {
localStorage.setItem('SBIS-UI-Customizer-LastVersion', verinfo.version);
return true;
}
Engine.appendCSS('VersionInformer');
_dialog = Engine.createElement('VersionInformer', {
title: verinfo.version,
date: verinfo.date,
content: content
});
Engine.waitOnce('#SBIS-UI-Customizer', function (body) {
body.appendChild(_dialog);
_resize();
window.addEventListener('resize', _resize);
window.addEventListener('keydown', _esc);
});
}
function close() {
var verinfo = Engine.getVerInfo();
_dialog.remove();
_dialog = null;
Engine.removeCSS('VersionInformer');
window.removeEventListener('resize', _resize);
window.removeEventListener('keydown', _esc);
localStorage.setItem('SBIS-UI-Customizer-LastVersion', verinfo.version);
}
function settings() {
close();
SettingsDialog.open();
}
function _resize() {
var area = _dialog.children[0].children[1];
var dlg = area.children[0];
dlg.style.marginTop = Math.round((area.clientHeight / 2 - dlg.clientHeight / 2)) + 'px';
dlg.style.marginLeft = Math.round((area.clientWidth / 2 - dlg.clientWidth / 2)) + 'px';
}
function _esc(event) {
if (event.key === 'Escape') {
close();
}
}
});
`},'png':{'cabin-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADK0lEQVR42q2Vy08TURSHa2J8JG5du9ONf4E740b/A5caExdGJMSohIcibYV2YeQhEgwiAqFWKKg8FFArWlqgFEraQjttZ+ZOO6/bB5AAiujxTqWkLZ0qppN8mZs7ye/LPffkjEZThIeihOMhmn0UptlJTbGfEMP0hhkWdnhb1HBBkmqivABpeFFsK1q4LMvHYrH4TwJkQlFwuHgn8DiuRV0Tc5EFK5LYAFYENE0f2XeQKIrn4vF4KcbxGgVlnUgkTgct9RdDAwZQYMbbQULhUQA48NdAjPFJjos2Ii5CMYjbJm/ILUUKWU7wXjugr30QHmqAoMV4XjU0KklnWJZ1Miz7I6MrUhAJYBzLL0lDvgtMaEWIMI+TyeSJPQIWceu5wWloQtC3CK6xfnCNW4Cad4AkCAWEibk9AppFv3KDg34fON72wGhTFUw8qQbr05oUyvpdcyVM9jaD2zoMrN+bK1nZIyB1XmQYWqQDvp9pwbz54bfZF/c35rq10pK5fiGXhR79srOrlpt9URt3mowbyx9MmxIKfSYnaM57D0uv9O7ld+27ZfGY68Bj0gLZh3S3FCLQXwfLfXVvVC/aZ9Z5lEDqywD4J7pS4eGxOxBfvArroetZrHrLAL2vzSMytqgK/H36Mo9Jt+V9qdtOg91XANmuAjVeAdTYDmS9FiiBFc/NzeCAgdvFYggEXxvOqgrI5bUPN5RDJth9Caa6boGtQwuOTv0u4U/lkPTdyNoj/HI8f3BZVTDeUunNJ7B13QZr272ssNDHvAKF1gKCKruaYKylKhXg7NXCTLdOVTDdqa9XFcx23r9gbauWrW13k2nSgpHGcrA/16Xq7xuqTglWAyXrrp4H1gyG3WbDqQJdpLcrnZNJbPGPQDnNx9a7WSVa85fu7aJBY52qYMms9xYSjBBsz7TqgkEjhCzG1v8WKIw2VcBUhy5LgGz9IPimAUsiyCjMcxx3dDeUzO9DXDRqIcMuybBoi/Ajh20WoW0Osd9lnlnFAkrIQgRjiedjWERYxnyegecn46KcZB/UcBHeoTZFM+GifOFxnQfyc3qqYVhu7V8ECqIk71cy8xuaIdsJ3u4NggAAAABJRU5ErkJggg==`,'cabin-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABwklEQVR42o2Sv0tbURzFX4zB2OCQSnSSqquLoQhRxEWX0kWFOrhJaMEtS7XpUGsmS+1gFaUpBAV/YFRsIqQ/olYjbQcdnCr4z3w87/l4L48ovnuG932Hc+79fs+9hvHAIkgfRxSoN/wsujhjkVa+EfMjb+OCIl/Y4Y+//d8xQqeFDdr8GJ7xl7z2f8kCnfeJHjNGlgMhq+pQTD2/KdFcK+1llu9skbw9XhMk2RaTYZlZr7SfJRpIkyB4R6wJZnTCNv0ueUjUqSM8V5A/hM+qIg4fpewaDuxvnfY54b2aiwoJVSf8YopuAq7KFFZY4x9xxXetVO5CWYqKa2hSU+OkGCSjvzhDNuKOIiRFU/VoRRpZUUKt6n+eVzY+seCMXvBm8VZ3OSd8YFeGso159sSY/AZpr+ErwzwVhsi5w+nycmJMfoSs11A0c9A3VmOwXikBil7DFu3VBgnyfKwytLPpNaS4tLo+tQ0hxVywDKcWf0nKa9gn7G1JqYWqTgiz73sGOphUKD9dcYwJ/vOGaSHDOVdWZeJKf3mZxnnCOq9pMeUD6vCFc7e16LG3DTOqdzVgcEyj4XPxSC+WVedeH0KvHkvpBndbypOOC66vAAAAAElFTkSuQmCC`,'candy-cane-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB1UlEQVR42mNgIAC+ttca/8iIOPsrwPrzbyulf+dPPft74cKbL1evvj9569YbcwZKwPf8xB1/jCT+/9UVguOzxx7/P3XqFRxfvfpuH1mGg1yNbDAuC0D4ypV3t0ky/GtNQQs2w3FZAMI3b76fQrQFX6ZPfPXHWJJoC04ffPD/WlHjX6IMf/v2p/bbt9//v7947f/PeF+4wX9MpP//SA6+cfXS66unTyMMv9gx9/8dRZX/9/j4/t/qn+NN0II3b74ngCyA4c9LF/7/Y630/1tR8nqYmuvXP6w6u+rI/5u2rmCDYfh2VesGInzwLRjZAhB+d+fxz+/T+xVgau7OXRl8T1AQxXCwDzJKbhC04OXLL+JAQ98gWwD01TRkNff6Z4egGw72QXrxTaLi4fXr7w7v3n3bCDT8KtDw6g8fPghS1QJC4N7cVX43bVz+Y+CGvotUseDu3Xc22PICMFfvGLWAPhbcXrDK74aT9390fLN50gXq+KB/diRNk+ndnlnRNLXgVtesBJpacGfq0rhbhub/MXBV+2WqWHDz5kcv2qai22+1sFlw48a7aQzUAhcuvP2AbPjZs6//Ai3mo5oFd+9+Urt8+d3js2ff/Ll48e2nW7fe52JTBwA+eXcSe5SIqwAAAABJRU5ErkJggg==`,'candy-cane-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABaUlEQVR42pWTzStEURTAnylDQrFUJgspZTULVvJ/2EgkO5JYKAtZTSb/gKRmMeQj0zAYFkpWSmEaapAoFkST+fbxc1xvmvKeceec3r3n3HN/991z7r2G8UtoZ45b3vngjnk6jGJChUz55JJZIpwxQ0y8BSr/ml7OHgn6cYgdJCitgz6S7OO0Bzzk6DJtBSirkyxeu+kuCcRosQDNnEuk0QqMkeGaNBOytV6eeWEQp3gpbuQbtgJLHFElib6pVH34pb0Sz0s1B/iswCqbqncT5YkyWT3NCW4ztmMFJonjkr5WShpQI6+MmrEVdq1AnRxXXEr4KLtvtQBhuzrVy1/8TNNg+gkKEjb+FwGWGVB6bJODDZBkxLTW2NYBUqUDG4wrjegCKTnxb82xpQNk8heCdV1gyLQChHSAbKlARgqbz0ELSMur+KnSRf51FAeiLKq+hgc8OkCP3KEgU5zKpWwydIRuDrkXqK0w9gWOlUgEUJi7RQAAAABJRU5ErkJggg==`,'cane-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEE0lEQVR42qVVbUxbZRS+vQVky/wM8ceiP9R/LtGoPyra0q1S2dCtDIaTbrZMkJUOJ6VAmQV26QfrpjLojBKixMyEyYxZzNShzi/UH1MGCsPw0bLb0nbEoaGj5XPt8dwLt327OZPiSU7a+57nfc57znvecyiKEGCtCmDtLeC1/TZYlD23NNTQht+PU7cQmLA8ujzKvDmwc8sCeGxDqBx+27+DPXYNAqKowOnFXBkI/1Erb8J7bTrB3rdVCsDa4nivTZ8AHn1N1TT7jfG6AFj6vR4Gi5SkgyWYtEjikVoew7UFwX5JmwPzvxyK4cM/1ETGqlSOmIPg54aJIU0ODJdsg9B31RD+sXbKd1zjEzZE3RaYaHzh776yslRgGNpt3nU1MtYUI/SfKPaHvjcGwr218EdZLgzuUcLM2YNXVk4TYDKE1MyeNwLbXDQKwNBwmUnHtbNzP5sAcwyBd/Zh6NZnwdssu9JRAv3b5fxhEPMlcqwHABFrVw8EzxnikbPWBzCXzEYiFZweFyKb7tIp+nfIIdxbs2qzfoi/HXwafqoFzhZoL80n7vFwIlfzwytEH+vnpt4vBb9TCx6H2k3eT2S8aZi4vBD+zgjfaHORWM/RPZd8bVqYeq8Upj/SR2CYSeMN3mN7L/raNCuGU+UAY8yDxKlM8VxrMXO7iYqxH45XFbNx+rQ+ynFwTrwO9ShR/7aCxNAsT9DNz+wXORRncjp3qfA9RE6+ogRnzXNwsmsfdGoVsDhghuLuou2I+YQ+oqjAPZsSOFhrSdwBMCn4QM6sGr+CyZZ1VKvyOuVUAtWmhIwGeSTFJANSM8zyCGfjMa3KCHNavwEj+nSV42sYd96W+HCwCuBPZgNXQfyCc3UzKt0ohxsd0PVZQGIoU/adfPWRHP8l4gY5CErXSEF04MkEpaufBhJDMZvTqWQETxmNnbhaukzpJEBqilG6TEZEMZvSknKQWif7ADfOiGtlJ9JfzVzkSGkDnrpaCmKMaN0hOTrIakXMX6kmaTe1ZtFJ2oVTiyoyE+4hzSQ/Rf0vKZc8ItJJooKDbMfzkN9ecMOFZz21dgf7Jd8K5GLUzw7mwhcvZcN6UxbppA+RouTJCwvFaQcyjxk71fOcg/KO3RDsMXiD5ypdr3drePKqrr3Ld5i3vJV0BQnCWl9sCGGjy2tRwdWRRlhpZnbTrKsJ8t7Nh2vY8FiH+o01ZyjYU3W+X7UZuD7F9x+v9SHwMffhS4343y7mu+m1HsOFNZHDJHMPEi1yw8ZdXwgjFTsCsQlYmce6TAVcNwV+lvht9yfvgLW/TDavhV/NsbkcvlCnS2hsXltV8g6IoY46D54jd8dsI0dvx7UQYa9L3sFl5i5+HHpsbsz/zptTaN2KtnGccr3gYu69Fc8/JP9wv9jz0xAAAAAASUVORK5CYII=`,'cane-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACPUlEQVR42n2TS0jUURTG70xTQ2HZ2pFIXbiozdCiyKDINlmBVJZgWamNG4UMEntA2GOsdmEUKmaT1UQDJUQok2b4yBqd6aUJLcpF6xYtgtr8+ubOI4Pmf/7wnXu+e76Zc+651xhrHGSUWb7xkn1mkbGH5ywwQ5TKv6SL2/RSoNUL/IS4leU76RMzorVPq86MoImH1hcRt/4m9dYfS6WQYK31j2hIOjfvGWCQCCMMc13MaubFuoX5im5ob0jJgzzhHS5DCRHRtfTZX7nLEdU7z3Z2CKMcpcfyvdQIB1hjWMcd2/QZu7GB72xlsyoOsYltivyWP02VLarUsJw45TQzke5omlVqN0FC63xiafaVOi3nA15j/yhMG68ptltt1AnPExTW02q5EqbEh3mcUu+nQ3iZXfouUKbDXc8Bi6Mqrp0KdtOujGvsTQmWaiNMTKV8kniS34zRpW+MX0xQzRwrGeeejsCTmYSHUryqfNpGlwhY38hF62dsRhFu869lBY1ZQSAj+K9JEGcZx/maLekLDWISJpdxXxewWzX7+UilcE6yWfqNk9HPTmGEB8IKQsbZNN2nwi06qZ+UafWMjU7pLt6oiGLNNaF+JnV23RqZK7fAQwc/1HSXhDElLygKssTpP2q5ohGd5BSttGh1lUPOPUR1+Zo0eR+FuhzNepxDTuk+JXnpIWqjYRXllbggt6Al+Qg5x+F0eWeFAU7kFgSpYoUeYp6N8nir11KdvOi5SxrXjGuycR2fdayFi3P+ABjp0VpGmzivAAAAAElFTkSuQmCC`,'card-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgElEQVR42mNgIAMcW1XIeXBVTviBVdmbD63K2s1ADbBqVSgz0EDXg6uzFxxclf0JiP+DMFDsAkUGH1qRbXRgdU4f0MXPYIYiY7IsABqmCMTVQAOuYTOUIgs+X63V/vew5d//hy3/ScS//z9oViRowf/7rQZkGA7BQL1UteDPiRTKLfh3pRin4d+nKv7/vSuIfAv+HI79/2Om2v+/Z7OwWoJiODkW/LtV9f/XGrv//+/Wg/k/zlb9/3GmijZx8H5D7v8znrZgDGJT3YJPu4r+H1TXBWMQm+oWPDtf9b/MxwyMQWyqWvDlTuN/4wa3/wwZ5mAMYoPEqGaBT48f3HAYBolRxYIPt+r/ixXZYVgAEgPJUWzB7E1p/5kzLTAsAImB5Ci2wLzJA8NwGAbJUWTBwSOF/wUKbHBaIAiUO3asmHwLkqeH4jQchlOAaigKoguny/6v2JH1f/n2zP9tU4LAGMQGiYHkqFpc75sTBsY0qw8+Xa4GY8osAFZ74OqPSlUmAG0vBs3mqf5dAAAAAElFTkSuQmCC`,'card-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABL0lEQVR42pWTMUiCQRTHv5C+EtpCKMeMoJoqmxpaChoEB2lRsKFysrL2INrEpUGCgggaCwSDWgSHdIqCBmlyi5ZAWtt+/Sv6GvS777rHe+/u+N3jcfc/x/EZ9LHAMS8MO0GDSQ6454IlroiawCg71Lhmlf7v9aUPTpg1ga8cscicZzVWFMPd+AZ1TnpanfVuPEfWp8EsOSucTZJGnFmWvZ0Ij9zh+uIM8MAzEW9v/OteTNUnmFd0OcW17p02Ddr2eJEPipY4IW7Z54aQBS74nLxynrOfA2Z8myfSEldaeSsYL1Blj0N5lUIATpw3UswwJk9pHjfjCZqqW5KwSspNEgacQTrK04wyxAhTmnf00obqMdUsU+FdXmaXmJUiafxLwH+69MMztPTVelmLzC/1CbJqPwM9OvfmAAAAAElFTkSuQmCC`,'champagne-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABj1BMVEX/////gIC/QED/zGbm5swAxE7t29vt7dv/yFvu3d3w4dKcVUf/tkmiXUb/v1UArUcAvUzs49kAukzq49bs5tLp5NTr5tYAqkbn4tTp5NcAvU7r49cAvE4AvU3o5NX/uEsApkPr5Nbp49P/zl7p49Xq4tXo49T/wE7q49UAqETq49UAp0MAp0QApkPp4tX/tkT/z17p4tTq5NX/0F3JdV2iW0sAvU/LeF+iW03/tkY5wVP/vk3/uEjp49bq5NX/wFDp49Xp49Xq4tXp49Xp5NXp5Nbp5NYAvE8Ao0L/tUVMrEYAvU//ukrOeV/4xXj/z10Ap0UAvU//z10AnkD4z10AvU8AvU8AnD+lXk7/t0j/vE0Amj3/t0YAmD0AokEApEIAqkUArkgAsUkAskoAuEwAvU8DvlEWuk0qvGQqx2k5wW05ynI8wm88y3RIzntOz39c04dvvFB6t019q0Wk5LO0573z9uT5+Of+qkb+tkb/mDv/tUX/uEf/vEv/vUz/wFT/yVf/yVj/zVv/z13/+euG4WA5AAAAXXRSTlMAAgQFCg0ODg4PERIVFhgZGxslJSgvMjM1OT4/QUJCREVLUlRcYGVpbG1tbnFzdHR1fYSHiYyOjo+PlJyfpqiqrq+yuLq7xcvNztPV2eLk5OXv8/T09ff4+vz9/v5a3CrDAAAA90lEQVR4AWXJA3uDMRhG4We2t87obNu2bWeu3c7JD6/bL3nP5fuAVFzeiKyhHDrqC8oweDpKR/98EbZGEumYbepDAmioXV5a7E/TER/zbesy2heaVW/x+Xw9QHeN4g375741APpWiZMG+N/lJEpSk+cyNZzeu8P/PyeAyqlpfZzzxw8551+bkEsZPmYW98/vWbbshRuMMZvX/T0je9UeC/Rss3pyJa8+ejU/BdfNuuIGp7AHzuNVKXERPNerWq84eg+6EObbkzztWGGOkDtfLuqgbffB6Ar6x0UnpDou7k2uoHdBqevi3uh4Czo9d3dBp7UdHLQR9AMXlUIgFuxo+gAAAABJRU5ErkJggg==`,'champagne-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABeklEQVQ4y43SPUsVYBjG8UvNJUgyUDMalAZLxaVBc6gIe99qEAryjeI0FK011RDpUJBpEIfcXCywhs4p8njCKKgv0Mf5NXR6ATue82zXw///cN03T9LwOGrUw8QN39xME8IZQ07oUnXI92aEJz47ZcKqTeeaEd4YUExMONgM3q+k4oeyon4XGuF9qgZVnU4Mqyo0EhZMJgaVksRFt3eCe720T8mkqv4kMe5ePbjNNRuGE9e91+e8Hh3eGvgf3OmWijvaE8esaUuMWPXK8e1wjyVffTKqN7Hbpr07tb5kw0Ri3TNfHHDX5fpwi/sW7UoS6/osOemjlnp4q6KC1lo64rU1W3W/mlZFs0YsWPwtJbZ01ivzXMGKK4k5L34pznqw0+srpmp5ztNEu406+zFvxoLpf24q2iy7Wq9/KfFBx588ZVnB4/rrLOk2pmxPDV8xq/h39O3CoIou48o6TDfEk8Rhm/YbUzbfBJ4khlR0J2aawmvF3il71Bj/CdLoGKfJc/7yAAAAAElFTkSuQmCC`,'christmas-ball-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAD4klEQVR42q2WD1CTdRjHX+tSIMElhmA6lgV0lHlKSldUkBFGxnE4dZghKl7kHdeiE11/jKJTuOBOCGVDtoVDscvmCdv4ozEooSAaeo6AjOs88/IOlWPgu7Wh3/a88S5gm+DRe/e5+93z7Pl+9/v+3t9uDHMPT5VKLiaYmTzHKuQvHlcpMjz1NMrDEYSnHs3Q7NTfsqQkQH3oULDHnlqxjPDUoxmandKgWil/xlsMGmV5EuEtPpqdTs6Rx1Tlr3jqVVaWBhIeo3XO0OyUBkePlgVpKioe9yKSQHjcnXOGZqc+ZKUirkopz/QWn7cYaIZmZ7SDanWZiJjRDu52Bne7B9M6A5wSCOwGXykBvX+4e0TKRcTk+tIiWbhwf46UEOXmCrwaOOr8Y2wnZ4Fw6H0PuBmoyp8jJtcXf777wNxkCQhh4Ycx3g10voW8wWj93JPoZmbzvYup0Qs7N63OIGjN16M6FQ+EfCRt4Q0ivimQMsCsidG0rl1lPbdthBcn7jQHAt8/fBU/LIiiz5BwTWwwCFpTTViWuy7o3XesvPhD6duw0qRClEnVtcI0FuVAb47/SNeRUUtPi1P4PpcBmheQAXEdxmBRhziqijfo2Rr7RXRtcdi8N9Nu8+KEIC2dM+D4RdUba1T7MI76+Z+yxvVgG+MwfgcOgx9nMHR8Gc6lRNp5cf2axRh4T4JLe9Jtidt3uMTDMrKQmFcE2Y/NKLpsRmZfE5K6tdmMvXZO/3jhkfbPMHxeDZv2QQxVPoqRa3/i14p8TrxuXTgakyJxPVsCywkFrP29MPdcgvHKIDpv2t0o7eiyOA18LrsMtD6w9DTD0tcOqy4CV08dhm3YAl28kDNozRZz/LY9Hjf2vQ0Hy4K98odHcUJhusjSm3PW9u0cp8H9nInV8KQzrhdgUfuhMfkpnJGsguH1MPAR1cSFQPfyIph3JmBQfwJ/aUqwK28/Qrdm4vk9udinrcfXF35HvqEFCfIvzYz9u+VvWbobMGyugfV0sCuqG6Xz/xMdo+39jfj5kwy3+poNKRh/2ESAZAuWHslL5N4ktmNvG8XCNiW7DG59JUCt89u63hxlAW4NXAN7cwB9muIJBtEbNroZhBbKqifcBWvrDo3dsGTIpv03Kvvp2WzD2tDbxvSXYMqXou6NJ+Cw2zkoNqpRzxAvvBMk3cUGbNoCf/FmLNydNbikYO/H3n+PjCIf1PuF0NokiS7WJ4g48YaUp53x7ET7B2k4m7qaq+leFeHC5piDYzd63iMyWeA9/wlw3tqmyZnz/LR+RSfzfzzt4pU5bSnL+8+89tjfdfHCUVqfT302azqz/wCJYu6vLT/g2AAAAABJRU5ErkJggg==`,'christmas-ball-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAACAUlEQVR42oWTTUhVURSFj1GSZfXUzDRLByJq+EOlJiah9GOGUog6CIoQMoiKmhQ1yArK8kVEFIEQFBT9QGUqFGrke4pZKUlNbBANi8Y1/Vr3PH2cuq/evZzD2vuuvfc6e99jTMyHm+b/D7vY5lh7HLyDRj89l9WOVe3gNeT46SUUxhZDEcXxxDTFE5NFhmPVOziDTD+9nNJ/iCljg5/eQJ1j1Tp4i1sr4kqlkgoCUbsligLyV5LyJ72bp/TR6RfDeZ7zjC6XvJReS39IsrVrJGCTRUt4bOlPWDxH3sw3Tqq7GznBlPYkvtDFVxKp5j2HNZFSjvCWKo+cxzTnaJ8NXSl3h8If8Z0DTLLCaec4uYY7TIhSRKb3SfukqCWksZ4rjKpWPq30CI2qco9R7nSdvo43vFPxMUZ4obBFWvf5xC/ucYp1JMguYMwwYUudoY12HqjgtDdDglrbdfQgh9hJ+aygEaOcB9lHDi8Z0HuMfu/PpNlm+8lHfnCBu0pzXaI/GE5L61m6bXTY7unslYj9rCI76vPG2Mlxw0JCOsxr6wyxQPs1CSrTwW4IJzE4N2eGSfTAMm7zWZ2+rF7vlpxCZqR4hrXqdotmcImLvOJWZISR2OVs1STzlD+NeQxxVGu+cFi3rEZvIPaNrVJArW1bgpoboiLeFc/mqnKGRQ2S9ffX38YtgP8M2g3BAAAAAElFTkSuQmCC`,'christmas-card-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC3klEQVR42t1VXU9ScRzmonnVVVfd9RHspk/QVp+lrSvXcmgsrNaFClZqKeLLRAWJ3tbG1FJ0WiqagAEqxMsRAs6Lc9120dN5/nGOyDSd3nm2Z/x43n6Hc4BjsVyYI5D+ent4e3ZpJhfJbhRTylnALDvYdagcQENeLskvkkHYYj7MSTFo2p5APr+L4PRnMYcWlgQ4k6Nm+Jhhlh3sYqe5QJb3G2mqqCpGUyG0Rr3w/1iCommofPyExMQ7UXK3ySrAmRw1euhlhll2UGenuUBR9q8bZyLOLrcuAq7kNGRPAKrnDTRFRWwzLsCZHDV66GWmtoOdxy4gVgvbsMf86Ih/QKq8i3qdHDV66K3XT1xA7JQltMffo23zNdaKOybPmRw1eo7KnmoBUVAqeJmcwoOoD5PpRQHO5Kgdlzv1goqsICNJGN+ah00vJjiTo3auBaVyBdm8ZGIrlxGo5eg504LCz5IoyH9Pojg1h3wsbpZyFpyu8T29Jy74VkxBkktQVQ1SoSiCxZl5qM4BqA4XlJ4RZDNZAc7kqNFDLzMiq3ew69CC7kTwHr/LD2OTGNsKIZgKYzaxgspz97+iKna/hAVqOXroZYZZdrCLnaLcnvBf1Yk9krXoWRg7KOnoQ7n9FXK+twKcyRk6vfV5drLb0hr1BQzSujGO++segeY1D4L+IZSe6ZdHL8k87kL6kVOAMzlq9NBr5NhxsMQXsLREvWGDaF4fQ9PKyCFYV0cxMuNBorMb6TaHAGdy1Or97DD62G2xbfga9Te/j/iIJmwRLyKDbkhd/UWCM7n/ZdjJbnEf9E22GiGqY7gl6uvTXxefhif+RIYGxbXWHANPCM7kqNFT9Q5Xs8bZ28xvkT0UukRC/wu4VfucUHp7L1ecLsW4mVqn6wZh3nxdo6c20xLz3mQXO098yv1yuq/oN3NZ/A4crmlzsT5XuWV6zvUohd3foDn67+x3uq8ZHGdy1CwX/vgLJ7sjz3+wsrkAAAAASUVORK5CYII=`,'christmas-card-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAByElEQVR42r2Tv0tbURzFE62SRbAGxUVdFCRioQUVaQZ1sEnj0DRDqT9op6KLgrbBDkoEo2jbSWmMpQl0SEKK0qmiWFBnRcd26uL/8fG8+56PEH9s+sI353u+99x377n3+zyeO394SYHirb8C0UtxG2ekqHJYP0085beimT6nVqXxM1ptMsRrxS/8hnXiJ0MP34WdpuLX2BBjvLDlFVTqv4NdAs7bnvCTx04eUL1DOOpsRzNfuW+JlLmKuKu68iijzuADlkmUiKf46nq6KjcszQ98Qp8wXVK/Ts6ELIbZIaEIK5+4Ua7jWuMD3ZLVyHiNsEt8zd5OqTzJQ2M0Rp4F3pNRNStcEI9ZZqlj8VIeY0u39p8464RMJcsjsiZ7rlpcY3lpYra8SIM59xGODW/XeqeKdsNOGDbn3kDRoknGXDvz2mstS/zhkyKpPM6cO/qGRQ+HlhVCbjNt85egKkHhtlsNmaM48PCMzbKb/MgR/xSzZfVvDFqwqh6pZ87YmWdGN9nPuSLFtPiW+ido+mjFntXIPjl6tVg1e7zDywYDmuRlXLxaLVghD/s0Xv1QvshQCzllOeFbPt/+XVUyKWPNylqEk1Zr399zAQ6Lh8+Zg7C1AAAAAElFTkSuQmCC`,'christmas-card2-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACLUlEQVR42u2VzWsTQRiH83dVBQ+etNWTKGgqFQ8qWoV68KAgxaIifqBCNX4RSyuJRmJakVbTmmwbs03SmDYmxHxo0kR3u02a/cimt5+zK1kdN2xAC7104Dm8sz/meWd2mbXZtsamj4AgDQQFiU2KKp+RmvJGQtb02YIrEsKrMgrKugH/dQJ8cYqa04jWFJ2/55fqHEZzTgqGj+vPTALx0xDg3wV86EZz/gy1EEty7B9ZrvIRYvoB1qIDCDE9iAR7cHZuN04TNElbAfft7S9BYB9Wc25LQVnIEkkY6bwLd2b3YJjQUVASMsiGDqE2ux8VbtFSUKqWIC9dRzF1Fyzp3sN0o7+TgOHmMZq9jReFYUx/n7EUtEjVBXiLrylYIW0W5GUVzsxNjHy5oTOWu4e80uwosIIS5GSFdM3gYqQXV+In8K4yQwTqxgk0riXO4VL0KAZjx4ikv+0Recs1PC0IlmgZk2CSdHyePagv3sJX9JkEkz/qcJWqlmgZSpCVZVyI9BHBAV3SYnDhuPEe/msHObkBV8qNXs8OHHmz3cCZfEKCtOA9J+LVcs0SLUMJMqKIk569sPu6YB//Td/4TmQlhRK8XK7CkV+h0I6EESSj1jKU4FHkPg67t8Hu7TJxKzxECfy8eQchMr9Qaxi1lqEEz+JOPI46dBxTl/HQf9WoxxLP9XCMXHSxNpddh89UPEUkgc91tZyR1tc0Ev4JdXFuutGq/5VkXXVv/RA3f/wErtwxZ4cKiFIAAAAASUVORK5CYII=`,'christmas-card2-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABX0lEQVR42t2TzytEURTHh5QkMSE2NCsiisRiNFhMs5FYjFKTUn41ZaMwG3aKnZ9lgYUNpWEzjQnJxgaZsrGVkrLyJ3ycOXPfbd6YYu19F+fc987n3nt+PI/nHzxscf0nJagnxYaHlEVjXFo/QMD6UU6NghJNUl+WcMcm49zTqesIEbUzolfm2cNLL2sSnQXk0wF9lAtW6QLaWeKFRULqu4ApHkkSNysHGJIzv3gg9hNYZVjSuqIoF1B/22SQYNIC1HIjt/TKHiP5gKumFvCRlqId8sngb8CcOmXcUip2nx4HIKw1ylVHBhjTgBVzlTouMlkoEGI0T83mShL2LE3J6oSwAaallW75HaCCJ5b10FneaDNAt93EUYMDtHCcMwhRAyywbuRnQm3QAc7xWaBYqlWjQBNdRlU0qq3OACkJOdLGfPDOmXqtDNBfsKwyfLvETSfTkkncTmYhxdn5D7/0N0MhmEd1XXv0AAAAAElFTkSuQmCC`,'christmas-card3-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC40lEQVR42rWV+0tTYRjHhejHiP6Ggn6oH6R+yUARycvOLEldEiXGZmvWmmTmUDS6EEuJUIoyLLKk0sJVmmaiabs515abl7xszm05nJtzc5tk129npzZmm+4E7YUvh/c973k+PN/nvO8TJ3N4tkvtHtvAghcG7wqMPvpSOyxedlfyTGF3chOvL21nXKQhmffyJHYPhlzL/xQ8oIKOxO/57XtxUpKO03LCIFAQtwWKzINc9b7NqwBtVheKP5ho6eyQGeOez5EAofp6Spa+439nsFpSxv4gwK8Wi5OWnn1ykvWKnkGZ7MCmIODt/BLuGx209HDGganoAEksihwUX8Goim2RZYw9sczAxXrK2rAK4D9or+fcEeWvjz9Yt+333P+cXg+gIFrDDtob8sO6ybmIqjfMY4K05MaUjZr7n+tZxJcRvFid5D9ibKUF0Hu9aDY+Iv95H32AgjDSvouuaktR+T4ftSNV9AEyop4WQGwSo0zJQtVAAS5pCtFu6aAF4MuJHFqAdksnSpU5OPGcoAA91nd0AD+KpMwtUQF60vManZCyJwC4PlxBBzBIqx9IbRq8ML9EheooBbio4eDJ9API7dpogMtrAhqnGlGtPQPRkIAKqLSPQTavRaE4nQysQ5u5jcyEg2u6MmpPj1UaBiiWE0kRATW6SsqGUDWLsmAiMtB4V4DxXjFq+zl/7eGgSd8QAshY5qp3bwwDtJpV5SUDOaQdR8DvyAJXzKBsUSXugjslBQuHWfjGZsMh5FPr/vclPbkQDh7CefXxIKDoXZpkzZ78avYjRFohBHImqUycU+ZC1XIHk9nZGGUw4M3Lw9KFcmqd7Lek10w0TNRhxG0LAnj9qdXrNn31ogtjbjt0rlm0GB9T/iqZmRiNj8doaipmHIukJfcw6XFj2GUNKzK3NyUtIqDPvrRN4vCYlE7vF4Nv5af/lgxId/MWNAkJGLsiQuh6QBMen/NYZ6KH3ZWkj1tj/AJHKDkDkQcLGwAAAABJRU5ErkJggg==`,'christmas-card3-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAByklEQVR42o2S3UtTcRjH50sbSBojwoskmevNiSAoQ8EuZl0EmgRhF0ERJYWCQspmEERdNBC8CGLienU2s0kmRmtpRl0PLxS6qivv62/49N3ZdvbzuNLzXPzOc/j8vuf7vLgI8Z1FXuAjpXORJPFCJEiTJSrC4yo+hOl0/ePBzQKtjLHEO+4QyH2K0EmLpeuMPuFvChc99PCKKxb+H/V5I7vE9bx6PQNl4rQDj9GQxw+XxY87cH/B+37M4Gdq71KTNj5E797qr+33txwsqgfs0eTiGpet83wJp4rl/EsOr8BrhEdY7qw28C7u2bjx+1NcLWeG+wR34ZxgnenSBQNfocqBy19ao/GyanXYwKkrLsNO9RQdyqM02/icdfZzaxdOUEsU5C6DjDvwJ/gMnEoOcFSDWecGk7wnQ7e65bbxj6XqI/pVnGXBKW7zmz+c5RNPlWdoIyHiGDET/8kZ2jkneFXa22zyUFlIffpi4Te5aOJZjsjEBPOa5gUVWsMPZWHt6YyFJzlk4iN85jGPpLyhVr7kGVsMq7w1rUNCdX0w1yisAdfJZYjnstNPLd8YlUQTjVqHWdl8YOJBqRRXdo1fsrZh5yvq1VdOlui/mdXYPBGctSIAAAAASUVORK5CYII=`,'christmas-day-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACWklEQVR42q2Vb0gTYRjAB/Wx7/a1j2p/WBnGCAojCWmWLAmKTMvST32xiKCoMEVcaiVL52Y2JuFWjH0p+6/edmWW09VuTsxtbO622x83mggl8nTvW9PF3W223Qs/eO59nvf53fvAcRKJwGrXGCqUGoNOkmUptYY+ZZ+xSvK/iz3YxkpCWes0Q9527dC9DTUFRUMJKBqNLNNvbnQy3arBFRRnoqdb/3P4ZlcExcmKc+/pslNnMggaKRZAjF1Tgkqlh9SzEOoHOnh3vQPHiSN14CqtXgFJ9SZu88r6gvSDny63wqOugawCXUc/fLjatiZwlCiAKauTcQQJef226OGzkCJSXgu+ygZI3+PDJ78IYbYWxQsHTmNB+GDNfo6AOVSzEyXFgFewxLgLkn4X5AMzawOH9RXQ1DiPIOzZurTohUwsh0hYDloE84yfgm+TI0DPf8lF4IFVRxMGxaILkovzMDpxEl6SxyEecYovmKHV8MReCreeFoJp4ry4gniMguffy8E8J4P7b3dBs6kYAkGreAKb/w5ujkjdYoA4Ko4gGBqHFnPxGs2mIiy4/awQfPRo/oJoZAoejkn/QfliB5Z4A6/zF6SPJ4XethcLHhPy/AQ/Ym48CtSMD5SLR125CxIxJ2jIPaC27uZwd/jPmBjmc+6CqYVWznhSGKl9+AaD5IncBVpSBr0WKS89hBQLWszbcxfoiGP4o1qn6C/re3pr1cYEALCZLQqgItr7lZf+pgsYofwc9RGc08RqODyyhfefHHDbr8zYLb/QW/DRe6kWI5RHZz2zk53pPX8DThZgF5aRqzMAAAAASUVORK5CYII=`,'christmas-day-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABOklEQVR42o2TzUoCURTHR8yiaNMqWkmBWmCbhL7oAYTQFwh029euoEVG26hdX9bGXaTjgFMKLtr3Bj1JD/DrdGds7qjdmfPnzvmYH3fOgTOWpRlvdK2Q0cW1xhsJ2ryS0iopydskRtFjOtgKd8QP5CjclneHOpylbr6dJzJBuURF4T3pPqnhScl7Cq9SCsrlX1z8AUcjTe4rX6Ws397izKiWjs+yScGoSx3fZS/UwqoMmA9VQs34vf/lO3yzFRNnhm2m5EzHwy8oyrNILQbOPB0/cliIxuuDIcnzGI1/cOVrifcInDRNwTxN8ELajD+Q1QbMcG/GbU1NFrENODkaQyvWIPc/XmNtCC9wPm4jPXyDPs8h9Vn3cW3fV7j1o0nmRDdUuFaR/29xx7L+0VNcbcgvPuUEucuJx/0AU6hg5UPDNPYAAAAASUVORK5CYII=`,'christmas-sock-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACu0lEQVR42rWVy08TURTGWbBwRdiZuDD6H5i40QUxxk0lIZYF0bpiqTEmJgYXyKIKLYLS0pYKtAQlQRcMlkdtKxjaioqGGGM0xgAt8+y87kxFixI1cJyZdkpbgbaAN/mSuZOZ73fuecxUVOxhGY2N1bXGCwNnz5mG6+oaDlfs9zLUX2wwGE0mQ73ppKKmsl7GOe4IxbI1sixXcZx4BaGkSRSTNZIkNSv3ziP09RTm8w83NZsbL1+9ceLa9Zveks0pJjG9TJCgK8FyIEnylkJIAkFEG+lr+aUgCAd3NGcY5liuuSqCokFUjLaD5Etq2RGQSCRMhQBVOEkBy/GlAB4VTRFBUWtbQVTxgrgjACF0uihAeegQzbAY+fEzEK/eArEUB3KZAHoxBoRyEn4hDtL7TyDFcJCic4CmXoD0ZTGivHe8rE5autUFutiO+4C6PNvL5rlUdp+rxrEMINHh/j8AyurSRLe79heAm+3VenqWW7uBtDjzDIV7/XsDkFaHP7cGeFt31oy/2wuExZHe272wgo3Bd3+gjEm2ugZzzbVa3LZlAaIevc0DqfAM/PwwD99Czx6XFrnFYc6aKlIj1fdcZ29eWlawcc1cAwSDzqLmfKvrqBLpum6oFhZv2wRQ1vw6pCLhTcC4v7YogLb1hePtDihMj654TppU/ZifSwPevVmHSKSy+AkwLCXPPlemcxrYkRGIWbv/gbCdmwO3+npWA6RCoZ6S8s9h2C8VoEuaCQHp9hacwp4t8opvElajYbrk7uFHR+VcgAaJTEH8jjNTkx5lJuxaXVRI0v0wLA8Hq0oGsH2DQ4UAVbzvSbZVyUxXKd1F4uYHB8r+PCinWNsKEu90Qc5kI3XSd/UjZ/oGzggTY38KAYSzPzPRjoVdm+sLzOZKxjsUFZ9O/BYCkyAGJjfo3sEkYXW2lOv1F/P0w8PRWC0EAAAAAElFTkSuQmCC`,'christmas-sock-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABd0lEQVR42q2U3yuDURzGt5mfGyKRSXYhxSK5spIfF1Yjt5KrFUpxs1KEKH+A5EKSC8qFWLL82DByR/E/fTxmhp2zceG8ne97es7zvOf7fN/v+zocBQeN3HBHs+Ovgygh+lmyb9axxhaLXHLNNsXEifHKCTs8ETbpNTwwQBujorrwCinCo9jFEH42mcsVzDNWIDUnt7nQCsGCbi5x/gQ6OKdC9/IcopsSxRH2zGcMq4DPmqccc8UGBzK/L2d3vMhDue3YXlYVq3WV0k2TzPs0XcTz5ZkWGOh/CkJELWhrHgENMugz0HUVwCagXvR2A13QZUtJ7ZAkYKAeEumqHZmCWaYsp4aZV+xjzdx6VKZnTL+/1W/oJBOKu3SagmtNLxH56PlR5nWCHNosX2TutSS+JGrwR1JU2QQJirKS+8/E1JAPNOT7FMez68hHAUS/z0PXZpmO9mfWlcQUAwXoaVoLy5TgTq+TzKi163//RwzqqUn1f0oFdts5b7cJ/TPMVqXiAAAAAElFTkSuQmCC`,'christmas-tree-big.png':`data:image/png;base64,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`,'elf-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADMUlEQVR42qWVSUwTURjHcYknYzwYL14E2W0Loh48yG5jQYJROYASY2IMIgcDNjQspaQLZZMapUJpKUINLQFqUKBKWQtC9aIhJCwFFYUQTeqCZRFmPt9MRVvoMpWX/JLO63y//5v3vcl4ebkZPG3o/nwNLY2rZsi5avobhAUxzlXT2vIb6Sm83sjdXv87kIiF+FTYwoDCZgag31vR0D9yG2nxHssL1LTKAg0dCO72HAd+a4jjAAS7zg/PfhRYS33lGsZVorACiYVtoU7FBJz6AMiU+0CW4ghwVMFpbuW5TSGHUOHXshdhUPo8zKU8RxVEyjdAIescZeBhd1tTg/YVxO3HXMoJ7tT62gUQ8KqCTDOsmKwpFmufs8aOuRNvYLNyjK30M+XU+C+IJcEwdS4Gplmx4q1HsunoXlSIUZHnPg7+G4CeZJGon4mLTp2OQ3IrEjv5RELkgeFrETdV/JNGKtwrDZnkSQPMBEWSoEkkDx9LStqDxJkIkYnJPGgXgCZfE8kmVjTYrAI8mZthRSc4bS664Rtx02jkKfLm8TPhJJ7MTcdH33YVULW9gFgzgu5QDjphFADswAyyPLzvPnjOg3Wrp8iXYEsA3snvwzsFvZih+hY+rASCL0/LYKn3IWxcb2ahVQC/9BVkAAxILdApyEOOZdDxzzoLALy7fAk3NsD3LinkxvpAzfUoIK4386FZBDkx3qBlJ1qfYKASI+sRrgP05aQAG6mHZ9wUGFVwHAasGBSgzb4A7xo41oD+SnAdoBN02AZQYlD2rwd2AaLTW5vcIYpAf+rxrpK3RLGlsRjeX4oHcznboXy9Tw6zV87DfHryny2SruI64QimE0qBx9vp9KhCU9MuJPhpLmOTR3A+I5UUtuUlw4SqAFqyL8KctgSWn0isL1YiEzC9BGBQ1k75W4Ab63uwoTpYVPJhrVtGBsw2F4H8Rgzqy2WyPzjCUseFFY3AeooG5RmUA8BYfwJJ1yjv/4D0M4CLbXE0sBEV36n8pdKmudJ1MMr8Pf4eE281vFKlE/2wlytsV/5jrb+a6bWdgbbLGzM2iPHhOiNuqF5Fx3EFiedgSFZMLIKK4zf/kA6Bbh2EWwAAAABJRU5ErkJggg==`,'elf-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABxklEQVR42nWTS0sbURiGk2YVBS2N6MKIWHBTBC/1hpEgIvaCSqHqot2L4KJUuhB0IYgUilRTorgRxIVSsFgDlTbiPd7BG3VRqBv/gD/h6Zs6OMfMzBnO8H3vec58lznH58sYtDLLHvtskWKCMp/3oJhffKHK8h4QZYlpgu7wEw6pppRNAobaLT/HCecKrtRSvmPlJUtO/DOv+UHUNe44nfeFbHbJosOjpofccEKjLXQw6IH2qkOX/KaFNVscoM0DH6FJbS2kgsSt4CehL2yw6vqkBC/wk2VKbvE8vqfT0aykiBARy4vILpLmJ2WGC6XDsKM5xAvKiVteXPZzaYG0Z+NdCnTCXwU+Vn+2OJV1qXkqe5crjnQY6m38XMKmIWSW+pU/jNlCStlvU6/3Ne8NMMG3//hHGu7hmmPCQ0qoz8AXLbyJOhPfs/AgjWQbeJhqC4/wyZYnmFP2zSSZZONOfazyF/mgszTPDq027qeGUXq4oIAz8rU9TEwtndJX51VBu/WDjMCFrKihSd7I7tcliarb40JrWXdv2CzPXNQpXrnjjzjgaYb2jhnvmxpmnWEKLK9chcbMa+jcEOCtblT6DB4ouRon8Q8xY2xptWBfpgAAAABJRU5ErkJggg==`,'gift-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFElEQVR42mNgwAJS9yippe9V3Jy2V/EdEN9K26vU0NDAwASTB7JZEjbJH4hbJ/crdp3sv4SNci+Stim6MRAD0g7JS0INfgm0pBuIDwHZ/9P2KrTD1CRskj0eu1b2f/wGuQ8Jm+ROxa2T/Qu2aKuCAUELUvcqdQAN/JOxV0YabinQB0CxL4mHVEQTdipogAwH+QAmn7JFzhgqdpywD/Yqbkrdq3gSRWy3Ej9Q/EPaPqXOhM3yJ0CuTdypLIusJm6D7Jd4YFARtmCPYhfQsN+goEIR36fYChT/DA6KzXJHkeVAQQPxgdxJrIb+X26g8H+lcfz/5UYJz9boFy7cov5t8VbNd7s3aK/5tdwwaetRnYnLT2gvm3hE/d+Eg6r/px1Rf7D0gPr5Pws05p1Zovbk4FKVfyD8ZpHmhr/zNef8XaA5+/8ibRuI4SsMc/+tMPoLxP9x4YlXtP5X3NMA47yzKmBcck71/7+Zynjx/wUaqxmABjzCZzglFvybrfKHgZDhFFkAxCALrtPOB6o/QXEQ8W+J0XfqW6Dy/+98jUngiH7Bqz73tZbWf1y4d68GhgXFp1X/33FTwYpvu6r8vyikdBOeTJ8xqM94yqD+Hxfu2YppQdFJlf8HGeRx4jMMSldHLRi1YNQCVAum09SCJwzqodS24DyDUh+iRmNwYAFaMgFo2HtKLTjMIP/vNIPi+fsMChwgswFtZzBfgvBfdwAAAABJRU5ErkJggg==`,'gift-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABIUlEQVR42u2RPUvDUBSGb0edOuhP0O7xN1ikqJtbi1Bw7tatnfMXnLLYDuLQbEr9WiIdLHWIAYXi6FLoqNjSx9ckpAkBdRU8h8v7nnMeTm4SY5JgnyFv+FTiepdH1UP2TD7YYcEJR7h8YKnekvZUd9Qv5/EreqEWuONGeotHIey49PP4mFbsysChznZctxjn8TNGrMT7n3nXiXav8sDpEivS5lh5qX0vOKH35f3QOepBP/RtioYLJiqXOdDYk3rSQWYy4dwwo565lCWsJC1JrcykzszoM1V/iVdZGL1IgJ1KJ4U7mUnAyLDJE1PukwxSeJDqT8VtfD2ki/vzZfSzupH5x/8EbvNKjYM4m8Ia0oa0mXRrYuwIX+eaOd/HXMyaMZ8pc+wP4NlcFgAAAABJRU5ErkJggg==`,'gift2-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACxElEQVR42q2V20sUURzHl+ih3oIgeuwhNS+bulszzuw6O7NnZndmx1K7SNSD9D+ElGVuSoFklzWVhRCE8kJRQZDoPqjRxSAsdS+Zl90FI7AepQtG/TozNYOzq7tj7YEv5zDD+X5+53t+w1gsJse7WrRz0YdCWFMGyegZnvMtuRjYaAYLUrS8dJzanhuAhE6lAuKy+7wlV2OMZbe+FJ0fn4oUjHgJeCE6viRq2B3/X3mVkBeXUCOu+NEDj/1rUCiGVn4vDHrKV+clNByXUcuiTziwaWPw+7fgCM5g42+LMq/H0i0UQRufDzEftzaunwsSfzXBsttMA+I+FMDVQ/LYIUjW1ahGimknBgzhiHoEKyyk3EnU7VgwZy6jSrzh11L9CUjU+gwmXRigGA94yuC2UKKfZF7kYJohIco5g2ZacjRxRIal0ydT2xIeeu0Qk1h1HRJJiPxdzwqMCphxVfzImj3+gFaSddUQP+yFdXp/XUU4WgWop0CVRRsCkjJfaNZUkxaPphhyNKUZT9P0LmVOSHyFtnFO5EwBYshpAODL7tCN37IVe2acpB2/mFMgGmDS7YDnlQREPS6Yl9ymq08DhBmKxg9X1QtiyJGkiCjFdIgsgydEKYzS9rR2XKswS20M8N8r3q1ooopomHIRn6ZY8vMbieodYw7CMFUOIdoG0zUuiBzlYLbanTWaNMDFQSus1WAzqW++1Lff8O5uC2Ewf49PuZ55TgBK7rjfswOa+opbG3rzljX1n7WtaCYt3YXQHNynqq2jBF7VM6bMDYAL/QViQ28++O9bQZnvNNr1Ks/1FKjPFF3uLvrTtl42q3nqJZcpx7/y2JYxoq6ALWPmqYpxjgkDoH2EyAjovFFu2lxTBDle64DAOJURcOt66aYBYY7+rgOuhTKfoD1Y+iGKnAGzwt/HzTDPFOqArG06YB3/l9/tb7R3odZgqrQLAAAAAElFTkSuQmCC`,'gift2-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABhElEQVR42oWSSSiFURiGb0mmyJCFyMJYZKGQccNNWYiylBJKWVMyxIYoK2UhJUqGkiFicd1kyJRpY4WUyNJCyu7xOvdK97qn/3x9X+93/qf/nPOe43KFGAxzxAFLHCraXE6DS5III1WqhBVnvIV+v1qkyBkP54YcMijD64Tms8ApG+yD6hYXTJJigzvYo8SoEa1QbVQtZ9SEghtZJZ1R4qQ3KZY/0WY+nmMKguFILVwkA8NMNyVXGjkh33TZeILxJvpYIc/fFVChmv67b5bJDcQnKLfbRietf02yco4sbSjWgjfQ4xNRcvhTB5snkzXtOSEkXk+vT6xzSzvn1NDNODN8UWjFSaOKOx2sS7b93OUQs1otxoa/MG3iTXnBjtHbDNrwI397rBygzmg3wzb8UVu5VHwoX7lXveKZLhteyZheXvjf3+WUx37UH7yBCEe8FC+JPnyCWCfcnGjXh2+REIjLSve/qJMtBm/W5Qfibs0Gx5AemS7/SZ89vCsfuFb1sm17aN+ubGoJWRJXiAAAAABJRU5ErkJggg==`,'gift3-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEoklEQVR42rWVe0wUVxSHiRqbQKkmJq2xaf2jf0CKWAUUH62AUiLLo1gr2GLEWm0q9bGCgAsLTljAUhEfgIBp0sZHrH3aiopYQlqEsLMzu4swu7wfiyJRCuUhzN3Z3V9nhgqUWKUmTPIlkzM397vnnjvnOjk95VnNqNzXsPHmIDbHFqovrg3Rnw1cyx5S+rNUe7A+X4r9oqALFjo97+PLHChfr8/oCzUUKd5mVbVB7LGGleze/lC2+PpG/cnwdazqr1BDIfXcgtWssiSATR8WV74zkDlaKL7Dl90PceVHQw0Fu/3Y1KFQpkj1vyaFEzULazVuUHy5MOdMqrc/nUAHMdm92+lcGQUdy2+jT/SGMUX3I6uKzl/NynOXxiKIenlaAmFFKk08U2APzoRd8Q9h6ej72WOc/svLJr5NJjgz/pkC6zL1EPFIhtUnFbaAdNg2aGALovDwO7dxei96jMWnEpj+27Mz8FI/kDKYDO+TiM7iRbB89foYxa9i6hgZb3XLtLaJRGc5yEcZIHEXQeIvyfAFZzDKJcjwJ4rH45PomHahxwX7v5lhwWdFMyzYdhTk4IUZFEjsyAFRnp9BgUR0Fvg8CrzxU4ze2Qs+9xTIgXNTuTttQfeuXAd9sBCTJfzZPSCV62T4U/sm4seUIDciwZdGgtTtj3zqxIuYbmdnnaXOqboZc7XtCKxoH6lM+7aN7Mzl+ONJ90hpFJHgs9QWKUYu7OmThNbrAeBvfDy2haYE9X8K4o1XzQq6HApdOZK4CoSZmpDHXfmzNSdnheCt7iFLkiG8Q9kdwZmliKDmk6oNdutlP/CVEeC1UiaxkkRAa9K8JwqS9D8J3fVq9IhwXDZGxBX9weVjcA01KLUPYesR2GI0ct+xva/Ryqu/JAroGIwycSDX9shZPOLilj9RsIQxWV2qzZjHdGExN4TXDHfx5s1aDKwU28Unh8FfU4H8qoKQSGE4Ihu9N8PH6lIeDXJ1uyjaLNYixAFDxPx/Tdxb/31iu7nN1lhngaX5Hs41GuFKt8LXkAcv/T74G1PxQ8PXGOBUGOQOI1xfg1nVLXhR24lDhpsYvP0urMpdIF7JIEtTpKZXCkXG4rH+z2Fuh6nJIU3e0dCF/q5OmQW6RodUbBetBctNdpnPzXUI0WshxQN0txHL1ctxZYX+obSFfNxhCBvTHrdvkyywMVtDSKU/mustGKz7Qt7DYS4RS5kdcNfFIqIuD5rmMpn8pitw1bYihinBA7FOfVwKsk2/w4uzD48sVYs/YBKsH6TCHjJ2P4hZ+DhZ2ehVpNIPXRyNR8a4cYEr3YKX6Da8YbyHdeYhmUBz35CLtnP4heoGeYw0NsA0CG/ONjDqqYZ8j0SlgfyYLAkc2Khxk7Pga0K65R9I+97jdiB46st6F+puYTFzC9sbarGzkUNUY+vxBUzP6dnVTfCha7CZ68RKkxVbyu6XSEdYPml+RyAkUZCO8kRruPOhO1+zqYxUBVp5XVQbzyWG+4OaE1yrqvHV7xYCjMr+tMaSGKqiYo6HWLMFbM9JZ23ngDNt4T3rrflbgNnCKipDug2tb6UItvWa0wjPfEWa+28F1GifqmgzyQAAAABJRU5ErkJggg==`,'gift3-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACPklEQVR42s2US0iUURiGf83ahF11YTcqokQl0zGMWrQwMimHblDE1KKipgQtXXgJuohkNak1JlQTXtJKYypNR0UZK7UoqCi6rbpsCrJNbWvx9M7f5DT8OWv/w3/Ox3e+95z3fN97jmGEfSzBRy/32EcBXbLussCI9HGH3fThoZmLNMnaRWtkgI8rFDHMYfLxc4QafGOFTsamdo3THMTJCUo4IMut3WwsY5IV0M2pYOug0xyHaQx6ztJgBXSOWttxmONxMqyzIcAga4KtgkpzvCpKmcSadq8V4OQRxcH2hlLReCBrP3PVv2OtFTCf2n+SG0MirgiExj8gRf8ogOn/yZHcyTxVZhzEyK4j+g+ADPppk6bqiQ0PT+Qhm0mSSv1c4qME0cZLWQPEsYXFrMYbDvBK0h1a7RZDfNEOK1Syej5hZydziFfvYWEofCIjtIiQl5PavkWedhrV3yaFdJYzS30Zq0KALJHwqtbTVOFB7fGaY5znlewbgqxkHWd4S87f8HKqdIY0sW7mpwQyxC/dhlJJ28EmWqXZJraSymUKA+GL+KrjlnBT/L9Trfvg4hyfBXcIPEAuj9khBjlmfRIMtrFXt7dH2bbrBrip1e/mvpT6XrlxSoKVEvwHDrGBPNYbYnhU/CuEn8dzcQ3s4NKq5fL7tISd68wmSgp+If9Sgwly28yz5PKDZ8q9hyei0qdUZovMHr6RpdmNFIpSVCBwho4TeFKqVKQ6Fa5fL8YUZtIgkF/PQBwXNNuluamG8RvuyheNbSFgfwAAAABJRU5ErkJggg==`,'gingerbread-man-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADZklEQVR42p1V3UtTYRg3iIi6SKKLuoqIILqJ/oIIgsibCoqo6KbLBFGJ0G1Hp24nc6t0c2ebqfPMr1ykpmlz37IPd45zc+o0m7qpIX0IA9GLqHx636NnTp1u84WHM9535/d7n9/veZ6TlZVi2TSiHK+erPHSpBXFD4aW/vTSUht6KpjmystZB10+reCMSSWcMlPCdQQIe8Q/FBpPvfhkRuAGbeWJgVphrK+mCOx1peBsKId9SHC47Hbx4bQJzJRoCIPj2AvctXO/SSpPC9yIpOHB9yNIEn+CetnxlARWisjnwT/In0M1UcABDDVJQC7MB5kgHzw6CbdHlT0Di7YskeRaSgKLWtSOwU0aMXxl7eA1dQPbWgXOxgrIufMQbt5+AI76cmBbKoG19MDCqBt8715vEOgl+SkJbHXiJ5hg3NoJ/AoPdnIAipJClFEh93vaZoifR1kTt+fRk1dTV5BBfKRfUbSOM5j1DUJkxMFlsFNznMG3oBOWJrx8Bqsh9G5aRlvURDvvg7FWkJ7J6cgzHw5dCvW3X3HXCs9aKMLGk3h0FSnApWRAJ86OMgPnlpciF5PfmhL5bE2y9fAoA4llyjcbBproKYEQir2IohPDEOjSrA7RpBJZcyhh3hBPMVC/UgAzwWEOFI2JOMHApkyrs7mwNpcLjF6SlGA+NAJoPm2UNV1xfatzNcQbTm+qFKZ9rl0Z4HA1lkPYjC5gKd4GinvCvSlhZNQDw+2vNmUjH8cJerXiY8jMNSNVAnOh0aQEJkqU0ujFL2PAtskx+JhdJz66y4cxx8eX/r5W2qomXljVJfLPSsHvRJLeiTH4NDW5DRSN7Rkk2T0vLbk17ewtjPjdeWkPPVOt8HucQFEMXbMR6I4uohu+SCAhzQf6HlgVovO7pFIKwf52a/jh+YSef1ld1emMCRKbLZnhmIA3l2mSFmRMYFQJVrgSTShXTIoasNmoLF53JzQfQ0v8GYFPs47imSAL4YAXnB1qMNeTgD9CWx8kwmFtIMHfXQ/RcRbVvx8WJgO56etPETJ8YxsthxGjASKTQXC1VN/nz5kO5Q285x94D4xBxfvxKG0Cm5bI26Z5m2IFrVP8eSwWy3YbVLF4jyAZ3Y0VdzMzWSPqwn2ASnXZpBFd2HmOByIC/oX/g7zp3wvnP7sU5ZOLVPIOAAAAAElFTkSuQmCC`,'gingerbread-man-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABvklEQVR42nWSW0tUURTHx2ZQg/GSN5TA6ElFffFCEkjIKIgpKJjpkw9iLwoi46Dgiw8FYQ8FvZiWNeJ1nCFNzS8gPucH8TP8/J91ztTYOWfDXntd/nvt/15rRSL3FuWkOCXHofYJKzyKhC8G+c0ADzyriAQXjITDZymmiud5uHaML4wGQct4+5/nGbWSUX5R44fP8zLkzQRJv3OXEskx+iW3yZDW+YIJy3/sh2dN1lAheUYpZ1anWvPm/PAdKgsqdMpQQXH3/PDRAIZuZIFxv7OII4e3z9/HsVPSQldKxboRgWviZscZpsy0h1wp9ke/WfYu8YplyUvtLu/6gQgcFqRzvp1k0jU+0qheZqTVe+H9PFxdfmJlqKOBz25wnBU3+99scaY8MiU89bIv8TofThr3DD/pM/s9WT6Y1itfxrin/FXoZM3lSgfnpq3SEz6R67Tb2aL8rc5faOJTGDjqZrQePHamnm57KRYMH1D2YlU8Kr5b6kLM5v3dv3G4D//GhkCLTLMoa44Z6SfypYPhmklxTXBLnbQqnf00S3sTDN+077Xww7O/0ibZTEcwvJq0xmnHnXGzv6v+B85b+XUHoVkoLPWjeIYAAAAASUVORK5CYII=`,'light-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOUlEQVR42mNgGAXDH/w/4Ff0/6Bf0v/D/ub/j/jxUmwe0AywWSAzgWYz/D8cqAbmHPS/9v9gwC4gveb/Ib9pQHoqEE8HyvUAcT3EIQFpYAxxVD1EDqQGrHYqWO9B/z0Qs0CODlRD2HzQf8X//Q4cKK5ZFcr8/1CoKNBV6kB5KyDugGIrsBhIDqgGRc/+AAGQWSjeeu/gIPCj1GPrd29nW7zeP+QXAcL41HwJdnf5Uea5DWQmQtDZ2eOTi8v/zy4uKym14JOr6yagOf9BZoIFrmpr81w3MNh/y8Tk/yd//18vXF2dcWmOm2y4DIRxyQPNcbhmYPD2sZ3d/4++vg/+h4ayMVzX1y8CCv7/4OPz/3dExP8vAQEfcRngN83gh/9Mwx+45IHmXAY5FGQOCL/x9FzIcN3QsA5kAdBGsODXoKAv2DTHbrZak7DV9n/1iZj/5UcjzmG1wNDw0W1TU7gFbz09V4AssAdZ8NrNDSwItOg2RtBstDQEWvA/d5/P/6azKWBcsi/YHIsPlgHN+/8jNBTiAw+PPJjEGZDNv8LD/79ycwvBsGCrjRrIgpx93nALCvYHGKCru6qvbwhy7EtgJH8LDPyK7LUIkMQLZ+er2JMPAyPQgmvJ2x3Bhteeiv/R8J+BCUc87L5pbPz/rYdHH1xwv4MDy1UDg/nX9PSMcEVgzGbrFJAvgOH/v+RwyEKcEQ00A2QWyEySypgEYC4HWvAqdafz29xt0Xw0KRijN1s6g/BoFTEKUAAA/rtdjgHVVXcAAAAASUVORK5CYII=`,'light-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABTElEQVR42u2Su0oDURCGTzasGMEUUZsoiiAo2nopxEVEYxOblHkEKyEIBi+FohgFwaCFATGCLMEEG6+gaGFEW1/Axgf5nN2cXXYLBWs9Azvz/zNz9t/ZUeovHspskWGQ2I9VManISOWJwmSYN/apUOOKGy6wOdJmC7oVtibZA14YwWz0nwfvp5UEC2JtxANsHNsLV3miTiQkIUs2hKO8StVSAzgyPukIFeTIhXCSD065lGvJs0w7lvSbfjrFtVjKx02SnRSha+QVd5ocCjSs8y626eNZFnV0L4J0OM+ojtIUMYhwSFoz01q94lmxx5gEBo/eGyjR6fpuSppp5sEZCuMUFD3OuJgTdZ6ADSZcbzLjc1NE5VmhywFn9MrPSfjJfo5dv0uLzxkyoz7K3ufWPY06XZUxJqmGuBXZh4HvNsdiR8z6zUoW2Fb/xztfoavdR8PgWp4AAAAASUVORK5CYII=`,'logo_penguin.png':`data:image/png;base64,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`,'mitten-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADAUlEQVR42s2VS0wTURSGa+JGN5qoicaNGBe6M3GhiQkbdybsjAIFBFtRY0CLfYGiBSrQBxTCywKdsSqghIhgNDVCKS/74CEgQmtn2tKWAlIeKi6UwHFmYtG2Q1saF97kLO6de/9vzjn3nMtghBmeE+k7XUevzZO2coprgjO5GhpTM6IdS8dv7rbGsIG0bye5QIjRmeP/BSCchsOas1IYjBUBHieB6XOKIHOeL/fwUPv+qADJhT1fL4g64FbdJ+AjeChb4yGYjAGwbUuAxALdaoQAygQo3sJpdu0IK2yNYcVhhy7HM/O1a4GARsNMGBCmz0as+8IA2A4ysUn5WvABlJ1ukLROQZfdCxUaF5S+dIaA2PAcpeNAxICat07ocy1ArdZNARqNM9A9tUCBNoPwELw6IgBTrAVREw6ytikKMrK4DF02L+VN/lM7CNFNQzUdJJxeOngxpajPmyM1rt6XmYBZoIN7T4agbWwW2sfnwDS3CJMrX6DfvUDNSZO3O0GA4G5CdDnAgwd+4qwSY3GiWLd+o2ZiYxNTrKNCVPnGCS9G50BjmafEtbgXnr+fBcUrXx4wHb/OcYy4RSgfxT18FV7lVxuXpIbWJHE3ZNWa/dwkvKEAQtQCLcOzUP7aReUA6Z4GdZ8Hbj+y+fY20sZaJOranibRj5BC3Prgu84uMVGA6xWjUPDMAXce2yhAXpMd7jbY/9x/xMalBbDlJiQ+r3PTQuIozUB+Tyns3VgTNzsC9y1x1JaDtIAkcc8PltwYsnCulg1TXlwpG6JtEQIUiw/VaxbTpHq/Q1lK82qgUEbVByrhLJmRyJPFt/6T9xA7HbJiiRAJE4h28PvmfBeocGFyYe8St95K6w0pnlk9DjwVRs4ja9OsondHSJCgGN9FzlOKej9H1tywiahadKpErydDEhagwpuiAqTLBziER5G057SoX7JUSb/574qm+fuOLT8u/l4M7mXJDIbMmo/rQY8Kgjdnqyf3MP7FYCsGEjIqxxQc5WQLX4XlCuptsVs5/wu/IsVv35Uj8wAAAABJRU5ErkJggg==`,'mitten-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABt0lEQVR42q2TTWsTURSGJ20ClapJQ/0iig1YTWkX2dQkICoqCC1WpBqKO4stKaJ07UKElsZFEBcxmkXcGKOI2BJoqEZDJStBf4M7/8bja2bSzkwy6ab3kNzz9XLOee8Zw3AdJqhbsk6EL7o3GTC8D1M8dHnKhPcVcJsSdxzS5JJ3+gGFFzvktcTfHTBCwaNulaDbGWCVV7sAFhzRizSIOAFhatwwAdxkTNYsZ23xc/wg6gSUzZbUQIMZAdbkOW/LOM1nO+AUGypcwK/Hm+Ynf9niGiOOLmq76hLfKVIRIM1HyR/gd0uLkyfeygmyaSb3kSOLr82SuH/BJ36xzTMSshviaIWM1iRhcv+hzQjDvNX/CQGuaIbH3Oew7Kp+F0TIkFnmK9d3GvPRsBj5z1mMkPSjvLePUSLlGOsps5Z2xrpzXO0+d3s56iRt9jwvnQnfCLTuYzyyPCHeqe4MSe6K2Cz97i2paKC0XrFp88Z4wBPuidRo52LFFcpw0N1cK/aG496rvcGhDl+dPm/AHLdcnhR5o9dhnEmbdVIvfaQ3IKiFyAo2SJRl7daosffhMs/FTVHsdf0o/wF640etyhWm3AAAAABJRU5ErkJggg==`,'mittens-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACF0lEQVR42mNgGAWDCrw19+T7YORt/EHXW5BUvReErLUvi9nE3pSxlMaQBBqo9MHAcxcQ/wPi/6+03P6f5jN78UTe3pKQwZ8NPbU+GHjsO8Ri+H8vgz4Yn+AyfXNdxNYeokDPTQxo6CuQwTAMsgCkEKjp73VJG2OcPtZxkwWqfwPSg2wBTO9VCVsthg/6XnOQDUe2AIQvCltewmUBUO1SmB50C0D4NK/ZTZCiO/gsOMwKdImIdcYNGVs9mMFfTL0kPhl4WgPVvsNnwWE2o18M6IajWwDD+5kM/l8VtUn6qOdlDlTzBV0PNgtAmGgLQPgUr9n99waeS7DpoYoF5wQsdgPlq2liwRF2ox+XxayUP2q7CwF9cZWqFhxiMfpzU8pSAynti3408HxKNQuAQbMHPYl+1PeooZoFF4UtzHFkMuIt+OQU/v+jmR+Y/cbQ5/8FNU+4omuSTvLoFrw3CBCA63WO+H+czwKs9gCr0f9jUDaKBX8mz/z/o7wJzP6aXfH/b3Yp0Rb8nT3//9vYfLDah+ZB/z/4JqBY8AJswYy5/3/WtIE1fMuv/f8vqwTiImaDf8dk3IXQLXhsGcoJy8l/Fyz+/z6xCKz+iXXo/8+BSfDyCOgSD4WPRl4eP4pqi36kl6WB2N/i8nLfReZsuSRqVQMvFbGVRcBSGKy3rLH0mUf8TJD6ezqekx4b+c0CsYE532a0Ehx4AACfsZM6qaBSugAAAABJRU5ErkJggg==`,'mittens-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABUElEQVR42t2Tv0tCcRTFX00PcpDKtlITCgWzIaKmhlqqf8BAdxsanBNqjZqDxmiPtlwbCgSpRbCIggilH06CgS2fjs/H8z212r13Oeeee7583/3eZxgDE4RZIfKrGpEa7tAYN7TjimhP8zxFW722VJ1d44kUCbZ44JNJT/uU1HuSUtM8C4cMzngjYMt+Xjn3GC54wW/jCd45NXTmoathnwbLBC0cZJUv9lzqER+G7pZxldLWbZusK5sWTrvUbeg2JMizRIFLZUEoz5xLzfQYrHJUH3eirHXPrK+BWQ2hxLiyJDTzj4Fh7nhsT42A0C1DfxsWxTcctim20MeA2VoLQozoiWDUaRgTS6oastbD7Bh2qKpUZlcvDj7H4BNLkaMsXFWXbchxQJ1pKhyT7TFkVa1Irasr1zI08MY3pmMwxbzRaO3qmifjnkHGu9TYIPzMPy8xYwtRW5ANAAAAAElFTkSuQmCC`,'mug-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC7klEQVR42rWVTWgTQRTHowetR0966NGDF8VWUPEDq6AVpbZiD/WggoiprQU/EC09VKkHRfAQhGK10YOiOQiNBxVtsjbStE1222Y/0uxukk3c7G4/slsoaCzRPmdSE4pJk63Ggf9hZ5n/b96892YsliKDV5ObRUU/J6jJDlHVrwiqYeW15BlR0xt5zTgqajM16HuHqM3uFzXjoqDpdovZMTFpbBFUPcorRhOvGnsFRT8kKsl6QTFOYSgybMFQUTVuYoUmkwclSaowDQCAVbyqP0CQAbSzXkFJtiHQPlmW11nKPcSEXikqRh06sna068eW/zlwZOUzs21am7Jvs8+/OZBeiFsB1FasKMSb96Ts1R2pp1XTafcxWJAufAWttRcSbZUrAny3V9em7FWA9cPXmAVAeqSRxHPzfTW5ud96ZMqYIKQKws82BT/YHkad1wNxd9dcLPDKkKT3cazYuGMmPPg8HqMduiy8/hYPO2cX//WHRgXZRomJXcUBPm6jm2Qgq2EuDKiaTAtDChq7fMxuN0n3uEm2rxQAVRRMKNPmAZ9pej0ySy01Xg4QUmbgsu8enPS0ASEx5gBuP3ccmxF+2to/zGwtBrgbeAZ1A80ZnR68AZQcLw0gSLphEcA2FcvBuwiZM8+qc7S7fAB89lf993PmJzyXwBMLlg/Qw/XlRWAdvg1MQvt3QCChQL2nJQ+A1cM5SySZYmszAJI9XywCG+PIMz/rbQdWmSwO8Hq965DZHOoDdrEf8gE4wQ2e1oIR3Bl7UrrRCIrpRIY//+yDIVbMLMTVUsgcC/cEjY4wAwh/6Vr2mnBT9HaCZLpdJDOVBXjGFqsEdy6umLdhPzh4Al6EPoJT9IIrSsOYLOciIAVpZ+kLj+KOIPOFLITkY6buIVpSo6avaxTJNfeSSMYjCeCV5LLmTEyNMNGpDSt6E24BrEYgMVNhFAufRjkYQkkfCUZywkVAMtHDf/2yuSjmZTaCQjsPytNpjuPWFFr7C0QLiOTnpHIwAAAAAElFTkSuQmCC`,'mug-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABuElEQVR42o2T30tTYRjHT9uSGgxMNChhbvNCSTBLchdRNByCKEKGUtSNlBbELoLWnEU/5oJuWkHD8EJY3UjBdpNUigZ1kRdBN/0D/Sefvh5P58fOhnufi/N9z/t5H573+WEYrsVhrvGUAjkyLEhfIS2b4RPthn8xTpUhBhgmxZiwWV1a4Doxo9EixAN5qlFkmiNGa0shnWKOm62g7bzmo2lLxHhpqhLRZniFET32stRtfnOJzyToZ4sOP3qUXjZ1fEYeE9zXhWfckEpILfoukFdeVpvaphudVDZ+cLbOQRcBW1ed33dYpk8P8+AKZIM1e/fYOagSle8/blylWifAXXLWftQ5qinTRR45OBFlI2Kqt1yoD8aPh/nFlL6d/GXwYHxI/0KmypKpx1M+/BtdljqkWpzw4nt5eeHBC5QtNcXuXjrd+BsV+itf/uOclMeIfbrChBfvVW/EKXPe2s/znKRa7BjdnNaQfFBINXdJ+nnPT+7ZLXyVh7zinVw8URGPa2RK9T0TVAg9Dfu0TUMT9/+O6QVZLqqijiW5xQ7pxv0eVJYqGm3H8nwn3HyezrFtzdO+1cg6p/8Au9FtAvZp8uIAAAAASUVORK5CYII=`,'owl-64.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAARrElEQVR42uVbB3iUVdrNtExJmZnUmZRJJnXSeyUN0kmvpJMACZAA0lFQVlAWEMQFy4+LKLhKAEXFhqA+WBAQUERFQNRdLISAICqwQJI5/3u/ZMYEQk+yZvc+z3kyM1+Ze85979u+iYnJf27MJmwjvEWQm/yPjVmE+7telxNG/i+RFxM+J0i6ffbwHd5TRIgfLALoCB9e8dn6O7znRJ6JSYdMJAodDAJEEl7s9t6G8Oid3NCUz//Gz1aptzWTHB4MAqQSHu/2nvmAqju4X7JMJLx0sHEEhHx+G723+LMLEHrFiq8meN7u3rcUmx6aOSQYZ2bVwVoq/jd9Fj4YrGBLlzNkYw+Bdzs3kQqFSzRy87bvp1RxAtA2uMwEoUMOfT3hBYStXfu1L8YownSCjPDpbd5jqKmA37GtKBU/T63mBGidMRL3xIf8LhbyH+prAR7i8Uw6JEJBK70O66N7LiMsJrxwqxdaioUZUpGwbWliONZlJcDO0hwLU6M5ERamRMFSLHq7rwWYMTLY+8dUN6cOAZ/XRgpP64q9dzqaCS8TMpkzI8QRXK53gbOFWa25qahtTWYcfmwogbudNVbMbkJegBcnwGISghbqty7r6rNRW+bvcfI0fcGM2GDweTxS2fS4wMQk5xbvoyJUyiWmG8ljn6DXYBDweB2iTg/OvSfTbhHw+c/R67puXl3srrRcpzaXdWwtTsGJcaWYn5mAiaXDcfSNNYjXuYHN77u7KuFlrdCTSF/0pQClaW7OZ5jCDLtGFyBP5wryXLCWiQ/S5CfROU7XuJY5uGILU9HXUqGgPUPr2HZfdCBeyRuKI+NHoGV6DQz3/XpiOd6pycbK7ATkeLm0mwoEzOLOW4hFqwLtrE48EBus/9eYIo78+sIUhBHpc+89B/0X21AUF44T00dy99lQnMrmpr9d53p17irkH5mTEKo3TPSDujx8Mb4UO0blY3y4H1wUFu1MDCuJ+GsHC9kqiUDQoJRK45JcHMbYmUmPa8lTL4gLwdFRBdzkDTjdNeFr4Udybk9kxeudaI+TgFgxNJK77umCFKSEB+DbF1eg/eOXcPqjl1A9JMx43ercJJBwF/ts+W1l0n3zksKNX5AX5gedkwrrSGnDZ3vJKhYkhKHCxw1h9tacKVvSpJclRaClG2kDfp5SfV3y3dEyrQb30r0p4UGYsxr31hXj4vvPoe3DdWj7aD30n2/F6IxEsGSInb8mfyhLin7vyy0w395Mqj81qRInaDKjspLQsr0ZGRGBaIoJwpHRRUZin1Zlw9dGgVQXB+yvzrmKOMOpyVU3Tb47PiSLU1nIkBcfjkvvP98pAKFj/xuYW1OI7bW53HmvlWfqyU+19Bl7yrWPLx/WaX4nyPRLYkPQ8tYz6CDl/2/uXQjx1CLKzRlTwnxhJ5OiMVjX66oztDaV3RZ5A9jW81HZYHxhmlGA77asQZynK47fVcGdMyHSnznYtX0mAHne0yzeGkjcnxaHHSvno333Js782ApsX/kAKFfAA0NCeiVuNP1pNXckAMORCWWwJb/w13HlONz8CCJ07thdmc0tzjfkSCkM/krTHt5nArgrLO9NdFYZV3UvmXm8vxc2PDiFW4F/vfQYHK0VmEwWcD3yJ8aPuGPyBmwsSeXCsVZli/eqsrj7H6jJhaOF2S805ZV9nQiZkof/vfvqfl9fjMRAb+xZvQChHi4IJcfHEpPrCXByQnmfCcDQEOoDV7k5fmgoxrOUGNnJJP+m/IH1Fvh9Xr0ITUxiWQb2VFqskdCrBcnQKC1hTt55d8Xw669+PwhwdFI5KCWGB82BcgZWCY7ts9jfa/UlEBSQ2elHB3hiPfmETTlJoCQIKwwOshf8NLYEO8uH45vRhWhtvPEWON2VaC1Lj8U0ijCP0N8XStKwp76w1/PH0rZjRVF/VIDXGsE2MvGnhrQ131PTK+lNhckYkxyLhCAfNBakoTojAUkhvgjz0GBifBgONfUU48vGUpT6e0BDviQjMhBLJlSRj5mMhydWY3JZFoZHBSEn2AdfTarocd3n5Pgo6YGNTDbgfYD5LFU9Upffg/whyvZS/DyxfEod5xwNocoAFr+fnFUPG/Li68oycGpmLRZmxsPP1RGbFk7Dhe3/4M5r3/0iOj59nYsyLNVl2LZqEfzcNFhKIfB0NxGyvVwwxNn++QFlTwXMi7nuzvru5PdS4pMTE4ovnlvak/jODWjb0dzjs/1rF8PH1Qk6jRpNxen4ZdvTncT3vESk3zKSvhK/7HoZ5ZlJWE7psEGAh9NiyBlatAwkfysyu461GXFG8jvJCVamDjES4TK0fZt7kOn47E10fPIq2ne9wB0/+/YzONS8zJjSsnziWsS7o+3AW8iMCsY3Xdthb0MR5SA8tiXtBoS9jUzSoBCbcuHHIMColFgc3bi8i3zzDcl07H8d7Ts3doJb9a03Rd6AzzatRG2Ev9EKKP7rBQJB3YAI4Ka02FHj524k//moQkwtz/5j5fe+cktkbhcRlH8c66orssgZKyXirQPBnycWCi6yet6YGucOw/HXVhoFuNXVvF1MKs3CTgqZTADqWFG1KPp+QAyAssJL3YudEqrODOTbd23sM4IHNz+F3KExmFSZj4ufvnnV8Rm1JXixNI0TgHWqKB/4bSAEyIl2tLtkIH+svgi1wxP/EIDCV/dJ7tv4BFIpMowfkdMriXU0+dQQb8xrrOaqy+7HgqnIMeQbzUvmXHXt7PpyrKDuERPgIeoFdnWB+P3KXiIU3jeCmh4GAVgeMKe24A8Bdva0AB+K2wYS65f2JHFgwwoMczDHkdpgjIlww8y60h7Hq7KTuesk5HCZ07tSgDljyvAcJVxMgCUUCru+R9KvArjKLZunRPgZBfiMYv9j00b3iPH6A1uMk6zJTeUmZiaVcCbdncDfCmPQWuaFy5Oj0TohGmorS5zf95rx+IV9r+P1Jx7EV6+u7nWLpIT54zBlney5wCx6OtRVBvfzk00n++cXxIcaBWBFUFNJZg8B2j/e1IPE208txrdvPXsVgamxnjhXpcPFxjC0TY9Dlp8zzu197ab8w9ldr8BbbWucx0iKSjZSydf9LoC3jWL+bOrqGr6Y5QIxlPpemfKyZuWNSKR7O+DXSh3Oj/RF27Q4xGjtbtpBriefUObvaZxHltaJWcAHLEntXx8gEFSND9W1d0+BqxIi8MPmJ3oRYdN1Say7rxFT/KzxO1nBmbFh1OpS3LQAOdEheJeqRC4MUwQQ8nn6Lh9wd3/y1xCO2Mikp1mJaxCA9eifndt0lQCdKe6GrpT46tzg8mdbUBzqgTyNBYq0CkzLibsp8h83P4o86kgdHJmHdFcHiPl8/UKNpr3Kxua3ridN/TYm+InF56Ok0jYzoaBjVWoMJwDrBOVTo7RXAQygYqh9z8tXVXjtB7biqWm1qE+JwPk9m29KAPZMYCalwVYyMbQSSftOf3/8GhmJDIXiAs1xaX8K0LzYykr/k7MzqszNOe9e6+eBz6kXN5Em9ObDd19fhO7bg9UA5Cc69r3aWTfcZPa4+dH5XPNVIOQjaWIIkqKc0RoezglgJxJdpjkV9qcA6560sdGfIAEeCXRA3pIYWKvN9UIBHxlkiiq5xR/VHeHkm6twb20hSpKiUEB+ImdIKNfYyCLUUvE0szgDS6izu/a+Jk68fWsWoWXL6s4t0430D++uw6p5U5EY4s+yPb1Waaaf/mEZlpxqRP0LOWgI0eIDb29I+fxL/ZoHUIq1Yr61NSfA1DgNZh4sxqLj41DzTDq87Cwhpcmxpzdpvp5YVFeEIV5aeJma6icrlfiLWt0xj65jmO3oiEaVChU2NhhOx2IsLKCTSjsshULW2kKA1lk/tTxXX5EW26HV2nGfhSoVZ5drtRe/DwvD3rBgVD0YzwnAEBPtiEmWlgiRSHb0dxQsq5PLf2cCVCc6Y9aRIuMkFmUF4nREBN7380MNtdCzK/0R7muPaHqS852TE9g1P/v4cKZ6LZwl7A0MxN9cXS84mJpeYqZe+fdUjHspDwuidT3OzQ92xgPfjcHdR0vgEmUDe4FArxAKk/pbAHONSPQbI1Mc7YDJX2YZBbg/PcA4OUZi2uPpWPjTWOhSHaG1luJpWu2t9vY4RA7rDAl1PSEYjoWGIt1GCZW7Ag/+sx5ZIwNxNCTEePwNLy+kTPVH02dp8ExRQcnn/zwgvQAXkWj360SkKdwRDR8Nw1+OVXMCzMzw60GgPt+/U5hjNQgud4Wjtxwlq6KQdV8gSioCUJytQ2GyB/KHaJEf7oJCWtH8UA1yo1wwfIgr0pPckJziDis7MxQvS8KMneWYHejG3fuXoCC0ajSILnfD+E9SYae1gLDz16cDMioKzMwuPqNzQvajIWQF2RzRiem+PQRoiPEwWsekA5mQWohQvimWW7Hph/ONx26EIWMC4DNUw70ujHfDGbIgZoEM0TkaxE3VwUYpael8dDEww0LM411YYWWF0GptJ6FD+bSSrj0EuCfYHXO/quUmPufbMngPUyH5/k6TZZhxuACLT467oQCFD9FvgFzk3Ou4RI2R/A/kV5y95DCzNGUZoG5AO8KmZAW2AkG7S4DSSCgiRoWfdeSouvb3075eXIhiE3/wp1EIGuECdy8Fhk71RcaSIBT/Iwr121Ox4Hh9r8QX/jgWM3dVIGtuDKycLTDlYA78hqqNArxHUYRFB6WpcJbJf2LI+Pw1zEtXvRbHCRCW4YSvKbydoL15ytMTr2i1qHkyBYtax2LOd2XwK3DGXRSqdqvVWOFgi1JfW0QF2iDUyxoJPiqk+Tsg3UeNDC8VhrvbY4SbGne7OSKHcgtVoIL7joAUB478V/Q9EWLxZbLE7f36KOxGw1rIXy6WCpE42weJM3zRbGdnXKF3aIXS5wcZLYR56nkKhfF4D5BoJ93dOQs6Rd6dvW51cUELHdPIJQiuceXuEZnowN1XLRS2SXm8d9kv5kz+BCNDpZadE0kFyLWywAGHzlX6hP4OnelrFEAdpATzG70KcA08S6GTmXnhmkiUNkfD3d4MpjxeO332SL+XvbfaKaYHpxVKgeAkZYuIFIsxWy5HZK0bmvZ3CqCJsYF7gBVy0l3QoLPHantb7FWreyV+nHCEzDyaukgusbbIWBoEtZdcT0+j2BPgepM/8WCrkkEiPCbh8Y5z/Ty5CC7xtrB2N4c1xeuxH6egfscwFFJOkDhOh6BkR0RlOiOC/obEqeEbYQePYGsIBdyTHghFfNiqzE51Pfr+0/8S/MqhU9vKzgQNd4KTr4Ij5BRkhezHqEu8L9W4PbqjZF00VAGd54p4vPPsabTJYB6OOsXZMR8OQ/GzlAU6K9Eot4TYVMAlRu5J9vBMV0OX7QBtgj1kclOIaMUr1TZY6+EBsqTLJoN9WNlLz+U+GYb4mZT62suNYYw5xMkUFnPNzZCnMMckCo2PUjT4lmoAlkccDg42tLkVg1oA8gXn5jtYo0RpgQyptNcQeIaKpyuLIVZZdj3o0A1m/kIhj9fGiG6iHMHOUowmPxWesLbGq/R+P4XKVmpkMMLHqc7fExCAV+j9Y5REzaDfHQo6Q17SYBbAnvax/hvK27dRBalUy1D7diKKVkch894gxJXRz2ojVQj0skVoAGWDVP2VVwdi3Nx4NG3Oh72jBfu9b8VgFoBnxuf/EiSRINnMDAIKbax87e71WaF0rULIxU3JmpyjB7UPSJbL3622tWUdW5iShx+xIeaq0MdEMFSGC47VY8KWIpTOiGK9ftYOix7UAgTKZLvuIa8/kkQQsX+0sKXcvsoVobVarlESlK+Bb4IKHhpLanOLuP9B4FOR5UZW4yASnfmzpby3PDwlkgSNWPwC9euOEKnTaz09YCYQII/CIFWUqCffYCsS4SkqgJRCIb6kbk8l1QAN9Lm9SHTI5L9pBMhku/+q0VymJznt85yc2liYW+bqqmeOcjs1U1ncv9vBoc1aKDwr4fMvWPL5E/+rBPAWizO8JJI11LsaYikQvKMQiSbKBYIf6Z8bZlBP/zSdUkcPNx6XikRs3wea9PePHWj8P7GwiEbTs/jjAAAAAElFTkSuQmCC`,'penguin-32.png':`data:image/png;base64,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`,'reindeer-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACyUlEQVR42mNgwAL+bTPY+H+zsdzv7XrOf7fq94HE/m7TP/t/vwMLNvVANRegaur+bNUL/r/NnO/PNoODDLjAn60GUf+26a//u9UgG6jp+Z9t+kl/tusfBbI7QJph6v7v1OP+u12/Aih+/s92g4S/2wzu/N1uUPp3m95SIM5kwAf+b9M3/LtVLx+oqQCB9cuB9EWg70T+r7LkBLkcaFAVWB0S/r9Vz5yBXAB0YRbQ+6l/tuv5AS1sBInd9XWRY6AUtLhI2bQ6SX3o95bfvTBK+/WyON0PKxP0PqyJNHx0z8v57QN3d0mKLPjPwMDY4iSVsyRa52Ovj+r/2aFa/5fF6P1fHqO/6qSvnSIDNcCySGMRkKEwvDRW352BmmBFjJ4RsgXzEwwEqGrBshjdAJpasDRGL5/WPugly4ImF3HdFkepBa2OkjMm+ynXAl06B2jAAiz4DlkWdLgI8rc6ST6Y6qd0aEWcwf+VQIxsEC5MUhD1+ivLAjV92Vvg+H91ghH1LVgWqasB0rQty5oow0G43UWqo8VNSpYkC2B4VoASVkORxYHB+hGIf7c5Si5pdZA2wGvBkmg9CxSDApX/zwlR/z83ROPb8mi9DTA8J1j1GUxNm7PkOaAF/2G4xVmyCLvrY/V8gRrewTTODlb/3wbR9LfVUSoJWe2qRENRoJqfsKKizVlCC6juLNgCJ8l2HOlb7wTU8BsLwnUyQd4GYaAGeRzqV4MtiNHrbnWWcAQ7xEnydbuDhAJOC4Cl4m1QiQnitzpLbYG6yA6Heg+QBUuidS8B1TwHFuO/cKlF9sENGB9oQQQkXCU6sKlvaGBgArr+IVDPvzYnqXfAuEgnUASgWtBnKcMJtOAT0IKLeMqlBpAvJvurtBNRxqBaAPGF5EJIMMlIY7UgylAeqOfvsljduWRaIOUKsqDNWSoZty90dwL1vVwVGsqMSw0ApP/2buugcO4AAAAASUVORK5CYII=`,'reindeer-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABoklEQVR42pWTyytEURzHr0cUKcprZYHk0WxYyGyIQklSZKEkJVIWmjImZeGRNykSeaSU546FV57DMKQoO+WR2PgfPn7zcOfOuGP4nbrn3u/5nN/9Pc5RFNVYIJMKzIRxolFHMJJPP8FcKFqjkiOGeJQN77QTJ0o4DXzQJfoKy/Qp3kY6VVQ7R5PDFzN0u7+ryVP0jSCBBnhlmDeZ95lVfjce2JOY28ihhkPsgXCD+I6lhAJsdJCsBDJXFbggQfmLufGzv8FR7PwHz3JVQxenkHWfcUSnf7ycNe6pI4NkdYT7x4OYZ4JJin+s6Mcup8XEvI5+K05SdHHnPKcqifQ6vFPEtuSS642baZVnJC9qsttsinJJPTHS42tNZ+UYLRIh/g5l0cKpO1mbaItM8UkSS2R68HOiGeeJURrZcpxzp2qSWtVyzLRcjl1CPbhVYh8VXzZSWVXVeA5I4FnuwBWx2sitrlTl8mVLtCGqvkGa/NmKwTvRb7xI/jGBUdVLGWSMFt8yfuPBUoEyelQ9BLt0vNcXv+KOZudbj2zY0axYuPHu7Be+GFWSBjcIXgAAAABJRU5ErkJggg==`,'sale-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACuElEQVR42t2V/UtTURjH92M/RH9D/QmC+IKKE/UO0c05t+sIUkidIKkz+rUy8uW3XpQMIqKQfouSTM0Ck4ih2XwJ07LEt93N3WWb25z3XpNv5xy3uVbhFQ2iAw/3nOd57vdzzvMc7tVg+sIpjNu1MQvruJlwYSFksxmSzQalshLbVivks9XwPe7F+oMeKFVVzEdjUq2NzdnaYt5M1MKk/aQGzmY9nOdbYhbWFX6lAMViQbC9A+7xCXgcoxAm38M7OASxf5DNPY4xuN86Ebraugfg+e+JWsRKNMmDiK95evsg9j5FoLMLgnMKy26RnSDQdQsb125AqqvDsuCF8G4SgZudEPv6IT4bwDbPb2v2GxSwQY6+OvsJKwvLTFiYmEbE3oyVpVXm22psYj65pob4XHDNzGHrXIM6QNBqFd3PXyDY2g7vwBA7+laTHWvDI1jveYhv9+7D9+gJ89GY9+UwKVMb1l69hlxdre4EtAeRhkaEL7fE60stBkj0hVrbINXX767VlijW5EQh/5270RItIdB9+6dY3A4DoA3ebfJ1hNrajx7AytFyBeGLl34vfhSAfe0ggGBpKcImU/zl2FyuqIDE83ulI3l+YsGyMvWAxawsLOblYSk/n4n4SkowlpIChYiLxcUQOI75I+RzMpWWxtbUrxown5HBAHJ0p/O5uVjQarGu1/8CmMvOjuepBoRIiVwFBWx3dNczmZkIkRJ9IZBkgDM1Fa7oWjXAS4To1/RjTg58RHA6PZ2J02cygOYcuMku8tIc6cMqOQkty4bRyAQEnQ5+gwEfSIyWhjZ4Njpn/fqnrun/CSB/rB1yq3b+CkAymUag1R6DxXKczN8cGYA8JdlkOp2cpxiNZ2jsUAAiPIqiohN/yqUxmnMgwCbHdYc4zhHR63mNyqEYDLWK2bwpl5d/To79AHRx9s2XPdUGAAAAAElFTkSuQmCC`,'sale-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABfklEQVR42r2TzyvDcRjHVya1ZcmPTGoThSTl4mAsP3Zw282UhYOLcnHAiWxiG0l+leVHZgdZKTUMKb/K2clR+SOcHF4eH19rs+/MQZ5PfXqed6/v8/18nuf5GAzKKOGBWHKd8UYiJX6g3KCBLUpIMK+iOaJMcMET50yyT0ipM6J8UK1fH9UzzwqDdHEjuYwckcct97gYYF3wJkOqKbyOZwHaCOLllSH8dHLNCw16+J78eoQxyuhlgWMC9GFlVFaEHZ3ssjuoU1ERjxQrrwanOrservlWddVLKpJKBp6PPelXYZerVmLLjlcznRZ70qKfDpNp+oVsZpNx8d30yD6s9ABhfPr4AaWYxY8Skf1Q6bHs2R3SR48UcYNdzBp+hy8bbpR1RT8nUkh37ux+tmQ+gliks35O5dRemc2w+H9Qmf/CZXC3cf0KlxKusoyNRSloYQ6cdimiU9McMv0WfbyWECaWWPvoa4o+JU/SxCyN3wc4Li3q1rlmhzz7OAWf0Tts/2VuJuX2/AAAAABJRU5ErkJggg==`,'santa-claus-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACVElEQVR42q1UPW/TUBT10I0JNhALLA5qHAn+AEEgwQRrJ6QiVYRISEyIhYGQEVCYABUIcVv1i4GUAgMixCGltSFKJSoBogQQHdJ81PFHoANwuffJKQnxK07NlY5yc33uOfe952dBcIncvtCBbCA4rojSXFaU3uFvSQlIihIIpnIB6RLWBrNi/yFFDO15Hg73tfoajcZe0zQfIT4YhnGyS/iFJG3H5hEU/IUAj/iB+EIDrDx+8h7FwYFRLpe3dRggMd2DcBdKqRHgGuTE0Dk/4ohvi6fPnOVuERIq/gyCCYEXdFg+p4ecGIxwDb6mZ26X7sngB58nJsddxS3L6m87GF8grS6Der2+u1arfa9Wq+AHpEFarqvQdf0yXhIwll+C8fZZb8Ae6iUN7hng0iK0RHvpIdiFMYbV/F34+PTmxv8WqLY6l/xTwx5neyKeDcaunYejhw/C4MBxODVwAtYWUlCbT7GcaseOhGEicWErBrOsSZ2+Aroqs3wxnQDz9SgzeXX/KqvRszcz1x2DWe8G1ieta0sI5vwdBrdn1OPZwFyrgF2c6hAw8reg8uAiA+UdBsilHu8GBEMHa2UJrOU8g74wumFAeatOHOK23QG+ARKGeJfHwAnr2jSD4UzLwRDXoNls7kTC+t9NqqpCLBaDYrEIhUIB4vE4aJrmJr5OGsJmgaRht8lkWYZoNMpAOWf6YeFfgd/vHUjMbOEblKFewUsAQB+Sb3gVJy71CL0GvhFRFLA3EbeJI/gJPLRdKJRE/GwTpjxJz4T/FSi23zmbDOW99v8GCHDj7A5n4o0AAAAASUVORK5CYII=`,'santa-claus-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABkklEQVR42oWTyyuEYRTGv9xZYDJYIJI0K9eSsCArRQoL95pImYU0JQtZupSkFGU5xMIlhVKuk3uuC2XFhj/k52G+xsz0feO8m/Oc85zznve85xiGKSQzyjGPXHHDHot4aaOSjF9fljwPTBlBchm3DFHDAL1CGSK2K2BRgdc6b7TKuk1RgJyrjBUcsM4wfUaEkK4AD4mckRMw7CjvJdWGpbBPP8v46Q7AAnZJpcqGnMlJuKGTEcNWKMQXCrN5VuXHtsevh1b+0euYNaKKKh/6A05euOfTJveHGvxOSWj0OC1c2mTe1O2+cJNJp5pVNSxfmoM5NmiJTl+nnEbmpXnpwsWafteeblnMIaVW9AUGTTTGKyum3qCZKbSiJzOv7j/qfMni50naLT79qRU9BE2LuGX7qzL04QnqzeSRRNrPGJuWembC6Q6VkR50nnOhFekxcRxHuCLfX69Zdlr0JUmNdFs1rI47aiNsxXpyp90gZWsNlkg1UTwT2iFX9Nlr0lB5SKCDU9zEGP8JsVrwFyZJsfZ/A4NiXEmb6qi5AAAAAElFTkSuQmCC`,'santa-hat-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACHUlEQVR42mNgwAH+h4Yyf3E2r/zibPb8q5P5ESB78Vdns8NA/vsvLmZbvzmZmDGQC/47OLB8cTZdDjTsPx7857OzWet/BgZGki0AuZaA4UjYdAJJhn91Mksh3nAI/upsXkeU4d8dLBSAGr6SagEIf3I2syUmaCaSYzgUX/lvbMyKPVL3s3v8P8h24t9uzn9/lwv+/56h8f+zk9n/J5bG/++aGhJviYtZKabhB9m9gPg/On4Wq/r/vpnR/09OhA1+lZ30/8bmTf8vXrzy9/yNO7fOX7/bd/HiRW6oBRynsFnwc4kAES42//9g6qT/QEOx4RtXr17lAfngEzYLgMGF1/DPHtb/by9bistwCAb6hAEU9tgs+LtM8C8uwz/6Of2/sXUrfsMh+BY0grEEUZ7aVWyGvw/3+X/10GFiDAfhDyipCBJc4Djx+uJk1odu+JvkyP+XTp8j1nAQ3o8zT3x2Ng9BNvx1Wuz/C5eukmL4vws37jjiznQOphIww98mhP+/eP4SaYbfvF1EuFxyMbv9Lirg/6UzJAXLtwvX7wYRVTa9jQ1edeXk6X8kGP7s/M27psTVCf//M148f/k0CYYfOXPtgSTRxTYogog1/NzNO5PPnDnDSlK9AIykQqIsuH67gaxq89zN27GELbjdT3a9fO7aPXlQisBj+FJQPDFQAi5cv5ODt6SkBrhw/bYbsFQ8CDT0I8hgIO6Gl/VEAACkoDsAq7rwswAAAABJRU5ErkJggg==`,'shopping-bag-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADAklEQVR42rWUS0wTURSGWbhy5caVcQ80lGFBlJIWQkIkBBMUlLa0paEtlCgqKBJBTVt8sJCIhCACkSqUlwhKC7aihQJijVNApRBEjfERQdTEBwlk5t7j7QyJsABpgUlO5s6/ON/9zzlzgoLWeEx01h6TR+ck8dPo0UznDxwcU1mjZ5VW0UeVVVSl7ozdERToYxrVRZo8Wsbo0boMtFp/ajD1t5HOxEVuuUtlizpHAJ8JiI7ti90WGMCjcxDAsO+stEafIcnmDc/VJ4iGLozpdylte0OIBoquKFmAAO03I63J4AGidqVNVG+gs7YTfb7Eo0ta0odJXAkUsFDi0SQsJbKrukSlnD6inTGN6KScbhPdU9iiq9ed9LtEsntGLK6di4trncxJxjOHk179Skx0eVX7fryVJXzwnaf0Bxa/SPdPLOlzNXmRfeNCoXZIILg8SVHq6YiInasC5iQS95/4eFhMSQFGKv1/pKXBBEXBeHg4PAoN5c5eirqxKuBrTMwoB0hNDRhAwuw3gC08BoxsiwCs8TTgvgZgi/OByczYJMChfwBUUwrwyQnYeRsYlYLXZRsALJaRm5YbgDUU8A7OnwQ8YCEO8ngH6XLA1hr+mwD9BjANBsBTnYBaKgDdqQTUdI130N8I+GE9Vyp43wuo8zowCrn/APbuRUC2KkBtlQDvHMCaCgEPWoDJ1gC8sXOlQuYywN21xOEGmozuVwNqrgDca+ZA2N0G6BZJ3N8ATI52RQ/I7IM7LMx/ALbVAnZZAF4/APy0FVBHFe8mK3MFwBe0UOhHiR6TxD11AFM9fJOHW4DRa3gQAXIg+83ASsR2XALsbefKgSzlnBNfU/FQMz89Bbl8L7rrgFEGMEULZ/XAlBYDW5THj2n+EcBPmrk3I5MBI5dxA8AezyGA9I3/yajxKu/AV/sM5RasiqPZ/Krw3ZjcfmuWXW72mtvUJRBAd3AwjPKTZN7Udf2MzL+TAF4SF/aQEHhBUU2rAmbFYrMPsJCcvG6AgyT1LvsXCMyxPOdfNpvdAvdbAuwAAAAASUVORK5CYII=`,'shopping-bag-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABn0lEQVR42o2TS0hbQRSG44MWFz5Aob5AxGLpQnfqwoKKRETRFgoVLHTRVRdNxYUgKERDEwQRFTeKoARUMA9fjSmVogZrFyoYCahFxJ1diZuCdCFff1pRL829OsP9Z4b5zj1nzpyx2QyNNpYIEmKLBfUGm1WjEjuTfKefCSJ4GOelOfyYMVaoFbrJIMs0ScPmeCs9fKRF6iEgowzpGJlm+FuBnbyRdgkc4ZF0iPx46Dv8fGNHR9yQbnPIHosc8UMaxofDiM/H9fcEtzSob864EbwDD5jgJNw4vhMni2Hl3XMPnHLSpM85Jk9jBakWuBK3QLOSOcMuXqo0juIwx1/wk69EeUaM13zhQEmtMccL5HyKfd3mrsxOZJJD2V/cGz/2ZOZVAqv8VhF8oPf6qIXx/v6ebkV7QYnmTs4U96jOYhrMK05VK36m+aUCdqoQ1qgzx+20U0o61XxSXhJxyU8jLutrShF8TsfVKolca/whRczy9GpVjFsmIYua0Tz7ds3Qxzr1FrihIqPCH+ghRowbA8qJ77/+mUslwacnE/vH/QFB2ZDM6c4GwQAAAABJRU5ErkJggg==`,'shopping-bag2-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC80lEQVR42q2VbUhTURjHrwol9KUP0bdetAik+hCSZGFloihqGaholpTp7pYLli/zJSVKtonOt9IUpzPNLA01i0yzFyxcLTKxdJqmWx+0IoheULer89+5t9SpW2yzC3/uuc9zzv93nudwuBRlzSMTuDtKeTcdpLwxTjJ+KyWlPan/8sjoMw5SmiEC0RsHCd1J3hNERkrCS1yZeTZv51/zPkoSF2AS30hiaqIZSsrfZ7e/o5R/g905qcJ/WTIr1oXkDETNdgPI4vdsz6mGMCcLeVIFT2eT6XjX+U3jqsxjk9qqPU5kh+sLhJ3s2JzYnKOMZua+oa1a+0/zsefiFE1zJEbaeNB/rIJztgCHa1K5sTmxOXaOSWyCyNciYLRDoOtvDF8JAFO6a3UWASNt9CdTQGB1KvIeyiwC2Bw7Z0n8jtWASZ0ZY51y0beZOdYDloq5mwZjzF4wjWKLVdkEYO6lw/CueH6x8YQH4L4OM+nB8zFD72Xo+0tsAww8oPFNu3x303nHMRvshumSmAVATxEMfTYCXMqScfpZhfkWDJQui2mGlCjtrsSUtYBd5QnIfaVY6D1plX6kAsytc2DaL4BpSIReWwmmJY3Lp6oqEPRYwYGsArD63p+/0HuR77xwYAOMtBc3npZHcXm2neoBpfUtYjWuSodKo8SXUdLnJ1mY9d2CmZAd0Ptvg/HQZsySN3fAxPTHQJH1Z9BT7I/e8kBomiLwc/DKnwouRQDRfmgqSoNnuwLdUhGQfArMi0Iu/2vIhkPuqw9F3+0wrgrX0iTEdFbgZdJRIPLgcsBTuX33YE6rc4XYfb8UNcJAwHsrWvLFiwBuZSnYXp8Dnw4FPgwrbQesyonHmgIRFLQfd8Fq+UFwrZWSiqKAkwHYKxfCWX4WLtcleDtYaTugsC4OXgoRqrLCMRntgfqMUPhcTYRaHAImdj8kxQJ4V6choTkDn9WZnL6+vqi2CNA+iteYAuwR62H5h9OVcmS4NWbCXnN2Leth6vkbQIYpPRfeieQAAAAASUVORK5CYII=`,'shopping-bag2-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABnUlEQVR42o2TzytEURTHZ9gwk9WQlV87FmaaeZRmI1liYWExM5JSMw0mRYqImixFIs2QDWXpR9lQJNNEeVNKLKxkY+Vv+DjvejMaM++Ne7r3nnvf+Z57v/d8n8NR0hjkCp0cN4w4Kjc2OMbLMBF8HLCH0z58nLQE51hhlWdG2SRuD8hJ3nvqlF8rFwvwZHMGzZwxT6iwDjHHCa3lg3vks599dukmTFQsTBcpYREQr+dveFxyR9CEQUrGPMBYp2WMcE6sGJDBJaMJKOyaAPFcZIoBuho7uBRrL+y2ME2C5t+IPwCZE0xZPIhut3TQzzV9/wAQJKjmO2BbeV6DXVkA9WJmkVjkjYTy/LitAId8/GRTOw3mXMWkPLqzHGCZHSMbEzSSJMYCTQzJqQ9iHhvSHImwl3iXqt8yI+s2Qxw2pJkVwi988Slzr+QeKMuBBsZw4xP/USr8Kl0TeaeoxmP5rIYUTD66VH1dAQ1x+CsDLpSONBG3xhpRK4Chpd/rnKiusUXETkvpEktSUwo4o9P21/VxWrzRQVaIWls2L/pv4+2Mg2hKkxMAAAAASUVORK5CYII=`,'sleigh-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACoElEQVR42mNgGCxgf5aXxOG80MAjJTELjpXHlJxJS+OiquEHMv3+H69I+H+yLh2Mj5XFTaaqD4AWfDxSHIWwoDzCirpBlOk351BeCNjwE9Upv6keB3vTApSBvvhyDBhMx8pi+6luwfooB4MNUQ4PNkY7ftwY5ZRDVcP3ZfgGH8gKfL4nK+D/vryw/8cqEv8BI/zC1axQHqIMuG1uzvfMzk7zsa2t3n0HBw7UFORbcjAn6P/J2jR4BMPw8aqkt/8ZGJjwGn5VXz/xmoHBn3eOjv+/uLr+/+js/PeFjU0zSO5Imq8cMNy/H69MxDAckVxjZ+K3wMBgPtCC/zALQPi9k9MXkNzBTL/4A1n+OA0H+6Iy8TFeC4CGL0C34JOLy1+IBf7dh3KD8Vpwojr5O8kWfAbiZzY2xvsz/CYcyiNowU+SLQDhdw4O764FuN4+F+///1RNKm5LgJF/pjhS5JmtbdsHJ6fvr+ztzxNlATL+6OL8/3J6BO6ILo1tBCaOnzD1T21sIkmyAIRfurvgtOBiUvATZLXAJF+DYcFjS8v/n5ydQRGME79xdvr/2gUTf0TT98LWNhVhgb7+dJAFVMSHQZlvSqCZ8GQ/E2uGq4aGWtcNDFYB6R0X7Mx/XrQz/wRig7GRwb7Lpkanr1iaXbtsZX4dG75qbnrmspnxmQsOlv/PuVjtuKinJwZy+BQf03lTfUy/opb5WX4vgDn3AukVkp8HqELan+FfAROb6mO2GmjBH4ZVoaHM/QEGAiC8N8P35d50n8swPrF4R6pXMFDf/91pPg0g/jRfcwug4e+m+pisZ5jqa7oWyPlPA/x1mreZLcM0b1OXqd5mM0B4hp/Zkhl+5othfGLxNF+zOTP9LZYCXT4PLOZrUjjN20aQLq0RAOuCwIEc+Y+JAAAAAElFTkSuQmCC`,'sleigh-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABhElEQVR42qWUvy9DURTHX7UUaUKrYtEB3ZqSiKGxSAQLISSEpCEqJAwGA5sQjCWRSInBJJJGiL6S+DmInzHWaMXkb/g4fa167WuTF953OPeeez/3nXvOeU9R/v9go5cFlgjiNAdMsk4LfgEOzAGDhDRbz5Y5oIojzc7TbfYWYTpxcoHFLLDJDZfcYjWzuZI9zjkmyplYn3FDOcNMiXookVkRRwQya9Vc4ckF9pmRvAwySwwrtfRlrTYSyQXUzGiFZuYNEZwWBuZo/51lvFHKCgFBCc4I7OPASxd2I1DKCZ9sM41NB0QY51DerlKUcrRlnVchmQkR1nnG+MItdgNvyrGapxaqVLojrRFeNd8a/pyQdIBP+mghrRlqNN8uHuwSllSz2ET9A1IlL4/EFanwtfRNggeexOZTgjvucdHPRDoeLMIPpL6CvDfyJL8MRiXxMUWSGBW9yxkv2sioD+K8SWovqUsCz7il93/kkH5y5pVL7qHSqjDEjk7LNGXN9Vqk4Q//lG9/CVipays5sQAAAABJRU5ErkJggg==`,'snow-globe-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEbklEQVR42q2UfUybRRzHOzdd8CULwxglYMyciybqRJxuOhnRuGR/bCyLYzpAEzM2ooyBMCbDl47XwGQkkjLe+pawOYq8wwJMa4GCY0A3Gl4y3tKWtgiFIaXtU8Dx9e5KC6STmMmTfHMvz93ne/e73x2Pt8YHyDbateKDnE6cRMpaIiPRGFEdp5Mkz+lEQQB/E+9hvvkR4U5OK+kgMDDprzlKnRT2PxtW9IlU8xqp338GY/CnzQScZtdKFlxwKmP1cl0rQf+AiPRVkbqUthc4rTidzl0bzuc/QgAFjtXJCKACq0xGr7CyskOAfQ35GB4UsV1w9zphN5TRfwVrGuhb4hNXAWk4xhsJpMTRHquDVSPGMzmx2HU9D5HKIvK/AdycGZx9mvyvgV0jPfBAuFWV4a1TxFjt4zeWVvszOKsBZssUAcw4jEh/tiIbT2RFMYMj8iKo7krBcRMOE4uWjjFAe8XTzUCniG4ytiW44DaLHne6O1EnPAGlvAST94zMxDgoxJbsaPjXCBCqKIKZ7MhuKAdnMzLR+fQ83AwGaj63mVSpLniXqh21+SFQFB1C2aUDaL5xlZiMIbT6EjaknULsH1XY01CI9Hah6+CdoZ3TiltXwUfbYjz6yo9h4nbmMrwgDEpxEHrLgtEt+xi/ZDlMjCY9dhQmwkfEZwZU9T3ksEevOkwcKcyhM/9Rl8FkF/8IBZnuljL4iDIF+rbv8VdvtkuT3ZkYbDwNqbwKsb8VY1PGl9hVdxkhJEwTIzQBalftZH5U+vbyDlrizlEDza9RsOpkMKlSMN2TBZ00AjrxKSZT0w+YUmey8FBtTI9AcHUhdtcXQNYtXJF5xUulZL/LwND09bvUgIbJMngZJJtYaGbf9MLsTk/0bPeA+rNXWJ/TgMoj8yt4CuLx/nUBxoaXVk9SmRrYDCLfFW8Ob0N/5fHFjqqz0LcmYKIziWlxz7OA/9OYem0LeqMDWF94dTpCr32Lg3mRCCv5jrUj6zLQ1Ve08lKa3bJouD58mq6wvzKEhYcOXHzPG3a/reh4YTPUUYEugP4mH62SIBi7fnTEnl4wkqrO+JM0bXcz0MrPFFADqt+Fh9Fbfhz3l3Yw7+eFrpi3mDln0ZBkKGHjJocqHBfMKTu5lOYBcBPy824GMpngyZyci4sCQRZqco+iMf8QZsP8YP30dZiDX4Wa/wH6qsIYSDt0C7ebRZgc72Vtw5gGFts0q9ttxlkAD37Cy0vzShPOx8Op1LQLKK+Qob6hlumOupNBlK0KNLfIXSu3cTNL9RnMTasP//tr+sned9T8KJsyKe5vp9qTzy6Y0+I4a3qcbSH5zOz95CgzrdtTYyyLSadnVinxhAlHA/euYRDQjcAXgX3bHk507rGAbjfw9mK+z7bi1A+H9u+otO5+Tvd/RBmURZkM7i1K8fWvFcw735X1EmEu+IiTX+I9L77wkVfuN3jsYuS6amvuOfiK+eTA006+vPL6r6d4qeFv8Hj8k4+Txs31N4i4xcv44ql/ANJwI00OA9vTAAAAAElFTkSuQmCC`,'snow-globe-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACNElEQVR42o2TS0hUURzGr1rWOG3EskVBVIsCy8eMvcBFi1ZZ4bIJbTCTsDCKpLAiI0hKpE2EXpKiphkieik9FtWiSBMatcDRVVEREa3atP713XPujDOZNefPOfeec77v/z6OkzMI0sg9RnmrOckdIgScuQaF7GeCE6zyqVWspVsnUQr+Bi/hLj1WHx2GsIF2fRdxlQQL/oTP5zl7WEpT1tl5PtJgLLXwmMJcwiWOmO9qWTkoegcVvJaCd5pVOu/iXDa8ghc0U0aYceo5wxDFvOQiAQbp1X2UckZsbJZwizqtHjzEfQ7TJspeZSjIB1p9zHbcNHwhYxn4iCwklKk26S6WY2GG2coWg5ugyBI20c96bUOinBJko6pwXJSHXqCK7rLWaoV+m0pLaJSmK6rBOAO4vgxzkidU6zZFzCS5RCcNltAibeuI8T0Dd3klSo9CrWcbgz6hk4gl7KbTfMdoUvHC1DKlCitYiijTmlA1PJfOsiOd1Dh1bJZL0/QJFOIXn2mVlSl+kJT0GtwjVqZ7aJJ5xkK3CIs1PynRLl9k6xvPeKD/KGtIzdThAqep5L1H0K7AEIa01nKNUpbL+lHZ75ohLOOnAF/lknXBcynCPpawU7fHNANKdXl2cxzghsKdW2I05zbfgI7cf0g80xg+Ien8Z9j2sC/hpvE6mYdcVzap4eksj2tsm6nSdr/CVx7X29BDTM3yuI9SA9jl7w/5BJewo1z3O3kOpSbkPfLRvPz35A3B3znRTUNmNWt+AAAAAElFTkSuQmCC`,'tree-16.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuUlEQVR42mNgwAGmXo6QnXIm7N78a4mHZt5N42cgBTwJiAy7nBz+a+32uP9AA/7Pv560veF/AxPRBlyPDP32yj/2/9W6RIgBQDzvamIPUZqnnA6ZsWJ2wP8r6RH/N+xCGADBCbEEDZhwPPB592Gf/7Mvx6JpBuOtBA1YdTWUbcKJwJdAg/5PPBkExiD25NMhdxv2N7AQNGDy6dA1IBdMPBEEt3nJ2YT/d31D/j+Ni3/8PzSUGZ/mapBmEJ5+PhJuwPpt8f8fuof+fxuW+H/D7oQonAb0HvX7DTNg3tV4FP/vmRv7f/PGBBD7BU4DJp0KmXItIuTf1dzo/3PPx/6feyUejGdfiv0/62L0/zmXY+8BozMGpwErV0aUPHAL+f8+GGjr5uD/QBeBcf/xgP8TgGECtODv7KuxTtj9fzLCBKj4z47WwP97Jkdhi0Joqkx8Of96ggJm/J8IfAHyez8wynBqRuBdGAZMPBl8Ahx9J4MJaf634HpiN1Zv9B0LFZp4KsR55oU4m4lT3Vq662x+A/H/CRNd+uZdSzSadzlRdv79BA6i8kSDl2pGW4D2x4nRJn+6wwxW4lIHACrOYQgg7PACAAAAAElFTkSuQmCC`},'svg':{'bug.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z"/></svg>
`,'comment-discussion.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"/></svg>
`,'git-branch.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 10 18"><path d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'git-commit.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 14 18"><path d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"/></svg>
`,'git-compare.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 14 18"><path d="M5 12H4c-.27-.02-.48-.11-.69-.31-.21-.2-.3-.42-.31-.69V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V11c.03.78.34 1.47.94 2.06.6.59 1.28.91 2.06.94h1v2l3-3-3-3v2zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm11 9.48V5c-.03-.78-.34-1.47-.94-2.06-.6-.59-1.28-.91-2.06-.94H9V0L6 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 12 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'git-merge.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 12 18"><path d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'git-pull-request.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 12 18"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'info.svg':`
<svg height="24" viewBox="-5 -5 58 58" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m23.945 15.774c1.26 0 2.053-.864 2.02-1.944 0-1.115-.756-1.979-1.943-1.979-1.151 0-1.979.863-1.979 1.979 0 1.08.791 1.944 1.906 1.944"/><path d="m25.602 34.941v-14.796c0-1.303-1.053-1.413-1.351-1.418h-.566c0 0-1.251.012-1.251 1.152v15.303c.023.346.175.967 1 .967h1.181c.351-.028.986-.211.986-1.208"/><path d="m24 0c-13.254 0-24 10.744-24 24 0 13.254 10.745 24 24 24 13.256 0 24-10.746 24-24 0-13.256-10.744-24-24-24m0 44c-11.04 0-20-8.955-20-20 0-11.05 8.955-20 20-20 11.05 0 20 8.954 20 20 0 11.05-8.953 20-20 20"/></svg>
`,'link.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 16 18"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>
`,'megaphone.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M10 1c-.17 0-.36.05-.52.14C8.04 2.02 4.5 4.58 3 5c-1.38 0-3 .67-3 2.5S1.63 10 3 10c.3.08.64.23 1 .41V15h2v-3.45c1.34.86 2.69 1.83 3.48 2.31.16.09.34.14.52.14.52 0 1-.42 1-1V2c0-.58-.48-1-1-1zm0 12c-.38-.23-.89-.58-1.5-1-.16-.11-.33-.22-.5-.34V3.31c.16-.11.31-.2.47-.31.61-.41 1.16-.77 1.53-1v11zm2-6h4v1h-4V7zm0 2l4 2v1l-4-2V9zm4-6v1l-4 2V5l4-2z"/></svg>
`,'settings.svg':`
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><g fill="none" stroke="#000" stroke-linejoin="round" stroke-linecap="round" stroke-width="12" stroke-miterlimit="10"><path d="m439.7 197.4c1.8 5.6 2.7 11.8 2.9 18.6.4 21.8-14.7 46.4-43.9 53.2"/><path d="m398.7 161.2c11.2 3.3 20.5 8.2 27.6 14.8"/><path d="m377 269.1c-14.5-3.4-26.1-10.9-34.5-23.1-6.3-9.2-9.4-19.5-9.4-30.7 0-13 4.1-24.5 12.3-34.6 8.2-10 18.8-16.3 31.6-19.2"/><path d="m134.9 161.2c3.9 1.4 7.7 2.5 11.2 4.1 21.7 9.5 34.3 31 32.5 55.3-1.7 22.1-18.5 41.9-40.7 47.6"/><path d="m113.3 269.5c-27.9-8.4-43.8-26.4-43.8-56.1 0-22.4 15.8-45.5 43.8-52.1"/><path d="m217.1 267.4c6.6-6.7 15-11.8 24.5-14.3 1.1-.3 2.1-.6 3.6-1"/><path d="m241.7 358.7c-23.8-6.3-40.5-28.4-40.3-53 0-3.6.4-7.1 1.1-10.6"/><path d="m266.9 252.1c11.8 2.7 21.6 8.2 29.6 16.9 27.5 30.1 13.2 79.3-26.2 89.7"/></g><path d="m124.1 148.6c-2.8 0-5-2.2-5-5v-73c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v73c0 2.7-2.3 5-5 5"/><path d="m124.1 446.6c-2.8 0-5-2.2-5-5v-57.2c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v57.2c0 2.7-2.3 5-5 5"/><path d="m124.1 410.9c-2.8 0-5-2.2-5-5v-120.6c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v120.6c0 2.8-2.3 5-5 5"/><path d="m387.9 148.6c-2.8 0-5-2.2-5-5v-73c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v73c0 2.7-2.3 5-5 5"/><path d="m387.9 446.6c-2.8 0-5-2.2-5-5v-57.2c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v57.2c0 2.7-2.3 5-5 5"/><path d="m387.9 392.2c-2.8 0-5-2.2-5-5v-101.9c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v101.9c0 2.7-2.3 5-5 5"/><path d="m256 446.6c-2.8 0-5-2.2-5-5v-73c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v73c0 2.7-2.2 5-5 5"/><path d="m256 241.8c-2.8 0-5-2.2-5-5v-98.5c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v98.5c0 2.8-2.2 5-5 5"/><path d="m256 145c-2.8 0-5-2.2-5-5v-69.6c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v69.6c0 2.7-2.2 5-5 5"/></svg>
`,'thumbsup.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M14 14c-.05.69-1.27 1-2 1H5.67L4 14V8c1.36 0 2.11-.75 3.13-1.88 1.23-1.36 1.14-2.56.88-4.13-.08-.5.5-1 1-1 .83 0 2 2.73 2 4l-.02 1.03c0 .69.33.97 1.02.97h2c.63 0 .98.36 1 1l-1 6L14 14zm0-8h-2.02l.02-.98C12 3.72 10.83 0 9 0c-.58 0-1.17.3-1.56.77-.36.41-.5.91-.42 1.41.25 1.48.28 2.28-.63 3.28-1 1.09-1.48 1.55-2.39 1.55H2C.94 7 0 7.94 0 9v4c0 1.06.94 2 2 2h1.72l1.44.86c.16.09.33.14.52.14h6.33c1.13 0 2.84-.5 3-1.88l.98-5.95c.02-.08.02-.14.02-.2-.03-1.17-.84-1.97-2-1.97H14z"/></svg>
`},'xhtml':{'ErrandToolbarBtns-CopyInfo.xhtml':`
<i class="CopyInfo" onclick="UICustomizerEvent('ErrandToolbarBtns','copyToClipboard',this,'CopyInfo')" title="Скопировать описание">{{icon}}</i>
`,'ErrandToolbarBtns-TaskURL.xhtml':`
<i class="TaskURL" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'TaskURL')" title="Скопировать ссылку на поручение">{{icon}}</i>
`,'MRToolbarBtns-TaskURL.xhtml':`
<i class="TaskURL" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'TaskURL')" title="Скопировать ссылку на MR">{{icon}}</i>
`,'SettingsButton-Header.xhtml':`
<div class="icon" title="Персонализация" onclick="UICustomizerEvent('SettingsDialog','open')">
{{icon}}
</div>
`,'SettingsButton.xhtml':`
<div data-vdomignore="true" class="row" onclick="UICustomizerEvent('SettingsDialog','open')">
<div class="icon">{{icon}}</div>
<div class="title">Персонализация</div>
</div>
`,'SettingsDialog-block.xhtml':`
<span class="title">{{title}}</span>
`,'SettingsDialog-footer.xhtml':`
<span>
Скрыть/показать настройки: Ctrl+Shift+U или Ctrl+Alt+U
</span>
<span class="link right" onclick="UICustomizerEvent('VersionInformer','open')">
v.{{version}}
</span>
`,'SettingsDialog-group.xhtml':`
<div class='header'>
<span class="title">{{title}}</span>
</div>
`,'SettingsDialog-option-boolean.xhtml':`
<label>
<input type="checkbox" {{value}} optname="{{optname}}" onchange="UICustomizerEvent('SettingsDialog','onchangeOptionBoolean',this)">
<span>{{title}}</span>
</label>
`,'SettingsDialog-section.xhtml':`
<div class='header' onclick="UICustomizerEvent('SettingsDialog','toggleSection',this)">
<span class="title">{{title}}</span>
</div>
`,'SettingsDialog.xhtml':`
<div class="SBIS-UI-Customizer-close-btn" onclick="UICustomizerEvent('SettingsDialog','close')">X</div>
<div class="header">
<span class="title">Персонализация</span>
<a href="https://online.sbis.ru/groups/2d110a8e-7edb-469a-a3cb-5eb6d8095c10" target="_blank">Наша группа</a>
</div>
`,'SocNet-FeedbackButtons.xhtml':`
<!--i class="LikeIt" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'LikeIt')" title="Мне нравится!">{{LikeIt}}</i-->
<!--i class="separator"></i-->
<i class="SendQuestion" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'SendQuestion')" title="Задать вопрос в чате">{{SendQuestion}}</i>
<!--i class="SendFeedback" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'SendFeedback')" title="Написать отзыв в группе">{{SendFeedback}}</i-->
<!--i class="separator"></i-->
<i class="ReportError" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'ReportError')" title="Сообщить об ошибке">{{ReportError}}</i>
`,'SocNet-InputDialog.xhtml':`
<div class="SBIS-UI-Customizer-close-btn" onclick="this.parentElement.remove()">X</div>
<div class="send">Отправить</div>
<div class="header">
<span class="title">{{title}}</span>
</div>
<textarea autofocus rows="5" placeholder="{{hint}}"></textarea>
`,'TaskToolbarBtns-BranchName.xhtml':`
<i class="BranchName" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'BranchName')" title="Скопировать имя ветки">{{icon}}</i>
`,'TaskToolbarBtns-PullRequest.xhtml':`
<i class="PullRequest" onclick="UICustomizerEvent('TaskToolbarBtns','createPullRequest',this)" title="Создать MR (Beta)">{{icon}}</i>
`,'TaskToolbarBtns-TaskURL.xhtml':`
<i class="TaskURL" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'TaskURL')" title="Скопировать ссылку на задачу">{{icon}}</i>
`,'TaskToolbarBtns-СommitMsg.xhtml':`
<i class="СommitMsg" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'СommitMsg')" title="Скопировать описание для коммита">{{icon}}</i>
`,'VersionInformer.xhtml':`
<div class="VersionInformer">
<div class="background"></div>
<div class="area">
<div class="dialog" onclick="event.stopPropagation();">
<div class="header">
<span class="title">Обновление SBIS UI-Customizer {{title}}</span>
<div class="info">от {{date}}</div>
</div>
<div class="content">{{content}}</div>
<div class="footer">
<div class="links">
<a target="_blank" href="https://github.com/sbis-team/ui-customizer/blob/release/CHANGELOG.md">История изменений</a>
<a target="_blank" href="https://github.com/sbis-team/ui-customizer/issues">Список задач</a>
</div>
<div class="links right">
<a href="https://online.sbis.ru/groups/2d110a8e-7edb-469a-a3cb-5eb6d8095c10" target="_blank" onclick="UICustomizerEvent( 'VersionInformer', 'close')">Наша группа</a>
<span class="link" onclick="UICustomizerEvent( 'VersionInformer', 'settings')">Настройки</span>
</div>
<div class="button" onclick="UICustomizerEvent( 'VersionInformer', 'close')">ОК</div>
</div>
</div>
</div>
</div>
`}} );
