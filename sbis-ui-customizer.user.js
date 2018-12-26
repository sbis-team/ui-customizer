// ==UserScript==
// @name          SBIS UI-Customizer v1.4.1
// @namespace     SBIS
// @version       1.4.1
// @date          26.12.2018 23:25:54
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
"version": "1.4.1",
"date": "26.12.2018 23:25:54",
"notes": {
"added": [],
"changed": [
"Добавлен раздел 'Темы оформления / Новогодний Онлайн'. Смотрите опции (Ctrl+Shift+U)",
"Добавлены новогодние иконки для аккордеона"
],
"fixed": [],
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
'Modify': {
'title': 'Изменить внешний вид',
'view': 'group',
'module': 'HomePageModify',
'options': {
/*
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
},*/
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
}
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
'Show': {
'title': 'Показать',
'view': 'block',
'options': {
'Schedule': {
'title': 'Время по документу',
'view': 'option',
'type': 'boolean',
'value': false
},
'Monitoring': {
'title': 'Поставить на контроль',
'view': 'option',
'type': 'boolean',
'value': false
},
'Agreement': {
'title': 'Отправить на согласование',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Hide': {
'title': 'Скрыть',
'view': 'block',
'options': {
'Print': {
'title': 'Распечатать',
'view': 'option',
'type': 'boolean',
'value': false
},
'Save': {
'title': 'Скачать',
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
'title': 'Добавить',
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
'Show': {
'title': 'Показать',
'view': 'block',
'options': {
'Schedule': {
'title': 'Время по документу',
'view': 'option',
'type': 'boolean',
'value': false
},
'Monitoring': {
'title': 'Поставить на контроль',
'view': 'option',
'type': 'boolean',
'value': false
},
'Agreement': {
'title': 'Отправить на согласование',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Hide': {
'title': 'Скрыть',
'view': 'block',
'options': {
'Print': {
'title': 'Распечатать',
'view': 'option',
'type': 'boolean',
'value': false
},
'Save': {
'title': 'Скачать',
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
'title': 'Добавить',
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
'Show': {
'title': 'Показать',
'view': 'block',
'options': {
'Schedule': {
'title': 'Время по документу',
'view': 'option',
'type': 'boolean',
'value': false
},
'Monitoring': {
'title': 'Поставить на контроль',
'view': 'option',
'type': 'boolean',
'value': false
},
'Agreement': {
'title': 'Отправить на согласование',
'view': 'option',
'type': 'boolean',
'value': false
}
}
},
'Hide': {
'title': 'Скрыть',
'view': 'block',
'options': {
'Print': {
'title': 'Распечатать',
'view': 'option',
'type': 'boolean',
'value': false
},
'Save': {
'title': 'Скачать',
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
'title': 'Добавить',
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
'title': 'Новогодний Аккордеон',
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
}/*,
'ChristmasBall': {
'title': 'Логотип СБИС',
'view': 'option',
'type': 'boolean',
'value': false
},
'Snow': {
'title': 'Снег',
'view': 'option',
'type': 'boolean',
'value': false
}*/
}
}
}
}
}
}
};
})()
, {'css':{'ChristmasStyle-Accordion-MenuIcons.css':`
.acc-menu-icon.contacts:before,
.acc-menu-icon.groups:before,
.acc-menu-icon.ereport:before,
.acc-menu-icon.icon-cashbox:before,
.acc-menu-icon.auction:before,
.acc-menu-icon.sales:before,
.acc-menu-icon.purchases:before,
.acc-menu-icon.nomenclature:before,
.acc-menu-icon.egais:before,
.acc-menu-icon.icon-Mercury:before,
.acc-menu-icon.icon-Stock:before,
.acc-menu-icon.icon-Production:before,
.acc-menu-icon.icon-Money:before,
.acc-menu-icon.instructStorage:before,
.acc-menu-icon.icon-work:before,
.acc-menu-icon.business:before,
.acc-menu-icon.accounting:before,
.acc-menu-icon.icon-staff:before,
.acc-menu-icon.documents:before,
.acc-menu-icon.icon-contragents:before,
.acc-menu-icon.icon-calendar:before,
.acc-menu-icon.icon-calendar:after,
.acc-menu-icon.icon-Bookkeeping:before,
.acc-menu-icon.presto:before,
.acc-menu-icon.retail:before,
.acc-menu-icon.booking:before,
.acc-menu-icon.ca_navication:before {
content: '' !important;
}
.acc-menu-icon.contacts,
.acc-menu-icon.groups,
.acc-menu-icon.ereport,
.acc-menu-icon.icon-cashbox,
.acc-menu-icon.auction,
.acc-menu-icon.sales,
.acc-menu-icon.purchases,
.acc-menu-icon.nomenclature,
.acc-menu-icon.egais,
.acc-menu-icon.icon-Mercury,
.acc-menu-icon.icon-Stock,
.acc-menu-icon.icon-Production,
.acc-menu-icon.icon-Money,
.acc-menu-icon.instructStorage,
.acc-menu-icon.icon-work,
.acc-menu-icon.business,
.acc-menu-icon.accounting,
.acc-menu-icon.icon-staff,
.acc-menu-icon.documents,
.acc-menu-icon.icon-contragents,
.acc-menu-icon.icon-calendar,
.acc-menu-icon.icon-Bookkeeping,
.acc-menu-icon.presto,
.acc-menu-icon.retail,
.acc-menu-icon.booking,
.acc-menu-icon.ca_navication {
background-repeat: no-repeat !important;
background-position: 12px 10px !important;
}
.acc-menu-icon.contacts {
background-image: url("{{christmas-card}}") !important;
}
.acc-menu-icon.icon-work {
background-image: url("{{christmas-sock}}") !important;
}
.acc-menu-icon.icon-staff {
background-image: url("{{gingerbread-man}}") !important;
}
.acc-menu-icon.documents {
background-image: url("{{christmas-card2}}") !important;
}
.acc-menu-icon.icon-calendar {
background-image: url("{{christmas-bell}}") !important;
}
.acc-menu-icon.icon-contragents {
background-image: url("{{snow-globe}}") !important;
}
.acc-menu-icon.accounting {
background-image: url("{{christmas-ball}}") !important;
}
.acc-menu-icon.business {
background-image: url("{{cabin}}") !important;
}
.acc-menu-icon.ca_navication {
background-image: url("{{light}}") !important;
}
.acc-menu-icon.ereport {
background-image: url("{{christmas-card3}}") !important;
}
.acc-menu-icon.auction {
background-image: url("{{mitten}}") !important;
}
.acc-menu-icon.purchases {
background-image: url("{{shopping-bag}}") !important;
}
.acc-menu-icon.sales {
background-image: url("{{sale}}") !important;
}
.acc-menu-icon.egais {
background-image: url("{{mug}}") !important;
}
.acc-menu-icon.icon-Mercury {
background-image: url("{{reindeer}}") !important;
}
.acc-menu-icon.nomenclature {
background-image: url("{{gift}}") !important;
}
.acc-menu-icon.icon-Bookkeeping {
background-image: url("{{mittens}}") !important;
}
.acc-menu-icon.icon-cashbox {
background-image: url("{{sleigh}}") !important;
}
.acc-menu-icon.icon-Stock {
background-image: url("{{gift2}}") !important;
}
.acc-menu-icon.icon-Production {
background-image: url("{{elf}}") !important;
}
.acc-menu-icon.icon-Money {
background-image: url("{{candy-cane}}") !important;
}
.acc-menu-icon.groups {
background-image: url("{{cane}}") !important;
}
.acc-menu-icon.instructStorage {
background-image: url("{{card}}") !important;
}
.acc-menu-icon.presto {
background-image: url("{{santa-claus}}") !important;
}
.acc-menu-icon.retail {
background-image: url("{{shopping-bag}}") !important;
}
.acc-menu-icon.booking {
background-image: url("{{gift3}}") !important;
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
.engine-OnlineBaseInnerMinCoreView__headerCell .header-ConfigurationButton .controls-Button__text,
#header [sbisname="ConfigurationLink"] .controls-Link__field,
#header div.user-button-component .controls-Link__field,
.online-OnlinePageTemplate__header .controls-BaseButton__text {
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
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons {
display: inline-block;
border-right: 1px solid #E4E4E4;
padding-right: 8px;
}
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons i {
vertical-align: middle;
cursor: pointer;
margin-right: 4px;
height: 24px;
width: 24px;
display: inline-block;
}
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons i svg {
fill: #587AB0;
}
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons i:hover svg {
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
'christmas-card': Engine.getPNG('christmas-card-24'),
'christmas-sock': Engine.getPNG('christmas-sock-24'),
'gingerbread-man': Engine.getPNG('gingerbread-man-24'),
'christmas-card2': Engine.getPNG('christmas-card2-24'),
'christmas-card3': Engine.getPNG('christmas-card3-24'),
'christmas-bell': Engine.getPNG('christmas-bell-24'),
'cabin': Engine.getPNG('cabin-24'),
'christmas-ball': Engine.getPNG('christmas-ball-24'),
'snow-globe': Engine.getPNG('snow-globe-24'),
'light': Engine.getPNG('light-24'),
'mitten': Engine.getPNG('mitten-24'),
'shopping-bag': Engine.getPNG('shopping-bag-24'),
'sale': Engine.getPNG('sale-24'),
'mug': Engine.getPNG('mug-24'),
'reindeer': Engine.getPNG('reindeer-24'),
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
};
var imagesColor = {
'christmas-card': Engine.getPNG('christmas-card-24-color'),
'christmas-sock': Engine.getPNG('christmas-sock-24-color'),
'gingerbread-man': Engine.getPNG('gingerbread-man-24-color'),
'christmas-card2': Engine.getPNG('christmas-card2-24-color'),
'christmas-card3': Engine.getPNG('christmas-card3-24-color'),
'christmas-bell': Engine.getPNG('christmas-bell-24-color'),
'cabin': Engine.getPNG('cabin-24-color'),
'christmas-ball': Engine.getPNG('christmas-ball-24-color'),
'snow-globe': Engine.getPNG('snow-globe-24-color'),
'light': Engine.getPNG('light-24-color'),
'mitten': Engine.getPNG('mitten-24-color'),
'shopping-bag': Engine.getPNG('shopping-bag-24-color'),
'sale': Engine.getPNG('sale-24-color'),
'mug': Engine.getPNG('mug-24-color'),
'reindeer': Engine.getPNG('reindeer-24-color'),
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
window.require(['Core/core-ready'], function (ready) {
ready.addCallback(_waitRequireFN);
return ready;
}, function (error) {
console.warn('UICustomizer', error);
window.require(['Core/core-init-min'],
function (ready) {
ready.addCallback(_waitRequireFN);
return ready;
},
function (error) {
console.warn('UICustomizer', error);
console.warn('UICustomizer: Не удалось получить деферред готовности страницы');
return error;
}
);
return error;
});
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
removeByQuery: removeByQuery,
generateCSS: {
custom: generateCSS_custom,
displayNone: generateCSS_displayNone,
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
function removeByQuery(query) {
var elms = document.querySelectorAll(query);
for (let i = 0; i < elms.length; i++) {
elms[i].remove();
}
}
function generateCSS_custom(selector, rule, value) {
return \`\${selector} { \${rule}: \${value}; }\`;
}
function generateCSS_displayNone(selector) {
return \`\${selector} { display: none !important; }\`;
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
require(['WS.Data/Source/SbisService'], function (svr) {
SbisService = svr;
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
ExcludeDocTypeName: ['Merge request', 'Ошибка в разработку', 'Задача в разработку'],
selectors: {
'Schedule': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoShowDocTime"]',
'Monitoring': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoShowMonitoringDialog"]',
'Agreement': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoSendToAgreement"]',
'Print': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoPrintDocument"]',
'Save': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoSaveDocumentOnDisk"]',
'LinkOld': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoGetLink"]',
'Delete': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoDeleteDocument"]'
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
var docName, number, face, info_text, url, msg = '';
var text = '';
var card = elm;
while (!card.wsControl && card.parentElement) {
card = card.parentElement;
}
if (!card || !card.wsControl) {
throw new Error('Не удалось распознать карточку задачи');
}
card = card.wsControl;
var record = card.getLinkedContext().getValue('record');
switch (action) {
case 'CopyInfo':
msg = 'Описание скопировано в буфер обмена';
docName = record.get('РП.Документ').get('Регламент').get('Название');
number =
(record.has('Номер') ? record.get('Номер') : '') ||
'';
face =
(record.has('ЛицоСоздал.Название') ? record.get('ЛицоСоздал.Название') : '') ||
(record.has('Лицо1.Название') ? record.get('Лицо1.Название') : '') ||
(record.has('Автор.Название') ? record.get('Автор.Название') : '') ||
'';
if (docName === 'Обращение') {
let clt = record.get('Лицо.Название') || '';
face = clt ? (face + ' (' + clt + ')') : face;
}
info_text =
(record.has('РазличныеДокументы.Информация') ? record.get('РазличныеДокументы.Информация') : '') ||
(record.has('Примечание') ? record.get('Примечание') : '') ||
(record.has('Описание') ? record.get('Описание') : '') ||
(record.has('ДокументРасширение.Название') ? record.get('ДокументРасширение.Название') : '') ||
'';
url = record.get('ИдентификаторДокумента');
number = number ? (' № ' + number) : '';
face = face ? (' ' + face) : '';
info_text = Engine.cutOverflow(Engine.cutTags(info_text), 98, 1024);
if (url) {
url = location.protocol + '//' + location.host + '/opendoc.html?guid=' + url;
} else {
url = '(Нет ссылки на документ, т.к. он не запущен в ЭДО)';
}
text =
docName + number + ' от ' +
Engine.getDate(record.get('ДокументРасширение.ДатаВремяСоздания')) +
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
"use strict";
var property = {
btns: {
TaskURL: {
icon: 'link'
}
},
ApplyDocTypeName: ['Merge request'],
selectors: {
'Schedule': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoShowDocTime"]',
'Monitoring': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoShowMonitoringDialog"]',
'Agreement': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoSendToAgreement"]',
'Print': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoPrintDocument"]',
'Save': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoSaveDocumentOnDisk"]',
'LinkOld': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoGetLink"]',
'Delete': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoDeleteDocument"]'
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
'Owl': 'div[sbisname="howEasy"], .online-howEasy',
'HideMaximumButton': '.NavSchemeLink.navSidebar__navSchemeLink, .NavSchemeLink.engine-Sidebar__navSchemeLink'
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
css += Engine.generateCSS.displayNone(selectors[name]);
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
Engine.waitOnce('div.am-User__panel-lists .controls-ListView__itemsContainer', function (elm) {
var container = Engine.createComponent('SettingsButton', {
icon: Engine.getSVG('settings')
});
elm.parentElement.insertBefore(container, elm);
});
}
});
`,'SettingsDialog.js':`
UICustomizerDefine('SettingsDialog', ['Engine', 'SocNet'], function (Engine, SocNet) {
"use strict";
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
dlg.className = "SBIS-UI-Customizer-SocNet-InputDialog";
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
"Получатели": [],
"Текст": msg,
"Диалог": ChatUUID,
"Документ": null,
"Сообщение": null,
"Файлы": [],
"Опции": {
"d": [
false,
false
],
"s": [
{ "t": "Логическое", "n": "МассовоеСообщение" },
{ "t": "Логическое", "n": "СлитьСПредыдущим" }
],
"_type": "record"
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
"Object": {
"d": [
GroupUUID,
null,
1,
1,
false,
msg
],
"s": [
{ "n": "Channel", "t": "UUID" },
{ "n": "News", "t": "UUID" },
{ "n": "Visibility", "t": "Число целое" },
{ "n": "EventType", "t": "Число целое" },
{ "n": "FromGroup", "t": "Логическое" },
{ "n": "Text", "t": "Строка" }
],
"_type": "record"
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
"Получатели": [AuthorUUID],
"Текст": msg,
"Диалог": guid,
"Документ": null,
"Сообщение": null,
"Файлы": [],
"Опции": {
"d": [
false,
false,
false
],
"s": [
{ "t": "Логическое", "n": "МассовоеСообщение" },
{ "t": "Логическое", "n": "СлитьСПредыдущим" },
{ "t": "Логическое", "n": "ВсемУчастникамТемы" }
],
"_type": "record"
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
}
},
ApplyDocTypeName: ['Ошибка в разработку', 'Задача в разработку'],
selectors: {
'Schedule': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoShowDocTime"]',
'Monitoring': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoShowMonitoringDialog"]',
'Agreement': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoSendToAgreement"]',
'Print': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoPrintDocument"]',
'Save': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoSaveDocumentOnDisk"]',
'LinkOld': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoGetLink"]',
'Delete': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoDeleteDocument"]'
}
};
var BranchNameUserLogin = '';
var idReadedUserLogin = false;
return {
applySettings: applySettings,
copyToClipboard: copyToClipboard
};
function applySettings(settings, moduleName, moduleProperty) {
var group, css = '';
moduleName = moduleName ? moduleName : 'TaskToolbarBtns';
moduleProperty = moduleProperty ? moduleProperty : property;
group = settings.options.Show;
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.generateCSS.inlineBlock(moduleProperty.selectors[name]);
}
}
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
} else {
Engine.removeByQuery('.SBIS-UI-Customizer.' + moduleName + '-ExtraButtons .' + name);
}
}
if (addExtraButtons) {
let extbtn = Engine.getCSS('TaskToolbarBtns-ExtraButtons');
if (moduleName !== 'TaskToolbarBtns') {
extbtn = extbtn.replace(/TaskToolbarBtns/g, moduleName);
}
css += extbtn;
if (moduleProperty.WaitHandler) {
Engine.unsubscribeWait('.edo-Dialog__commands', moduleProperty.WaitHandler);
}
moduleProperty.WaitHandler = _appendExtraButtons(moduleName, moduleProperty);
Engine.wait('.edo-Dialog__commands', moduleProperty.WaitHandler);
} else {
if (moduleProperty.WaitHandler) {
Engine.unsubscribeWait('.edo-Dialog__commands', moduleProperty.WaitHandler);
delete moduleProperty.WaitHandler;
}
if (css) {
moduleProperty.WaitHandler = _appendButtonsClass(moduleName, moduleProperty);
Engine.wait('.edo-Dialog__commands', moduleProperty.WaitHandler);
}
Engine.removeByQuery('.SBIS-UI-Customizer.' + moduleName + '-ExtraButtons');
}
if (css) {
Engine.appendCSS(moduleName, css);
} else {
Engine.removeCSS(moduleName);
}
}
function copyToClipboard(elm, action) {
var docName, msg = '';
var text = '';
var card = elm;
while (!card.wsControl && card.parentElement) {
card = card.parentElement;
}
if (!card || !card.wsControl) {
throw new Error('Не удалось распознать карточку задачи');
}
card = card.wsControl;
var record = card.getLinkedContext().getValue('record');
switch (action) {
case 'СommitMsg':
msg = 'Описание скопировано в буфер обмена';
docName = record.get('РП.Документ').get('Регламент').get('Название');
docName = ReplaceDocTypeName[docName] || docName;
text =
docName + ' № ' +
record.get('Номер') +
' v' + _extractVersionName(record.get('РП.ВехаДокумента')) + ' от ' +
Engine.getDate(record.get('ДокументРасширение.ДатаВремяСоздания')) + ' ' +
record.get('ЛицоСоздал.Название') + '\\n' +
location.protocol + '//' +
location.host + '/opendoc.html?guid=' +
record.get('ИдентификаторДокумента') + '\\n\\n' +
Engine.cutOverflow(Engine.cutTags(record.get('РазличныеДокументы.Информация')), 98, 1024);
break;
case 'TaskURL':
msg = 'Ссылка скопирована в буфер обмена';
text =
location.protocol + '//' +
location.host + '/opendoc.html?guid=' +
record.get('ИдентификаторДокумента');
break;
case 'BranchName':
if (!idReadedUserLogin) {
return _readUserLogin(function () {
copyToClipboard(elm, action);
});
}
msg = 'Имя ветки скопировано в буфер обмена';
text =
_extractVersionName(record.get('РП.ВехаДокумента')) + '/' +
(record.get('РП.Документ').get('Регламент').get('Название') === 'Ошибка в разработку' ? 'bugfix' : 'feature') + '/' +
(BranchNameUserLogin ? BranchNameUserLogin + '/' : '') +
record.get('Номер');
break;
}
Engine.copyToClipboard(text);
Engine.openInformationPopup(msg);
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
function _extractVersionName(milestones) {
let versionName = 'dev';
let version = Infinity;
milestones.each(function (record) {
let curNames = record.get('ДокументРасширение.Название').replace(/[ ()]/g, '\\n').split('\\n');
for (let i = 0; i < curNames.length; i++) {
let curName = curNames[i].replace(/[^\\d.]/g, '').replace(/^[.]+/, '').replace(/[.]+$/, '');
if (curName) {
let n = Number(curName.replace(/\\./g, ''));
if (!isNaN(n)) {
if (n < version) {
version = n;
versionName = curName;
}
break;
}
}
}
});
return versionName;
}
function _appendExtraButtons(moduleName, moduleProperty) {
return function _appendExtraButtonsEH(elms) {
for (let i = 0; i < elms.length; i++) {
let elm = elms[i];
_isTask(elm, moduleProperty, _appendExtraButtonsH(elm, moduleName, moduleProperty));
}
};
}
function _appendExtraButtonsH(elm, moduleName, moduleProperty) {
return function () {
let btns = document.createElement('div');
btns.className = 'SBIS-UI-Customizer ' + moduleName + '-ExtraButtons';
btns.innerHTML = moduleProperty.ExtraButtonsHTML;
elm.insertBefore(btns, elm.children[0]);
elm.classList.add('SBIS-UI-Customizer');
elm.classList.add(moduleName);
};
}
function _appendButtonsClass(moduleName, moduleProperty) {
return function _appendButtonsClassEH(elms) {
for (let i = 0; i < elms.length; i++) {
let elm = elms[i];
_isTask(elm, moduleProperty, _appendButtonsClassH(elm, moduleName));
}
};
}
function _appendButtonsClassH(elm, moduleName) {
return function () {
elm.classList.add('SBIS-UI-Customizer');
elm.classList.add(moduleName);
};
}
function _isTask(elm, moduleProperty, callback) {
function checkControl() {
var ctx;
if (elm.wsControl && (ctx = elm.wsControl.getLinkedContext())) {
record = ctx.getValue('record');
if (record && record.getIdProperty && ~['@СвязьПапок', '@Документ'].indexOf(record.getIdProperty())) {
check(record);
} else {
ctx.subscribe('onFieldChange', checkEvent);
}
} else {
console.error(PARSE_ERROR);
}
}
function checkEvent(e, fieldName, val) {
/*jshint -W040 */
if (fieldName === 'record' && val.getIdProperty() === '@Документ') {
this.unsubscribe('onFieldChange', checkEvent);
check(val);
}
}
function check(record) {
let docName = record.get('РП.Документ').get('Регламент').get('Название');
if (moduleProperty.ApplyDocTypeName && ~moduleProperty.ApplyDocTypeName.indexOf(docName)) {
return callback();
}
if (moduleProperty.ExcludeDocTypeName && !~moduleProperty.ExcludeDocTypeName.indexOf(docName)) {
return callback();
}
}
var record;
if (location.pathname === '/opendoc.html' && !elm.wsControl) {
return Engine.waitRequire(function (require) {
require(['Lib/Control/Control'], function (CControl) {
CControl.ControlStorage.waitChildByName('ServiceButtons').addCallback(function () {
checkControl();
});
});
});
}
var card = elm.parentElement;
while (card && card.getAttribute('data-component') !== 'EDO2/Document/Dialog' && card.parentElement) {
card = card.parentElement;
}
if (card && card.getAttribute('data-component') === 'EDO2/Document/Dialog') {
try {
record = card.wsControl.getTopParent()._options.componentOptions.record;
if (record) {
return check(record);
}
} catch (e) {
return setTimeout(() => {
_isTask(elm, moduleProperty, callback);
}, 100);
}
}
checkControl();
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
`},'png':{'cabin-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADK0lEQVR42q2Vy08TURSHa2J8JG5du9ONf4E740b/A5caExdGJMSohIcibYV2YeQhEgwiAqFWKKg8FFArWlqgFEraQjttZ+ZOO6/bB5AAiujxTqWkLZ0qppN8mZs7ye/LPffkjEZThIeihOMhmn0UptlJTbGfEMP0hhkWdnhb1HBBkmqivABpeFFsK1q4LMvHYrH4TwJkQlFwuHgn8DiuRV0Tc5EFK5LYAFYENE0f2XeQKIrn4vF4KcbxGgVlnUgkTgct9RdDAwZQYMbbQULhUQA48NdAjPFJjos2Ii5CMYjbJm/ILUUKWU7wXjugr30QHmqAoMV4XjU0KklnWJZ1Miz7I6MrUhAJYBzLL0lDvgtMaEWIMI+TyeSJPQIWceu5wWloQtC3CK6xfnCNW4Cad4AkCAWEibk9AppFv3KDg34fON72wGhTFUw8qQbr05oUyvpdcyVM9jaD2zoMrN+bK1nZIyB1XmQYWqQDvp9pwbz54bfZF/c35rq10pK5fiGXhR79srOrlpt9URt3mowbyx9MmxIKfSYnaM57D0uv9O7ld+27ZfGY68Bj0gLZh3S3FCLQXwfLfXVvVC/aZ9Z5lEDqywD4J7pS4eGxOxBfvArroetZrHrLAL2vzSMytqgK/H36Mo9Jt+V9qdtOg91XANmuAjVeAdTYDmS9FiiBFc/NzeCAgdvFYggEXxvOqgrI5bUPN5RDJth9Caa6boGtQwuOTv0u4U/lkPTdyNoj/HI8f3BZVTDeUunNJ7B13QZr272ssNDHvAKF1gKCKruaYKylKhXg7NXCTLdOVTDdqa9XFcx23r9gbauWrW13k2nSgpHGcrA/16Xq7xuqTglWAyXrrp4H1gyG3WbDqQJdpLcrnZNJbPGPQDnNx9a7WSVa85fu7aJBY52qYMms9xYSjBBsz7TqgkEjhCzG1v8WKIw2VcBUhy5LgGz9IPimAUsiyCjMcxx3dDeUzO9DXDRqIcMuybBoi/Ajh20WoW0Osd9lnlnFAkrIQgRjiedjWERYxnyegecn46KcZB/UcBHeoTZFM+GifOFxnQfyc3qqYVhu7V8ECqIk71cy8xuaIdsJ3u4NggAAAABJRU5ErkJggg==`,'cabin-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABwklEQVR42o2Sv0tbURzFX4zB2OCQSnSSqquLoQhRxEWX0kWFOrhJaMEtS7XpUGsmS+1gFaUpBAV/YFRsIqQ/olYjbQcdnCr4z3w87/l4L48ovnuG932Hc+79fs+9hvHAIkgfRxSoN/wsujhjkVa+EfMjb+OCIl/Y4Y+//d8xQqeFDdr8GJ7xl7z2f8kCnfeJHjNGlgMhq+pQTD2/KdFcK+1llu9skbw9XhMk2RaTYZlZr7SfJRpIkyB4R6wJZnTCNv0ueUjUqSM8V5A/hM+qIg4fpewaDuxvnfY54b2aiwoJVSf8YopuAq7KFFZY4x9xxXetVO5CWYqKa2hSU+OkGCSjvzhDNuKOIiRFU/VoRRpZUUKt6n+eVzY+seCMXvBm8VZ3OSd8YFeGso159sSY/AZpr+ErwzwVhsi5w+nycmJMfoSs11A0c9A3VmOwXikBil7DFu3VBgnyfKwytLPpNaS4tLo+tQ0hxVywDKcWf0nKa9gn7G1JqYWqTgiz73sGOphUKD9dcYwJ/vOGaSHDOVdWZeJKf3mZxnnCOq9pMeUD6vCFc7e16LG3DTOqdzVgcEyj4XPxSC+WVedeH0KvHkvpBndbypOOC66vAAAAAElFTkSuQmCC`,'candy-cane-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB1UlEQVR42mNgIAC+ttca/8iIOPsrwPrzbyulf+dPPft74cKbL1evvj9569YbcwZKwPf8xB1/jCT+/9UVguOzxx7/P3XqFRxfvfpuH1mGg1yNbDAuC0D4ypV3t0ky/GtNQQs2w3FZAMI3b76fQrQFX6ZPfPXHWJJoC04ffPD/WlHjX6IMf/v2p/bbt9//v7947f/PeF+4wX9MpP//SA6+cfXS66unTyMMv9gx9/8dRZX/9/j4/t/qn+NN0II3b74ngCyA4c9LF/7/Y630/1tR8nqYmuvXP6w6u+rI/5u2rmCDYfh2VesGInzwLRjZAhB+d+fxz+/T+xVgau7OXRl8T1AQxXCwDzJKbhC04OXLL+JAQ98gWwD01TRkNff6Z4egGw72QXrxTaLi4fXr7w7v3n3bCDT8KtDw6g8fPghS1QJC4N7cVX43bVz+Y+CGvotUseDu3Xc22PICMFfvGLWAPhbcXrDK74aT9390fLN50gXq+KB/diRNk+ndnlnRNLXgVtesBJpacGfq0rhbhub/MXBV+2WqWHDz5kcv2qai22+1sFlw48a7aQzUAhcuvP2AbPjZs6//Ai3mo5oFd+9+Urt8+d3js2ff/Ll48e2nW7fe52JTBwA+eXcSe5SIqwAAAABJRU5ErkJggg==`,'candy-cane-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABaUlEQVR42pWTzStEURTAnylDQrFUJgspZTULVvJ/2EgkO5JYKAtZTSb/gKRmMeQj0zAYFkpWSmEaapAoFkST+fbxc1xvmvKeceec3r3n3HN/991z7r2G8UtoZ45b3vngjnk6jGJChUz55JJZIpwxQ0y8BSr/ml7OHgn6cYgdJCitgz6S7OO0Bzzk6DJtBSirkyxeu+kuCcRosQDNnEuk0QqMkeGaNBOytV6eeWEQp3gpbuQbtgJLHFElib6pVH34pb0Sz0s1B/iswCqbqncT5YkyWT3NCW4ztmMFJonjkr5WShpQI6+MmrEVdq1AnRxXXEr4KLtvtQBhuzrVy1/8TNNg+gkKEjb+FwGWGVB6bJODDZBkxLTW2NYBUqUDG4wrjegCKTnxb82xpQNk8heCdV1gyLQChHSAbKlARgqbz0ELSMur+KnSRf51FAeiLKq+hgc8OkCP3KEgU5zKpWwydIRuDrkXqK0w9gWOlUgEUJi7RQAAAABJRU5ErkJggg==`,'cane-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEE0lEQVR42qVVbUxbZRS+vQVky/wM8ceiP9R/LtGoPyra0q1S2dCtDIaTbrZMkJUOJ6VAmQV26QfrpjLojBKixMyEyYxZzNShzi/UH1MGCsPw0bLb0nbEoaGj5XPt8dwLt327OZPiSU7a+57nfc57znvecyiKEGCtCmDtLeC1/TZYlD23NNTQht+PU7cQmLA8ujzKvDmwc8sCeGxDqBx+27+DPXYNAqKowOnFXBkI/1Erb8J7bTrB3rdVCsDa4nivTZ8AHn1N1TT7jfG6AFj6vR4Gi5SkgyWYtEjikVoew7UFwX5JmwPzvxyK4cM/1ETGqlSOmIPg54aJIU0ODJdsg9B31RD+sXbKd1zjEzZE3RaYaHzh776yslRgGNpt3nU1MtYUI/SfKPaHvjcGwr218EdZLgzuUcLM2YNXVk4TYDKE1MyeNwLbXDQKwNBwmUnHtbNzP5sAcwyBd/Zh6NZnwdssu9JRAv3b5fxhEPMlcqwHABFrVw8EzxnikbPWBzCXzEYiFZweFyKb7tIp+nfIIdxbs2qzfoi/HXwafqoFzhZoL80n7vFwIlfzwytEH+vnpt4vBb9TCx6H2k3eT2S8aZi4vBD+zgjfaHORWM/RPZd8bVqYeq8Upj/SR2CYSeMN3mN7L/raNCuGU+UAY8yDxKlM8VxrMXO7iYqxH45XFbNx+rQ+ynFwTrwO9ShR/7aCxNAsT9DNz+wXORRncjp3qfA9RE6+ogRnzXNwsmsfdGoVsDhghuLuou2I+YQ+oqjAPZsSOFhrSdwBMCn4QM6sGr+CyZZ1VKvyOuVUAtWmhIwGeSTFJANSM8zyCGfjMa3KCHNavwEj+nSV42sYd96W+HCwCuBPZgNXQfyCc3UzKt0ohxsd0PVZQGIoU/adfPWRHP8l4gY5CErXSEF04MkEpaufBhJDMZvTqWQETxmNnbhaukzpJEBqilG6TEZEMZvSknKQWif7ADfOiGtlJ9JfzVzkSGkDnrpaCmKMaN0hOTrIakXMX6kmaTe1ZtFJ2oVTiyoyE+4hzSQ/Rf0vKZc8ItJJooKDbMfzkN9ecMOFZz21dgf7Jd8K5GLUzw7mwhcvZcN6UxbppA+RouTJCwvFaQcyjxk71fOcg/KO3RDsMXiD5ypdr3drePKqrr3Ld5i3vJV0BQnCWl9sCGGjy2tRwdWRRlhpZnbTrKsJ8t7Nh2vY8FiH+o01ZyjYU3W+X7UZuD7F9x+v9SHwMffhS4343y7mu+m1HsOFNZHDJHMPEi1yw8ZdXwgjFTsCsQlYmce6TAVcNwV+lvht9yfvgLW/TDavhV/NsbkcvlCnS2hsXltV8g6IoY46D54jd8dsI0dvx7UQYa9L3sFl5i5+HHpsbsz/zptTaN2KtnGccr3gYu69Fc8/JP9wv9jz0xAAAAAASUVORK5CYII=`,'cane-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACPUlEQVR42n2TS0jUURTG70xTQ2HZ2pFIXbiozdCiyKDINlmBVJZgWamNG4UMEntA2GOsdmEUKmaT1UQDJUQok2b4yBqd6aUJLcpF6xYtgtr8+ubOI4Pmf/7wnXu+e76Zc+651xhrHGSUWb7xkn1mkbGH5ywwQ5TKv6SL2/RSoNUL/IS4leU76RMzorVPq86MoImH1hcRt/4m9dYfS6WQYK31j2hIOjfvGWCQCCMMc13MaubFuoX5im5ob0jJgzzhHS5DCRHRtfTZX7nLEdU7z3Z2CKMcpcfyvdQIB1hjWMcd2/QZu7GB72xlsyoOsYltivyWP02VLarUsJw45TQzke5omlVqN0FC63xiafaVOi3nA15j/yhMG68ptltt1AnPExTW02q5EqbEh3mcUu+nQ3iZXfouUKbDXc8Bi6Mqrp0KdtOujGvsTQmWaiNMTKV8kniS34zRpW+MX0xQzRwrGeeejsCTmYSHUryqfNpGlwhY38hF62dsRhFu869lBY1ZQSAj+K9JEGcZx/maLekLDWISJpdxXxewWzX7+UilcE6yWfqNk9HPTmGEB8IKQsbZNN2nwi06qZ+UafWMjU7pLt6oiGLNNaF+JnV23RqZK7fAQwc/1HSXhDElLygKssTpP2q5ohGd5BSttGh1lUPOPUR1+Zo0eR+FuhzNepxDTuk+JXnpIWqjYRXllbggt6Al+Qg5x+F0eWeFAU7kFgSpYoUeYp6N8nir11KdvOi5SxrXjGuycR2fdayFi3P+ABjp0VpGmzivAAAAAElFTkSuQmCC`,'card-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgElEQVR42mNgIAMcW1XIeXBVTviBVdmbD63K2s1ADbBqVSgz0EDXg6uzFxxclf0JiP+DMFDsAkUGH1qRbXRgdU4f0MXPYIYiY7IsABqmCMTVQAOuYTOUIgs+X63V/vew5d//hy3/ScS//z9oViRowf/7rQZkGA7BQL1UteDPiRTKLfh3pRin4d+nKv7/vSuIfAv+HI79/2Om2v+/Z7OwWoJiODkW/LtV9f/XGrv//+/Wg/k/zlb9/3GmijZx8H5D7v8znrZgDGJT3YJPu4r+H1TXBWMQm+oWPDtf9b/MxwyMQWyqWvDlTuN/4wa3/wwZ5mAMYoPEqGaBT48f3HAYBolRxYIPt+r/ixXZYVgAEgPJUWzB7E1p/5kzLTAsAImB5Ci2wLzJA8NwGAbJUWTBwSOF/wUKbHBaIAiUO3asmHwLkqeH4jQchlOAaigKoguny/6v2JH1f/n2zP9tU4LAGMQGiYHkqFpc75sTBsY0qw8+Xa4GY8osAFZ74OqPSlUmAG0vBs3mqf5dAAAAAElFTkSuQmCC`,'card-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABL0lEQVR42pWTMUiCQRTHv5C+EtpCKMeMoJoqmxpaChoEB2lRsKFysrL2INrEpUGCgggaCwSDWgSHdIqCBmlyi5ZAWtt+/Sv6GvS777rHe+/u+N3jcfc/x/EZ9LHAMS8MO0GDSQ6454IlroiawCg71Lhmlf7v9aUPTpg1ga8cscicZzVWFMPd+AZ1TnpanfVuPEfWp8EsOSucTZJGnFmWvZ0Ij9zh+uIM8MAzEW9v/OteTNUnmFd0OcW17p02Ddr2eJEPipY4IW7Z54aQBS74nLxynrOfA2Z8myfSEldaeSsYL1Blj0N5lUIATpw3UswwJk9pHjfjCZqqW5KwSspNEgacQTrK04wyxAhTmnf00obqMdUsU+FdXmaXmJUiafxLwH+69MMztPTVelmLzC/1CbJqPwM9OvfmAAAAAElFTkSuQmCC`,'christmas-ball-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAD4klEQVR42q2WD1CTdRjHX+tSIMElhmA6lgV0lHlKSldUkBFGxnE4dZghKl7kHdeiE11/jKJTuOBOCGVDtoVDscvmCdv4ozEooSAaeo6AjOs88/IOlWPgu7Wh3/a88S5gm+DRe/e5+93z7Pl+9/v+3t9uDHMPT5VKLiaYmTzHKuQvHlcpMjz1NMrDEYSnHs3Q7NTfsqQkQH3oULDHnlqxjPDUoxmandKgWil/xlsMGmV5EuEtPpqdTs6Rx1Tlr3jqVVaWBhIeo3XO0OyUBkePlgVpKioe9yKSQHjcnXOGZqc+ZKUirkopz/QWn7cYaIZmZ7SDanWZiJjRDu52Bne7B9M6A5wSCOwGXykBvX+4e0TKRcTk+tIiWbhwf46UEOXmCrwaOOr8Y2wnZ4Fw6H0PuBmoyp8jJtcXf777wNxkCQhh4Ycx3g10voW8wWj93JPoZmbzvYup0Qs7N63OIGjN16M6FQ+EfCRt4Q0ivimQMsCsidG0rl1lPbdthBcn7jQHAt8/fBU/LIiiz5BwTWwwCFpTTViWuy7o3XesvPhD6duw0qRClEnVtcI0FuVAb47/SNeRUUtPi1P4PpcBmheQAXEdxmBRhziqijfo2Rr7RXRtcdi8N9Nu8+KEIC2dM+D4RdUba1T7MI76+Z+yxvVgG+MwfgcOgx9nMHR8Gc6lRNp5cf2axRh4T4JLe9Jtidt3uMTDMrKQmFcE2Y/NKLpsRmZfE5K6tdmMvXZO/3jhkfbPMHxeDZv2QQxVPoqRa3/i14p8TrxuXTgakyJxPVsCywkFrP29MPdcgvHKIDpv2t0o7eiyOA18LrsMtD6w9DTD0tcOqy4CV08dhm3YAl28kDNozRZz/LY9Hjf2vQ0Hy4K98odHcUJhusjSm3PW9u0cp8H9nInV8KQzrhdgUfuhMfkpnJGsguH1MPAR1cSFQPfyIph3JmBQfwJ/aUqwK28/Qrdm4vk9udinrcfXF35HvqEFCfIvzYz9u+VvWbobMGyugfV0sCuqG6Xz/xMdo+39jfj5kwy3+poNKRh/2ESAZAuWHslL5N4ktmNvG8XCNiW7DG59JUCt89u63hxlAW4NXAN7cwB9muIJBtEbNroZhBbKqifcBWvrDo3dsGTIpv03Kvvp2WzD2tDbxvSXYMqXou6NJ+Cw2zkoNqpRzxAvvBMk3cUGbNoCf/FmLNydNbikYO/H3n+PjCIf1PuF0NokiS7WJ4g48YaUp53x7ET7B2k4m7qaq+leFeHC5piDYzd63iMyWeA9/wlw3tqmyZnz/LR+RSfzfzzt4pU5bSnL+8+89tjfdfHCUVqfT302azqz/wCJYu6vLT/g2AAAAABJRU5ErkJggg==`,'christmas-ball-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAACAUlEQVR42oWTTUhVURSFj1GSZfXUzDRLByJq+EOlJiah9GOGUog6CIoQMoiKmhQ1yArK8kVEFIEQFBT9QGUqFGrke4pZKUlNbBANi8Y1/Vr3PH2cuq/evZzD2vuuvfc6e99jTMyHm+b/D7vY5lh7HLyDRj89l9WOVe3gNeT46SUUxhZDEcXxxDTFE5NFhmPVOziDTD+9nNJ/iCljg5/eQJ1j1Tp4i1sr4kqlkgoCUbsligLyV5LyJ72bp/TR6RfDeZ7zjC6XvJReS39IsrVrJGCTRUt4bOlPWDxH3sw3Tqq7GznBlPYkvtDFVxKp5j2HNZFSjvCWKo+cxzTnaJ8NXSl3h8If8Z0DTLLCaec4uYY7TIhSRKb3SfukqCWksZ4rjKpWPq30CI2qco9R7nSdvo43vFPxMUZ4obBFWvf5xC/ucYp1JMguYMwwYUudoY12HqjgtDdDglrbdfQgh9hJ+aygEaOcB9lHDi8Z0HuMfu/PpNlm+8lHfnCBu0pzXaI/GE5L61m6bXTY7unslYj9rCI76vPG2Mlxw0JCOsxr6wyxQPs1CSrTwW4IJzE4N2eGSfTAMm7zWZ2+rF7vlpxCZqR4hrXqdotmcImLvOJWZISR2OVs1STzlD+NeQxxVGu+cFi3rEZvIPaNrVJArW1bgpoboiLeFc/mqnKGRQ2S9ffX38YtgP8M2g3BAAAAAElFTkSuQmCC`,'christmas-bell-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAD+UlEQVR42pWWb2wTdRjHD+Mb7LoQJGFsgziWiImJgZiF+QezdWBHxnptt643xEEIUfeGAAnRGFHeaDBG1MTwN5IoooGyxME6kF67bgQoZWS0W7exAQovgLGN9ldAJjN9fJ7f7W7X3or1lzxp7/nz+d49z3NNBQFPvigtFyoqnhWmznPOdQtM4lqrei3s3PmMkHl0Pso1uVwFWgxZnKmePIfbmWeX+vOdUs08m82c55A8eH2UYmZH0/Mmh7Qrk08+ivF6zKUaqiUGsYiZdjd5onQHA6A3s10K4+c42pFMAfJRbConrY5YhqfGwLAhUTN33CS6mwSXazYZfSdf9nxpWAPPsW+YY3ZIu5+SrBm1gLcwh1xiEpsPFB3+zIRFNgfMFRv0vhHd046o/vliPSyptc0k4ic2L5i9xlWEjgk1WGxzwm8VC+CXyoXwnrUMSmx2KHdL4dGtayWy8gYp/HLtGtjy9jLwVBZBK+YuxBvSwSeIqbXJLEor9Or5djfsrnoRTlQUcDtpKYK7m+tTY9sagezO5nposxRq8S9XvkQLkd4iZE4LOBveMNvdXn3CuurXNEB7VTGocNXIp8bXV5dnbJ/bS0zBuHqNPkooEOvgGD66CvihquT6zebaGyr8VrNt+JClJERtpHhLZSEUis4pgUafkO2Y7NIX+IIcLLDVbT9sWRTGGfwov/N6WWK4u/S0dfE3I1sauMC9rY3f3o8FV1zesf7VI5XF3x2yvBCY53Btw/0/QAwhl/PwRmh+cuiiJ3n1IsSjndC+ujTV1/SW0qKPNgDrbgd2xQesN3gzHutYKvyfkxy8tATBfxKcrH/PJ7wVcnWpNoO4Zy+wvk4Ukcn+edTfVZMTnF0NlyF0VIWzgfNwpu4VLnC22Qr3v/6QC4x/9j4kBy5wYxGZLJWMdW58KjwxFFqF0AcqnOzaz19pw/7D8z0kzvyqPUXC+5OSN0gift6yRG/Xx+nt6JE/ZxHfGCa0YvITPZzstv8ojF/2wcC+HcAGQwgLQbxlPyQjQWDnvdO56GfRgCIS8QeJSWwhEfndgs5HysACY5kCmsXOYjvOQdY4NxKRGWchk9hKa9JFxg2F/eeUjYkGUnjNsglg/LYBrvW/p3UV6zn9RAHJ0xAc8lQRJPq6NrGhC8vR/9AAj8ijPA8ZxDIM+O8Wof4v7zJMaOOwZG9HnMNpQ6gwFvx0etMurUbopCYQ7birwNuAGMQyCDw+Jrw5cXwWKCKnJpW7licVsc59xnUOvYvwFIsE7inwU5NUSwxizbimE8cFK9oHrPtwjTaTiH8g6zsTDfjUnlMN1RIjpxdON/gHAMZ/FeSj2IwDzfVQYfKKb3/WnxSM/Rf8Xzqz9nahGKEGAAAAAElFTkSuQmCC`,'christmas-bell-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACcklEQVR42m2Ty0vUURTH7/gYSG2hUSLYW01nEUKLdrVolQahIokkLlJ0GF1EiEaQ4UZHUxIrG0gso4KMXk42ihGVuWjUaKFWtmkbEf0FffrOnd+8nO6P373nfc73nHuNMbRxyGhxkDl75pFjzxzy7BmixJ5ltBlLjPKbMfYxzU92sZ816qy8lnUOsFPSx9KORayME3mBMwTp4RSfCPOVvVa+hy8sS1ItTZAGWdlMEdWqiVHZZHKbi3j09TAuLjuuW4kehfQybZIWudzAz4DMt6fIH8my0HCWX1RagYt6TuAS5aOFc3SIyqJGVIbVV8qyKUJ4nO7U8ZyAqvYxyyt9IRX1mSHuc9rq5/BEU5WwYM/DvFXEfCbVtyP6Rrml8tx8oNzqY6Al/kajpV5Sob2dVsu14NVe7uRvZJNAAmaYAtX/QjgqmOGB0NSrlNcclfYhJ9khi9zkDoSUeEP/PH9V9x/e0M0P7fBRqDZYImRSWlZKkXa/ptzKVSZYJYNBhsWtcVmaIkrN1kWXStIt4r1mPE4Vu1kUt41ndKUbu9S+O2SJOsY9C39W+xTH7Swmlc0VMy3gAs0yHoqKBDmgYc4LVZOooBNuUE7NnCffCP0l+nUv3U6AEbV1XRfOK6jtjDhSt7D0qxFho5YtKYtPU3bHC8xUGYuUxXm3cHTIaomqCJvmohImeBereou5FXWqjUkuSj6s5vpTzFfoTPTIz/VEFkGbUg4Xd9UON0+d6NcYSDjUaAJ+J8uyXle285hmxEWjD/KE2uQ5NHBTPYhk6XOeurHXsM9G79YgG0z6svC99Mb5K3JJQDX/d9mkOM4V853qVIt/a8QeC5DkpFUAAAAASUVORK5CYII=`,'christmas-card-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC3klEQVR42t1VXU9ScRzmonnVVVfd9RHspk/QVp+lrSvXcmgsrNaFClZqKeLLRAWJ3tbG1FJ0WiqagAEqxMsRAs6Lc9120dN5/nGOyDSd3nm2Z/x43n6Hc4BjsVyYI5D+ent4e3ZpJhfJbhRTylnALDvYdagcQENeLskvkkHYYj7MSTFo2p5APr+L4PRnMYcWlgQ4k6Nm+Jhhlh3sYqe5QJb3G2mqqCpGUyG0Rr3w/1iCommofPyExMQ7UXK3ySrAmRw1euhlhll2UGenuUBR9q8bZyLOLrcuAq7kNGRPAKrnDTRFRWwzLsCZHDV66GWmtoOdxy4gVgvbsMf86Ih/QKq8i3qdHDV66K3XT1xA7JQltMffo23zNdaKOybPmRw1eo7KnmoBUVAqeJmcwoOoD5PpRQHO5Kgdlzv1goqsICNJGN+ah00vJjiTo3auBaVyBdm8ZGIrlxGo5eg504LCz5IoyH9Pojg1h3wsbpZyFpyu8T29Jy74VkxBkktQVQ1SoSiCxZl5qM4BqA4XlJ4RZDNZAc7kqNFDLzMiq3ew69CC7kTwHr/LD2OTGNsKIZgKYzaxgspz97+iKna/hAVqOXroZYZZdrCLnaLcnvBf1Yk9krXoWRg7KOnoQ7n9FXK+twKcyRk6vfV5drLb0hr1BQzSujGO++segeY1D4L+IZSe6ZdHL8k87kL6kVOAMzlq9NBr5NhxsMQXsLREvWGDaF4fQ9PKyCFYV0cxMuNBorMb6TaHAGdy1Or97DD62G2xbfga9Te/j/iIJmwRLyKDbkhd/UWCM7n/ZdjJbnEf9E22GiGqY7gl6uvTXxefhif+RIYGxbXWHANPCM7kqNFT9Q5Xs8bZ28xvkT0UukRC/wu4VfucUHp7L1ecLsW4mVqn6wZh3nxdo6c20xLz3mQXO098yv1yuq/oN3NZ/A4crmlzsT5XuWV6zvUohd3foDn67+x3uq8ZHGdy1CwX/vgLJ7sjz3+wsrkAAAAASUVORK5CYII=`,'christmas-card-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAByElEQVR42r2Tv0tbURzFE62SRbAGxUVdFCRioQUVaQZ1sEnj0DRDqT9op6KLgrbBDkoEo2jbSWmMpQl0SEKK0qmiWFBnRcd26uL/8fG8+56PEH9s+sI353u+99x377n3+zyeO394SYHirb8C0UtxG2ekqHJYP0085beimT6nVqXxM1ptMsRrxS/8hnXiJ0MP34WdpuLX2BBjvLDlFVTqv4NdAs7bnvCTx04eUL1DOOpsRzNfuW+JlLmKuKu68iijzuADlkmUiKf46nq6KjcszQ98Qp8wXVK/Ts6ELIbZIaEIK5+4Ua7jWuMD3ZLVyHiNsEt8zd5OqTzJQ2M0Rp4F3pNRNStcEI9ZZqlj8VIeY0u39p8464RMJcsjsiZ7rlpcY3lpYra8SIM59xGODW/XeqeKdsNOGDbn3kDRoknGXDvz2mstS/zhkyKpPM6cO/qGRQ+HlhVCbjNt85egKkHhtlsNmaM48PCMzbKb/MgR/xSzZfVvDFqwqh6pZ87YmWdGN9nPuSLFtPiW+ido+mjFntXIPjl6tVg1e7zDywYDmuRlXLxaLVghD/s0Xv1QvshQCzllOeFbPt/+XVUyKWPNylqEk1Zr399zAQ6Lh8+Zg7C1AAAAAElFTkSuQmCC`,'christmas-card2-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACLUlEQVR42u2VzWsTQRiH83dVBQ+etNWTKGgqFQ8qWoV68KAgxaIifqBCNX4RSyuJRmJakVbTmmwbs03SmDYmxHxo0kR3u02a/cimt5+zK1kdN2xAC7104Dm8sz/meWd2mbXZtsamj4AgDQQFiU2KKp+RmvJGQtb02YIrEsKrMgrKugH/dQJ8cYqa04jWFJ2/55fqHEZzTgqGj+vPTALx0xDg3wV86EZz/gy1EEty7B9ZrvIRYvoB1qIDCDE9iAR7cHZuN04TNElbAfft7S9BYB9Wc25LQVnIEkkY6bwLd2b3YJjQUVASMsiGDqE2ux8VbtFSUKqWIC9dRzF1Fyzp3sN0o7+TgOHmMZq9jReFYUx/n7EUtEjVBXiLrylYIW0W5GUVzsxNjHy5oTOWu4e80uwosIIS5GSFdM3gYqQXV+In8K4yQwTqxgk0riXO4VL0KAZjx4ikv+0Recs1PC0IlmgZk2CSdHyePagv3sJX9JkEkz/qcJWqlmgZSpCVZVyI9BHBAV3SYnDhuPEe/msHObkBV8qNXs8OHHmz3cCZfEKCtOA9J+LVcs0SLUMJMqKIk569sPu6YB//Td/4TmQlhRK8XK7CkV+h0I6EESSj1jKU4FHkPg67t8Hu7TJxKzxECfy8eQchMr9Qaxi1lqEEz+JOPI46dBxTl/HQf9WoxxLP9XCMXHSxNpddh89UPEUkgc91tZyR1tc0Ev4JdXFuutGq/5VkXXVv/RA3f/wErtwxZ4cKiFIAAAAASUVORK5CYII=`,'christmas-card2-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABX0lEQVR42t2TzytEURTHh5QkMSE2NCsiisRiNFhMs5FYjFKTUn41ZaMwG3aKnZ9lgYUNpWEzjQnJxgaZsrGVkrLyJ3ycOXPfbd6YYu19F+fc987n3nt+PI/nHzxscf0nJagnxYaHlEVjXFo/QMD6UU6NghJNUl+WcMcm49zTqesIEbUzolfm2cNLL2sSnQXk0wF9lAtW6QLaWeKFRULqu4ApHkkSNysHGJIzv3gg9hNYZVjSuqIoF1B/22SQYNIC1HIjt/TKHiP5gKumFvCRlqId8sngb8CcOmXcUip2nx4HIKw1ylVHBhjTgBVzlTouMlkoEGI0T83mShL2LE3J6oSwAaallW75HaCCJ5b10FneaDNAt93EUYMDtHCcMwhRAyywbuRnQm3QAc7xWaBYqlWjQBNdRlU0qq3OACkJOdLGfPDOmXqtDNBfsKwyfLvETSfTkkncTmYhxdn5D7/0N0MhmEd1XXv0AAAAAElFTkSuQmCC`,'christmas-card3-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC40lEQVR42rWV+0tTYRjHhejHiP6Ggn6oH6R+yUARycvOLEldEiXGZmvWmmTmUDS6EEuJUIoyLLKk0sJVmmaiabs515abl7xszm05nJtzc5tk129npzZmm+4E7YUvh/c973k+PN/nvO8TJ3N4tkvtHtvAghcG7wqMPvpSOyxedlfyTGF3chOvL21nXKQhmffyJHYPhlzL/xQ8oIKOxO/57XtxUpKO03LCIFAQtwWKzINc9b7NqwBtVheKP5ho6eyQGeOez5EAofp6Spa+439nsFpSxv4gwK8Wi5OWnn1ykvWKnkGZ7MCmIODt/BLuGx209HDGganoAEksihwUX8Goim2RZYw9sczAxXrK2rAK4D9or+fcEeWvjz9Yt+333P+cXg+gIFrDDtob8sO6ybmIqjfMY4K05MaUjZr7n+tZxJcRvFid5D9ibKUF0Hu9aDY+Iv95H32AgjDSvouuaktR+T4ftSNV9AEyop4WQGwSo0zJQtVAAS5pCtFu6aAF4MuJHFqAdksnSpU5OPGcoAA91nd0AD+KpMwtUQF60vManZCyJwC4PlxBBzBIqx9IbRq8ML9EheooBbio4eDJ9API7dpogMtrAhqnGlGtPQPRkIAKqLSPQTavRaE4nQysQ5u5jcyEg2u6MmpPj1UaBiiWE0kRATW6SsqGUDWLsmAiMtB4V4DxXjFq+zl/7eGgSd8QAshY5qp3bwwDtJpV5SUDOaQdR8DvyAJXzKBsUSXugjslBQuHWfjGZsMh5FPr/vclPbkQDh7CefXxIKDoXZpkzZ78avYjRFohBHImqUycU+ZC1XIHk9nZGGUw4M3Lw9KFcmqd7Lek10w0TNRhxG0LAnj9qdXrNn31ogtjbjt0rlm0GB9T/iqZmRiNj8doaipmHIukJfcw6XFj2GUNKzK3NyUtIqDPvrRN4vCYlE7vF4Nv5af/lgxId/MWNAkJGLsiQuh6QBMen/NYZ6KH3ZWkj1tj/AJHKDkDkQcLGwAAAABJRU5ErkJggg==`,'christmas-card3-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAByklEQVR42o2S3UtTcRjH50sbSBojwoskmevNiSAoQ8EuZl0EmgRhF0ERJYWCQspmEERdNBC8CGLienU2s0kmRmtpRl0PLxS6qivv62/49N3ZdvbzuNLzXPzOc/j8vuf7vLgI8Z1FXuAjpXORJPFCJEiTJSrC4yo+hOl0/ePBzQKtjLHEO+4QyH2K0EmLpeuMPuFvChc99PCKKxb+H/V5I7vE9bx6PQNl4rQDj9GQxw+XxY87cH/B+37M4Gdq71KTNj5E797qr+33txwsqgfs0eTiGpet83wJp4rl/EsOr8BrhEdY7qw28C7u2bjx+1NcLWeG+wR34ZxgnenSBQNfocqBy19ao/GyanXYwKkrLsNO9RQdyqM02/icdfZzaxdOUEsU5C6DjDvwJ/gMnEoOcFSDWecGk7wnQ7e65bbxj6XqI/pVnGXBKW7zmz+c5RNPlWdoIyHiGDET/8kZ2jkneFXa22zyUFlIffpi4Te5aOJZjsjEBPOa5gUVWsMPZWHt6YyFJzlk4iN85jGPpLyhVr7kGVsMq7w1rUNCdX0w1yisAdfJZYjnstNPLd8YlUQTjVqHWdl8YOJBqRRXdo1fsrZh5yvq1VdOlui/mdXYPBGctSIAAAAASUVORK5CYII=`,'christmas-sock-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACu0lEQVR42rWVy08TURTGWbBwRdiZuDD6H5i40QUxxk0lIZYF0bpiqTEmJgYXyKIKLYLS0pYKtAQlQRcMlkdtKxjaioqGGGM0xgAt8+y87kxFixI1cJyZdkpbgbaAN/mSuZOZ73fuecxUVOxhGY2N1bXGCwNnz5mG6+oaDlfs9zLUX2wwGE0mQ73ppKKmsl7GOe4IxbI1sixXcZx4BaGkSRSTNZIkNSv3ziP09RTm8w83NZsbL1+9ceLa9Zveks0pJjG9TJCgK8FyIEnylkJIAkFEG+lr+aUgCAd3NGcY5liuuSqCokFUjLaD5Etq2RGQSCRMhQBVOEkBy/GlAB4VTRFBUWtbQVTxgrgjACF0uihAeegQzbAY+fEzEK/eArEUB3KZAHoxBoRyEn4hDtL7TyDFcJCic4CmXoD0ZTGivHe8rE5autUFutiO+4C6PNvL5rlUdp+rxrEMINHh/j8AyurSRLe79heAm+3VenqWW7uBtDjzDIV7/XsDkFaHP7cGeFt31oy/2wuExZHe272wgo3Bd3+gjEm2ugZzzbVa3LZlAaIevc0DqfAM/PwwD99Czx6XFrnFYc6aKlIj1fdcZ29eWlawcc1cAwSDzqLmfKvrqBLpum6oFhZv2wRQ1vw6pCLhTcC4v7YogLb1hePtDihMj654TppU/ZifSwPevVmHSKSy+AkwLCXPPlemcxrYkRGIWbv/gbCdmwO3+npWA6RCoZ6S8s9h2C8VoEuaCQHp9hacwp4t8opvElajYbrk7uFHR+VcgAaJTEH8jjNTkx5lJuxaXVRI0v0wLA8Hq0oGsH2DQ4UAVbzvSbZVyUxXKd1F4uYHB8r+PCinWNsKEu90Qc5kI3XSd/UjZ/oGzggTY38KAYSzPzPRjoVdm+sLzOZKxjsUFZ9O/BYCkyAGJjfo3sEkYXW2lOv1F/P0w8PRWC0EAAAAAElFTkSuQmCC`,'christmas-sock-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABd0lEQVR42q2U3yuDURzGt5mfGyKRSXYhxSK5spIfF1Yjt5KrFUpxs1KEKH+A5EKSC8qFWLL82DByR/E/fTxmhp2zceG8ne97es7zvOf7fN/v+zocBQeN3HBHs+Ovgygh+lmyb9axxhaLXHLNNsXEifHKCTs8ETbpNTwwQBujorrwCinCo9jFEH42mcsVzDNWIDUnt7nQCsGCbi5x/gQ6OKdC9/IcopsSxRH2zGcMq4DPmqccc8UGBzK/L2d3vMhDue3YXlYVq3WV0k2TzPs0XcTz5ZkWGOh/CkJELWhrHgENMugz0HUVwCagXvR2A13QZUtJ7ZAkYKAeEumqHZmCWaYsp4aZV+xjzdx6VKZnTL+/1W/oJBOKu3SagmtNLxH56PlR5nWCHNosX2TutSS+JGrwR1JU2QQJirKS+8/E1JAPNOT7FMez68hHAUS/z0PXZpmO9mfWlcQUAwXoaVoLy5TgTq+TzKi163//RwzqqUn1f0oFdts5b7cJ/TPMVqXiAAAAAElFTkSuQmCC`,'elf-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADMUlEQVR42qWVSUwTURjHcYknYzwYL14E2W0Loh48yG5jQYJROYASY2IMIgcDNjQspaQLZZMapUJpKUINLQFqUKBKWQtC9aIhJCwFFYUQTeqCZRFmPt9MRVvoMpWX/JLO63y//5v3vcl4ebkZPG3o/nwNLY2rZsi5avobhAUxzlXT2vIb6Sm83sjdXv87kIiF+FTYwoDCZgag31vR0D9yG2nxHssL1LTKAg0dCO72HAd+a4jjAAS7zg/PfhRYS33lGsZVorACiYVtoU7FBJz6AMiU+0CW4ghwVMFpbuW5TSGHUOHXshdhUPo8zKU8RxVEyjdAIescZeBhd1tTg/YVxO3HXMoJ7tT62gUQ8KqCTDOsmKwpFmufs8aOuRNvYLNyjK30M+XU+C+IJcEwdS4Gplmx4q1HsunoXlSIUZHnPg7+G4CeZJGon4mLTp2OQ3IrEjv5RELkgeFrETdV/JNGKtwrDZnkSQPMBEWSoEkkDx9LStqDxJkIkYnJPGgXgCZfE8kmVjTYrAI8mZthRSc4bS664Rtx02jkKfLm8TPhJJ7MTcdH33YVULW9gFgzgu5QDjphFADswAyyPLzvPnjOg3Wrp8iXYEsA3snvwzsFvZih+hY+rASCL0/LYKn3IWxcb2ahVQC/9BVkAAxILdApyEOOZdDxzzoLALy7fAk3NsD3LinkxvpAzfUoIK4386FZBDkx3qBlJ1qfYKASI+sRrgP05aQAG6mHZ9wUGFVwHAasGBSgzb4A7xo41oD+SnAdoBN02AZQYlD2rwd2AaLTW5vcIYpAf+rxrpK3RLGlsRjeX4oHcznboXy9Tw6zV87DfHryny2SruI64QimE0qBx9vp9KhCU9MuJPhpLmOTR3A+I5UUtuUlw4SqAFqyL8KctgSWn0isL1YiEzC9BGBQ1k75W4Ab63uwoTpYVPJhrVtGBsw2F4H8Rgzqy2WyPzjCUseFFY3AeooG5RmUA8BYfwJJ1yjv/4D0M4CLbXE0sBEV36n8pdKmudJ1MMr8Pf4eE281vFKlE/2wlytsV/5jrb+a6bWdgbbLGzM2iPHhOiNuqF5Fx3EFiedgSFZMLIKK4zf/kA6Bbh2EWwAAAABJRU5ErkJggg==`,'elf-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABxklEQVR42nWTS0sbURiGk2YVBS2N6MKIWHBTBC/1hpEgIvaCSqHqot2L4KJUuhB0IYgUilRTorgRxIVSsFgDlTbiPd7BG3VRqBv/gD/h6Zs6OMfMzBnO8H3vec58lznH58sYtDLLHvtskWKCMp/3oJhffKHK8h4QZYlpgu7wEw6pppRNAobaLT/HCecKrtRSvmPlJUtO/DOv+UHUNe44nfeFbHbJosOjpofccEKjLXQw6IH2qkOX/KaFNVscoM0DH6FJbS2kgsSt4CehL2yw6vqkBC/wk2VKbvE8vqfT0aykiBARy4vILpLmJ2WGC6XDsKM5xAvKiVteXPZzaYG0Z+NdCnTCXwU+Vn+2OJV1qXkqe5crjnQY6m38XMKmIWSW+pU/jNlCStlvU6/3Ne8NMMG3//hHGu7hmmPCQ0qoz8AXLbyJOhPfs/AgjWQbeJhqC4/wyZYnmFP2zSSZZONOfazyF/mgszTPDq027qeGUXq4oIAz8rU9TEwtndJX51VBu/WDjMCFrKihSd7I7tcliarb40JrWXdv2CzPXNQpXrnjjzjgaYb2jhnvmxpmnWEKLK9chcbMa+jcEOCtblT6DB4ouRon8Q8xY2xptWBfpgAAAABJRU5ErkJggg==`,'gift-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFElEQVR42mNgwAJS9yippe9V3Jy2V/EdEN9K26vU0NDAwASTB7JZEjbJH4hbJ/crdp3sv4SNci+Stim6MRAD0g7JS0INfgm0pBuIDwHZ/9P2KrTD1CRskj0eu1b2f/wGuQ8Jm+ROxa2T/Qu2aKuCAUELUvcqdQAN/JOxV0YabinQB0CxL4mHVEQTdipogAwH+QAmn7JFzhgqdpywD/Yqbkrdq3gSRWy3Ej9Q/EPaPqXOhM3yJ0CuTdypLIusJm6D7Jd4YFARtmCPYhfQsN+goEIR36fYChT/DA6KzXJHkeVAQQPxgdxJrIb+X26g8H+lcfz/5UYJz9boFy7cov5t8VbNd7s3aK/5tdwwaetRnYnLT2gvm3hE/d+Eg6r/px1Rf7D0gPr5Pws05p1Zovbk4FKVfyD8ZpHmhr/zNef8XaA5+/8ibRuI4SsMc/+tMPoLxP9x4YlXtP5X3NMA47yzKmBcck71/7+Zynjx/wUaqxmABjzCZzglFvybrfKHgZDhFFkAxCALrtPOB6o/QXEQ8W+J0XfqW6Dy/+98jUngiH7Bqz73tZbWf1y4d68GhgXFp1X/33FTwYpvu6r8vyikdBOeTJ8xqM94yqD+Hxfu2YppQdFJlf8HGeRx4jMMSldHLRi1YNQCVAum09SCJwzqodS24DyDUh+iRmNwYAFaMgFo2HtKLTjMIP/vNIPi+fsMChwgswFtZzBfgvBfdwAAAABJRU5ErkJggg==`,'gift-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABIUlEQVR42u2RPUvDUBSGb0edOuhP0O7xN1ikqJtbi1Bw7tatnfMXnLLYDuLQbEr9WiIdLHWIAYXi6FLoqNjSx9ckpAkBdRU8h8v7nnMeTm4SY5JgnyFv+FTiepdH1UP2TD7YYcEJR7h8YKnekvZUd9Qv5/EreqEWuONGeotHIey49PP4mFbsysChznZctxjn8TNGrMT7n3nXiXav8sDpEivS5lh5qX0vOKH35f3QOepBP/RtioYLJiqXOdDYk3rSQWYy4dwwo565lCWsJC1JrcykzszoM1V/iVdZGL1IgJ1KJ4U7mUnAyLDJE1PukwxSeJDqT8VtfD2ki/vzZfSzupH5x/8EbvNKjYM4m8Ia0oa0mXRrYuwIX+eaOd/HXMyaMZ8pc+wP4NlcFgAAAABJRU5ErkJggg==`,'gift2-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACxElEQVR42q2V20sUURzHl+ih3oIgeuwhNS+bulszzuw6O7NnZndmx1K7SNSD9D+ElGVuSoFklzWVhRCE8kJRQZDoPqjRxSAsdS+Zl90FI7AepQtG/TozNYOzq7tj7YEv5zDD+X5+53t+w1gsJse7WrRz0YdCWFMGyegZnvMtuRjYaAYLUrS8dJzanhuAhE6lAuKy+7wlV2OMZbe+FJ0fn4oUjHgJeCE6viRq2B3/X3mVkBeXUCOu+NEDj/1rUCiGVn4vDHrKV+clNByXUcuiTziwaWPw+7fgCM5g42+LMq/H0i0UQRufDzEftzaunwsSfzXBsttMA+I+FMDVQ/LYIUjW1ahGimknBgzhiHoEKyyk3EnU7VgwZy6jSrzh11L9CUjU+gwmXRigGA94yuC2UKKfZF7kYJohIco5g2ZacjRxRIal0ydT2xIeeu0Qk1h1HRJJiPxdzwqMCphxVfzImj3+gFaSddUQP+yFdXp/XUU4WgWop0CVRRsCkjJfaNZUkxaPphhyNKUZT9P0LmVOSHyFtnFO5EwBYshpAODL7tCN37IVe2acpB2/mFMgGmDS7YDnlQREPS6Yl9ymq08DhBmKxg9X1QtiyJGkiCjFdIgsgydEKYzS9rR2XKswS20M8N8r3q1ooopomHIRn6ZY8vMbieodYw7CMFUOIdoG0zUuiBzlYLbanTWaNMDFQSus1WAzqW++1Lff8O5uC2Ewf49PuZ55TgBK7rjfswOa+opbG3rzljX1n7WtaCYt3YXQHNynqq2jBF7VM6bMDYAL/QViQ28++O9bQZnvNNr1Ks/1FKjPFF3uLvrTtl42q3nqJZcpx7/y2JYxoq6ALWPmqYpxjgkDoH2EyAjovFFu2lxTBDle64DAOJURcOt66aYBYY7+rgOuhTKfoD1Y+iGKnAGzwt/HzTDPFOqArG06YB3/l9/tb7R3odZgqrQLAAAAAElFTkSuQmCC`,'gift2-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABhElEQVR42oWSSSiFURiGb0mmyJCFyMJYZKGQccNNWYiylBJKWVMyxIYoK2UhJUqGkiFicd1kyJRpY4WUyNJCyu7xOvdK97qn/3x9X+93/qf/nPOe43KFGAxzxAFLHCraXE6DS5III1WqhBVnvIV+v1qkyBkP54YcMijD64Tms8ApG+yD6hYXTJJigzvYo8SoEa1QbVQtZ9SEghtZJZ1R4qQ3KZY/0WY+nmMKguFILVwkA8NMNyVXGjkh33TZeILxJvpYIc/fFVChmv67b5bJDcQnKLfbRietf02yco4sbSjWgjfQ4xNRcvhTB5snkzXtOSEkXk+vT6xzSzvn1NDNODN8UWjFSaOKOx2sS7b93OUQs1otxoa/MG3iTXnBjtHbDNrwI397rBygzmg3wzb8UVu5VHwoX7lXveKZLhteyZheXvjf3+WUx37UH7yBCEe8FC+JPnyCWCfcnGjXh2+REIjLSve/qJMtBm/W5Qfibs0Gx5AemS7/SZ89vCsfuFb1sm17aN+ubGoJWRJXiAAAAABJRU5ErkJggg==`,'gift3-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEoklEQVR42rWVe0wUVxSHiRqbQKkmJq2xaf2jf0CKWAUUH62AUiLLo1gr2GLEWm0q9bGCgAsLTljAUhEfgIBp0sZHrH3aiopYQlqEsLMzu4swu7wfiyJRCuUhzN3Z3V9nhgqUWKUmTPIlkzM397vnnjvnOjk95VnNqNzXsPHmIDbHFqovrg3Rnw1cyx5S+rNUe7A+X4r9oqALFjo97+PLHChfr8/oCzUUKd5mVbVB7LGGleze/lC2+PpG/cnwdazqr1BDIfXcgtWssiSATR8WV74zkDlaKL7Dl90PceVHQw0Fu/3Y1KFQpkj1vyaFEzULazVuUHy5MOdMqrc/nUAHMdm92+lcGQUdy2+jT/SGMUX3I6uKzl/NynOXxiKIenlaAmFFKk08U2APzoRd8Q9h6ej72WOc/svLJr5NJjgz/pkC6zL1EPFIhtUnFbaAdNg2aGALovDwO7dxei96jMWnEpj+27Mz8FI/kDKYDO+TiM7iRbB89foYxa9i6hgZb3XLtLaJRGc5yEcZIHEXQeIvyfAFZzDKJcjwJ4rH45PomHahxwX7v5lhwWdFMyzYdhTk4IUZFEjsyAFRnp9BgUR0Fvg8CrzxU4ze2Qs+9xTIgXNTuTttQfeuXAd9sBCTJfzZPSCV62T4U/sm4seUIDciwZdGgtTtj3zqxIuYbmdnnaXOqboZc7XtCKxoH6lM+7aN7Mzl+ONJ90hpFJHgs9QWKUYu7OmThNbrAeBvfDy2haYE9X8K4o1XzQq6HApdOZK4CoSZmpDHXfmzNSdnheCt7iFLkiG8Q9kdwZmliKDmk6oNdutlP/CVEeC1UiaxkkRAa9K8JwqS9D8J3fVq9IhwXDZGxBX9weVjcA01KLUPYesR2GI0ct+xva/Ryqu/JAroGIwycSDX9shZPOLilj9RsIQxWV2qzZjHdGExN4TXDHfx5s1aDKwU28Unh8FfU4H8qoKQSGE4Ihu9N8PH6lIeDXJ1uyjaLNYixAFDxPx/Tdxb/31iu7nN1lhngaX5Hs41GuFKt8LXkAcv/T74G1PxQ8PXGOBUGOQOI1xfg1nVLXhR24lDhpsYvP0urMpdIF7JIEtTpKZXCkXG4rH+z2Fuh6nJIU3e0dCF/q5OmQW6RodUbBetBctNdpnPzXUI0WshxQN0txHL1ctxZYX+obSFfNxhCBvTHrdvkyywMVtDSKU/mustGKz7Qt7DYS4RS5kdcNfFIqIuD5rmMpn8pitw1bYihinBA7FOfVwKsk2/w4uzD48sVYs/YBKsH6TCHjJ2P4hZ+DhZ2ehVpNIPXRyNR8a4cYEr3YKX6Da8YbyHdeYhmUBz35CLtnP4heoGeYw0NsA0CG/ONjDqqYZ8j0SlgfyYLAkc2Khxk7Pga0K65R9I+97jdiB46st6F+puYTFzC9sbarGzkUNUY+vxBUzP6dnVTfCha7CZ68RKkxVbyu6XSEdYPml+RyAkUZCO8kRruPOhO1+zqYxUBVp5XVQbzyWG+4OaE1yrqvHV7xYCjMr+tMaSGKqiYo6HWLMFbM9JZ23ngDNt4T3rrflbgNnCKipDug2tb6UItvWa0wjPfEWa+28F1GifqmgzyQAAAABJRU5ErkJggg==`,'gift3-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACPklEQVR42s2US0iUURiGf83ahF11YTcqokQl0zGMWrQwMimHblDE1KKipgQtXXgJuohkNak1JlQTXtJKYypNR0UZK7UoqCi6rbpsCrJNbWvx9M7f5DT8OWv/w3/Ox3e+95z3fN97jmGEfSzBRy/32EcBXbLussCI9HGH3fThoZmLNMnaRWtkgI8rFDHMYfLxc4QafGOFTsamdo3THMTJCUo4IMut3WwsY5IV0M2pYOug0xyHaQx6ztJgBXSOWttxmONxMqyzIcAga4KtgkpzvCpKmcSadq8V4OQRxcH2hlLReCBrP3PVv2OtFTCf2n+SG0MirgiExj8gRf8ogOn/yZHcyTxVZhzEyK4j+g+ADPppk6bqiQ0PT+Qhm0mSSv1c4qME0cZLWQPEsYXFrMYbDvBK0h1a7RZDfNEOK1Syej5hZydziFfvYWEofCIjtIiQl5PavkWedhrV3yaFdJYzS30Zq0KALJHwqtbTVOFB7fGaY5znlewbgqxkHWd4S87f8HKqdIY0sW7mpwQyxC/dhlJJ28EmWqXZJraSymUKA+GL+KrjlnBT/L9Trfvg4hyfBXcIPEAuj9khBjlmfRIMtrFXt7dH2bbrBrip1e/mvpT6XrlxSoKVEvwHDrGBPNYbYnhU/CuEn8dzcQ3s4NKq5fL7tISd68wmSgp+If9Sgwly28yz5PKDZ8q9hyei0qdUZovMHr6RpdmNFIpSVCBwho4TeFKqVKQ6Fa5fL8YUZtIgkF/PQBwXNNuluamG8RvuyheNbSFgfwAAAABJRU5ErkJggg==`,'gingerbread-man-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADZklEQVR42p1V3UtTYRg3iIi6SKKLuoqIILqJ/oIIgsibCoqo6KbLBFGJ0G1Hp24nc6t0c2ebqfPMr1ykpmlz37IPd45zc+o0m7qpIX0IA9GLqHx636NnTp1u84WHM9535/d7n9/veZ6TlZVi2TSiHK+erPHSpBXFD4aW/vTSUht6KpjmystZB10+reCMSSWcMlPCdQQIe8Q/FBpPvfhkRuAGbeWJgVphrK+mCOx1peBsKId9SHC47Hbx4bQJzJRoCIPj2AvctXO/SSpPC9yIpOHB9yNIEn+CetnxlARWisjnwT/In0M1UcABDDVJQC7MB5kgHzw6CbdHlT0Di7YskeRaSgKLWtSOwU0aMXxl7eA1dQPbWgXOxgrIufMQbt5+AI76cmBbKoG19MDCqBt8715vEOgl+SkJbHXiJ5hg3NoJ/AoPdnIAipJClFEh93vaZoifR1kTt+fRk1dTV5BBfKRfUbSOM5j1DUJkxMFlsFNznMG3oBOWJrx8Bqsh9G5aRlvURDvvg7FWkJ7J6cgzHw5dCvW3X3HXCs9aKMLGk3h0FSnApWRAJ86OMgPnlpciF5PfmhL5bE2y9fAoA4llyjcbBproKYEQir2IohPDEOjSrA7RpBJZcyhh3hBPMVC/UgAzwWEOFI2JOMHApkyrs7mwNpcLjF6SlGA+NAJoPm2UNV1xfatzNcQbTm+qFKZ9rl0Z4HA1lkPYjC5gKd4GinvCvSlhZNQDw+2vNmUjH8cJerXiY8jMNSNVAnOh0aQEJkqU0ujFL2PAtskx+JhdJz66y4cxx8eX/r5W2qomXljVJfLPSsHvRJLeiTH4NDW5DRSN7Rkk2T0vLbk17ewtjPjdeWkPPVOt8HucQFEMXbMR6I4uohu+SCAhzQf6HlgVovO7pFIKwf52a/jh+YSef1ld1emMCRKbLZnhmIA3l2mSFmRMYFQJVrgSTShXTIoasNmoLF53JzQfQ0v8GYFPs47imSAL4YAXnB1qMNeTgD9CWx8kwmFtIMHfXQ/RcRbVvx8WJgO56etPETJ8YxsthxGjASKTQXC1VN/nz5kO5Q285x94D4xBxfvxKG0Cm5bI26Z5m2IFrVP8eSwWy3YbVLF4jyAZ3Y0VdzMzWSPqwn2ASnXZpBFd2HmOByIC/oX/g7zp3wvnP7sU5ZOLVPIOAAAAAElFTkSuQmCC`,'gingerbread-man-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABvklEQVR42nWSW0tUURTHx2ZQg/GSN5TA6ElFffFCEkjIKIgpKJjpkw9iLwoi46Dgiw8FYQ8FvZiWNeJ1nCFNzS8gPucH8TP8/J91ztTYOWfDXntd/nvt/15rRSL3FuWkOCXHofYJKzyKhC8G+c0ADzyriAQXjITDZymmiud5uHaML4wGQct4+5/nGbWSUX5R44fP8zLkzQRJv3OXEskx+iW3yZDW+YIJy3/sh2dN1lAheUYpZ1anWvPm/PAdKgsqdMpQQXH3/PDRAIZuZIFxv7OII4e3z9/HsVPSQldKxboRgWviZscZpsy0h1wp9ke/WfYu8YplyUvtLu/6gQgcFqRzvp1k0jU+0qheZqTVe+H9PFxdfmJlqKOBz25wnBU3+99scaY8MiU89bIv8TofThr3DD/pM/s9WT6Y1itfxrin/FXoZM3lSgfnpq3SEz6R67Tb2aL8rc5faOJTGDjqZrQePHamnm57KRYMH1D2YlU8Kr5b6kLM5v3dv3G4D//GhkCLTLMoa44Z6SfypYPhmklxTXBLnbQqnf00S3sTDN+077Xww7O/0ibZTEcwvJq0xmnHnXGzv6v+B85b+XUHoVkoLPWjeIYAAAAASUVORK5CYII=`,'light-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOUlEQVR42mNgGAXDH/w/4Ff0/6Bf0v/D/ub/j/jxUmwe0AywWSAzgWYz/D8cqAbmHPS/9v9gwC4gveb/Ib9pQHoqEE8HyvUAcT3EIQFpYAxxVD1EDqQGrHYqWO9B/z0Qs0CODlRD2HzQf8X//Q4cKK5ZFcr8/1CoKNBV6kB5KyDugGIrsBhIDqgGRc/+AAGQWSjeeu/gIPCj1GPrd29nW7zeP+QXAcL41HwJdnf5Uea5DWQmQtDZ2eOTi8v/zy4uKym14JOr6yagOf9BZoIFrmpr81w3MNh/y8Tk/yd//18vXF2dcWmOm2y4DIRxyQPNcbhmYPD2sZ3d/4++vg/+h4ayMVzX1y8CCv7/4OPz/3dExP8vAQEfcRngN83gh/9Mwx+45IHmXAY5FGQOCL/x9FzIcN3QsA5kAdBGsODXoKAv2DTHbrZak7DV9n/1iZj/5UcjzmG1wNDw0W1TU7gFbz09V4AssAdZ8NrNDSwItOg2RtBstDQEWvA/d5/P/6azKWBcsi/YHIsPlgHN+/8jNBTiAw+PPJjEGZDNv8LD/79ycwvBsGCrjRrIgpx93nALCvYHGKCru6qvbwhy7EtgJH8LDPyK7LUIkMQLZ+er2JMPAyPQgmvJ2x3Bhteeiv/R8J+BCUc87L5pbPz/rYdHH1xwv4MDy1UDg/nX9PSMcEVgzGbrFJAvgOH/v+RwyEKcEQ00A2QWyEySypgEYC4HWvAqdafz29xt0Xw0KRijN1s6g/BoFTEKUAAA/rtdjgHVVXcAAAAASUVORK5CYII=`,'light-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABTElEQVR42u2Su0oDURCGTzasGMEUUZsoiiAo2nopxEVEYxOblHkEKyEIBi+FohgFwaCFATGCLMEEG6+gaGFEW1/Axgf5nN2cXXYLBWs9Azvz/zNz9t/ZUeovHspskWGQ2I9VManISOWJwmSYN/apUOOKGy6wOdJmC7oVtibZA14YwWz0nwfvp5UEC2JtxANsHNsLV3miTiQkIUs2hKO8StVSAzgyPukIFeTIhXCSD065lGvJs0w7lvSbfjrFtVjKx02SnRSha+QVd5ocCjSs8y626eNZFnV0L4J0OM+ojtIUMYhwSFoz01q94lmxx5gEBo/eGyjR6fpuSppp5sEZCuMUFD3OuJgTdZ6ADSZcbzLjc1NE5VmhywFn9MrPSfjJfo5dv0uLzxkyoz7K3ufWPY06XZUxJqmGuBXZh4HvNsdiR8z6zUoW2Fb/xztfoavdR8PgWp4AAAAASUVORK5CYII=`,'mitten-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADAUlEQVR42s2VS0wTURSGa+JGN5qoicaNGBe6M3GhiQkbdybsjAIFBFtRY0CLfYGiBSrQBxTCywKdsSqghIhgNDVCKS/74CEgQmtn2tKWAlIeKi6UwHFmYtG2Q1saF97kLO6de/9vzjn3nMtghBmeE+k7XUevzZO2coprgjO5GhpTM6IdS8dv7rbGsIG0bye5QIjRmeP/BSCchsOas1IYjBUBHieB6XOKIHOeL/fwUPv+qADJhT1fL4g64FbdJ+AjeChb4yGYjAGwbUuAxALdaoQAygQo3sJpdu0IK2yNYcVhhy7HM/O1a4GARsNMGBCmz0as+8IA2A4ysUn5WvABlJ1ukLROQZfdCxUaF5S+dIaA2PAcpeNAxICat07ocy1ArdZNARqNM9A9tUCBNoPwELw6IgBTrAVREw6ytikKMrK4DF02L+VN/lM7CNFNQzUdJJxeOngxpajPmyM1rt6XmYBZoIN7T4agbWwW2sfnwDS3CJMrX6DfvUDNSZO3O0GA4G5CdDnAgwd+4qwSY3GiWLd+o2ZiYxNTrKNCVPnGCS9G50BjmafEtbgXnr+fBcUrXx4wHb/OcYy4RSgfxT18FV7lVxuXpIbWJHE3ZNWa/dwkvKEAQtQCLcOzUP7aReUA6Z4GdZ8Hbj+y+fY20sZaJOranibRj5BC3Prgu84uMVGA6xWjUPDMAXce2yhAXpMd7jbY/9x/xMalBbDlJiQ+r3PTQuIozUB+Tyns3VgTNzsC9y1x1JaDtIAkcc8PltwYsnCulg1TXlwpG6JtEQIUiw/VaxbTpHq/Q1lK82qgUEbVByrhLJmRyJPFt/6T9xA7HbJiiRAJE4h28PvmfBeocGFyYe8St95K6w0pnlk9DjwVRs4ja9OsondHSJCgGN9FzlOKej9H1tywiahadKpErydDEhagwpuiAqTLBziER5G057SoX7JUSb/574qm+fuOLT8u/l4M7mXJDIbMmo/rQY8Kgjdnqyf3MP7FYCsGEjIqxxQc5WQLX4XlCuptsVs5/wu/IsVv35Uj8wAAAABJRU5ErkJggg==`,'mitten-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABt0lEQVR42q2TTWsTURSGJ20ClapJQ/0iig1YTWkX2dQkICoqCC1WpBqKO4stKaJ07UKElsZFEBcxmkXcGKOI2BJoqEZDJStBf4M7/8bja2bSzkwy6ab3kNzz9XLOee8Zw3AdJqhbsk6EL7o3GTC8D1M8dHnKhPcVcJsSdxzS5JJ3+gGFFzvktcTfHTBCwaNulaDbGWCVV7sAFhzRizSIOAFhatwwAdxkTNYsZ23xc/wg6gSUzZbUQIMZAdbkOW/LOM1nO+AUGypcwK/Hm+Ynf9niGiOOLmq76hLfKVIRIM1HyR/gd0uLkyfeygmyaSb3kSOLr82SuH/BJ36xzTMSshviaIWM1iRhcv+hzQjDvNX/CQGuaIbH3Oew7Kp+F0TIkFnmK9d3GvPRsBj5z1mMkPSjvLePUSLlGOsps5Z2xrpzXO0+d3s56iRt9jwvnQnfCLTuYzyyPCHeqe4MSe6K2Cz97i2paKC0XrFp88Z4wBPuidRo52LFFcpw0N1cK/aG496rvcGhDl+dPm/AHLdcnhR5o9dhnEmbdVIvfaQ3IKiFyAo2SJRl7daosffhMs/FTVHsdf0o/wF640etyhWm3AAAAABJRU5ErkJggg==`,'mittens-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACF0lEQVR42mNgGAWDCrw19+T7YORt/EHXW5BUvReErLUvi9nE3pSxlMaQBBqo9MHAcxcQ/wPi/6+03P6f5jN78UTe3pKQwZ8NPbU+GHjsO8Ri+H8vgz4Yn+AyfXNdxNYeokDPTQxo6CuQwTAMsgCkEKjp73VJG2OcPtZxkwWqfwPSg2wBTO9VCVsthg/6XnOQDUe2AIQvCltewmUBUO1SmB50C0D4NK/ZTZCiO/gsOMwKdImIdcYNGVs9mMFfTL0kPhl4WgPVvsNnwWE2o18M6IajWwDD+5kM/l8VtUn6qOdlDlTzBV0PNgtAmGgLQPgUr9n99waeS7DpoYoF5wQsdgPlq2liwRF2ox+XxayUP2q7CwF9cZWqFhxiMfpzU8pSAynti3408HxKNQuAQbMHPYl+1PeooZoFF4UtzHFkMuIt+OQU/v+jmR+Y/cbQ5/8FNU+4omuSTvLoFrw3CBCA63WO+H+czwKs9gCr0f9jUDaKBX8mz/z/o7wJzP6aXfH/b3Yp0Rb8nT3//9vYfLDah+ZB/z/4JqBY8AJswYy5/3/WtIE1fMuv/f8vqwTiImaDf8dk3IXQLXhsGcoJy8l/Fyz+/z6xCKz+iXXo/8+BSfDyCOgSD4WPRl4eP4pqi36kl6WB2N/i8nLfReZsuSRqVQMvFbGVRcBSGKy3rLH0mUf8TJD6ezqekx4b+c0CsYE532a0Ehx4AACfsZM6qaBSugAAAABJRU5ErkJggg==`,'mittens-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABUElEQVR42t2Tv0tCcRTFX00PcpDKtlITCgWzIaKmhlqqf8BAdxsanBNqjZqDxmiPtlwbCgSpRbCIggilH06CgS2fjs/H8z212r13Oeeee7583/3eZxgDE4RZIfKrGpEa7tAYN7TjimhP8zxFW722VJ1d44kUCbZ44JNJT/uU1HuSUtM8C4cMzngjYMt+Xjn3GC54wW/jCd45NXTmoathnwbLBC0cZJUv9lzqER+G7pZxldLWbZusK5sWTrvUbeg2JMizRIFLZUEoz5xLzfQYrHJUH3eirHXPrK+BWQ2hxLiyJDTzj4Fh7nhsT42A0C1DfxsWxTcctim20MeA2VoLQozoiWDUaRgTS6oastbD7Bh2qKpUZlcvDj7H4BNLkaMsXFWXbchxQJ1pKhyT7TFkVa1Irasr1zI08MY3pmMwxbzRaO3qmifjnkHGu9TYIPzMPy8xYwtRW5ANAAAAAElFTkSuQmCC`,'mug-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC7klEQVR42rWVTWgTQRTHowetR0966NGDF8VWUPEDq6AVpbZiD/WggoiprQU/EC09VKkHRfAQhGK10YOiOQiNBxVtsjbStE1222Y/0uxukk3c7G4/slsoaCzRPmdSE4pJk63Ggf9hZ5n/b96892YsliKDV5ObRUU/J6jJDlHVrwiqYeW15BlR0xt5zTgqajM16HuHqM3uFzXjoqDpdovZMTFpbBFUPcorRhOvGnsFRT8kKsl6QTFOYSgybMFQUTVuYoUmkwclSaowDQCAVbyqP0CQAbSzXkFJtiHQPlmW11nKPcSEXikqRh06sna068eW/zlwZOUzs21am7Jvs8+/OZBeiFsB1FasKMSb96Ts1R2pp1XTafcxWJAufAWttRcSbZUrAny3V9em7FWA9cPXmAVAeqSRxHPzfTW5ud96ZMqYIKQKws82BT/YHkad1wNxd9dcLPDKkKT3cazYuGMmPPg8HqMduiy8/hYPO2cX//WHRgXZRomJXcUBPm6jm2Qgq2EuDKiaTAtDChq7fMxuN0n3uEm2rxQAVRRMKNPmAZ9pej0ySy01Xg4QUmbgsu8enPS0ASEx5gBuP3ccmxF+2to/zGwtBrgbeAZ1A80ZnR68AZQcLw0gSLphEcA2FcvBuwiZM8+qc7S7fAB89lf993PmJzyXwBMLlg/Qw/XlRWAdvg1MQvt3QCChQL2nJQ+A1cM5SySZYmszAJI9XywCG+PIMz/rbQdWmSwO8Hq965DZHOoDdrEf8gE4wQ2e1oIR3Bl7UrrRCIrpRIY//+yDIVbMLMTVUsgcC/cEjY4wAwh/6Vr2mnBT9HaCZLpdJDOVBXjGFqsEdy6umLdhPzh4Al6EPoJT9IIrSsOYLOciIAVpZ+kLj+KOIPOFLITkY6buIVpSo6avaxTJNfeSSMYjCeCV5LLmTEyNMNGpDSt6E24BrEYgMVNhFAufRjkYQkkfCUZywkVAMtHDf/2yuSjmZTaCQjsPytNpjuPWFFr7C0QLiOTnpHIwAAAAAElFTkSuQmCC`,'mug-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABuElEQVR42o2T30tTYRjHT9uSGgxMNChhbvNCSTBLchdRNByCKEKGUtSNlBbELoLWnEU/5oJuWkHD8EJY3UjBdpNUigZ1kRdBN/0D/Sefvh5P58fOhnufi/N9z/t5H573+WEYrsVhrvGUAjkyLEhfIS2b4RPthn8xTpUhBhgmxZiwWV1a4Doxo9EixAN5qlFkmiNGa0shnWKOm62g7bzmo2lLxHhpqhLRZniFET32stRtfnOJzyToZ4sOP3qUXjZ1fEYeE9zXhWfckEpILfoukFdeVpvaphudVDZ+cLbOQRcBW1ed33dYpk8P8+AKZIM1e/fYOagSle8/blylWifAXXLWftQ5qinTRR45OBFlI2Kqt1yoD8aPh/nFlL6d/GXwYHxI/0KmypKpx1M+/BtdljqkWpzw4nt5eeHBC5QtNcXuXjrd+BsV+itf/uOclMeIfbrChBfvVW/EKXPe2s/znKRa7BjdnNaQfFBINXdJ+nnPT+7ZLXyVh7zinVw8URGPa2RK9T0TVAg9Dfu0TUMT9/+O6QVZLqqijiW5xQ7pxv0eVJYqGm3H8nwn3HyezrFtzdO+1cg6p/8Au9FtAvZp8uIAAAAASUVORK5CYII=`,'reindeer-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACyUlEQVR42mNgwAL+bTPY+H+zsdzv7XrOf7fq94HE/m7TP/t/vwMLNvVANRegaur+bNUL/r/NnO/PNoODDLjAn60GUf+26a//u9UgG6jp+Z9t+kl/tusfBbI7QJph6v7v1OP+u12/Aih+/s92g4S/2wzu/N1uUPp3m95SIM5kwAf+b9M3/LtVLx+oqQCB9cuB9EWg70T+r7LkBLkcaFAVWB0S/r9Vz5yBXAB0YRbQ+6l/tuv5AS1sBInd9XWRY6AUtLhI2bQ6SX3o95bfvTBK+/WyON0PKxP0PqyJNHx0z8v57QN3d0mKLPjPwMDY4iSVsyRa52Ovj+r/2aFa/5fF6P1fHqO/6qSvnSIDNcCySGMRkKEwvDRW352BmmBFjJ4RsgXzEwwEqGrBshjdAJpasDRGL5/WPugly4ImF3HdFkepBa2OkjMm+ynXAl06B2jAAiz4DlkWdLgI8rc6ST6Y6qd0aEWcwf+VQIxsEC5MUhD1+ivLAjV92Vvg+H91ghH1LVgWqasB0rQty5oow0G43UWqo8VNSpYkC2B4VoASVkORxYHB+hGIf7c5Si5pdZA2wGvBkmg9CxSDApX/zwlR/z83ROPb8mi9DTA8J1j1GUxNm7PkOaAF/2G4xVmyCLvrY/V8gRrewTTODlb/3wbR9LfVUSoJWe2qRENRoJqfsKKizVlCC6juLNgCJ8l2HOlb7wTU8BsLwnUyQd4GYaAGeRzqV4MtiNHrbnWWcAQ7xEnydbuDhAJOC4Cl4m1QiQnitzpLbYG6yA6Heg+QBUuidS8B1TwHFuO/cKlF9sENGB9oQQQkXCU6sKlvaGBgArr+IVDPvzYnqXfAuEgnUASgWtBnKcMJtOAT0IKLeMqlBpAvJvurtBNRxqBaAPGF5EJIMMlIY7UgylAeqOfvsljduWRaIOUKsqDNWSoZty90dwL1vVwVGsqMSw0ApP/2buugcO4AAAAASUVORK5CYII=`,'reindeer-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABoklEQVR42pWTyytEURzHr0cUKcprZYHk0WxYyGyIQklSZKEkJVIWmjImZeGRNykSeaSU546FV57DMKQoO+WR2PgfPn7zcOfOuGP4nbrn3u/5nN/9Pc5RFNVYIJMKzIRxolFHMJJPP8FcKFqjkiOGeJQN77QTJ0o4DXzQJfoKy/Qp3kY6VVQ7R5PDFzN0u7+ryVP0jSCBBnhlmDeZ95lVfjce2JOY28ihhkPsgXCD+I6lhAJsdJCsBDJXFbggQfmLufGzv8FR7PwHz3JVQxenkHWfcUSnf7ycNe6pI4NkdYT7x4OYZ4JJin+s6Mcup8XEvI5+K05SdHHnPKcqifQ6vFPEtuSS642baZVnJC9qsttsinJJPTHS42tNZ+UYLRIh/g5l0cKpO1mbaItM8UkSS2R68HOiGeeJURrZcpxzp2qSWtVyzLRcjl1CPbhVYh8VXzZSWVXVeA5I4FnuwBWx2sitrlTl8mVLtCGqvkGa/NmKwTvRb7xI/jGBUdVLGWSMFt8yfuPBUoEyelQ9BLt0vNcXv+KOZudbj2zY0axYuPHu7Be+GFWSBjcIXgAAAABJRU5ErkJggg==`,'sale-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACuElEQVR42t2V/UtTURjH92M/RH9D/QmC+IKKE/UO0c05t+sIUkidIKkz+rUy8uW3XpQMIqKQfouSTM0Ck4ih2XwJ07LEt93N3WWb25z3XpNv5xy3uVbhFQ2iAw/3nOd57vdzzvMc7tVg+sIpjNu1MQvruJlwYSFksxmSzQalshLbVivks9XwPe7F+oMeKFVVzEdjUq2NzdnaYt5M1MKk/aQGzmY9nOdbYhbWFX6lAMViQbC9A+7xCXgcoxAm38M7OASxf5DNPY4xuN86Ebraugfg+e+JWsRKNMmDiK95evsg9j5FoLMLgnMKy26RnSDQdQsb125AqqvDsuCF8G4SgZudEPv6IT4bwDbPb2v2GxSwQY6+OvsJKwvLTFiYmEbE3oyVpVXm22psYj65pob4XHDNzGHrXIM6QNBqFd3PXyDY2g7vwBA7+laTHWvDI1jveYhv9+7D9+gJ89GY9+UwKVMb1l69hlxdre4EtAeRhkaEL7fE60stBkj0hVrbINXX767VlijW5EQh/5270RItIdB9+6dY3A4DoA3ebfJ1hNrajx7AytFyBeGLl34vfhSAfe0ggGBpKcImU/zl2FyuqIDE83ulI3l+YsGyMvWAxawsLOblYSk/n4n4SkowlpIChYiLxcUQOI75I+RzMpWWxtbUrxown5HBAHJ0p/O5uVjQarGu1/8CmMvOjuepBoRIiVwFBWx3dNczmZkIkRJ9IZBkgDM1Fa7oWjXAS4To1/RjTg58RHA6PZ2J02cygOYcuMku8tIc6cMqOQkty4bRyAQEnQ5+gwEfSIyWhjZ4Njpn/fqnrun/CSB/rB1yq3b+CkAymUag1R6DxXKczN8cGYA8JdlkOp2cpxiNZ2jsUAAiPIqiohN/yqUxmnMgwCbHdYc4zhHR63mNyqEYDLWK2bwpl5d/To79AHRx9s2XPdUGAAAAAElFTkSuQmCC`,'sale-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABfklEQVR42r2TzyvDcRjHVya1ZcmPTGoThSTl4mAsP3Zw282UhYOLcnHAiWxiG0l+leVHZgdZKTUMKb/K2clR+SOcHF4eH19rs+/MQZ5PfXqed6/v8/18nuf5GAzKKOGBWHKd8UYiJX6g3KCBLUpIMK+iOaJMcMET50yyT0ipM6J8UK1fH9UzzwqDdHEjuYwckcct97gYYF3wJkOqKbyOZwHaCOLllSH8dHLNCw16+J78eoQxyuhlgWMC9GFlVFaEHZ3ssjuoU1ERjxQrrwanOrservlWddVLKpJKBp6PPelXYZerVmLLjlcznRZ70qKfDpNp+oVsZpNx8d30yD6s9ABhfPr4AaWYxY8Skf1Q6bHs2R3SR48UcYNdzBp+hy8bbpR1RT8nUkh37ux+tmQ+gliks35O5dRemc2w+H9Qmf/CZXC3cf0KlxKusoyNRSloYQ6cdimiU9McMv0WfbyWECaWWPvoa4o+JU/SxCyN3wc4Li3q1rlmhzz7OAWf0Tts/2VuJuX2/AAAAABJRU5ErkJggg==`,'santa-claus-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACVElEQVR42q1UPW/TUBT10I0JNhALLA5qHAn+AEEgwQRrJ6QiVYRISEyIhYGQEVCYABUIcVv1i4GUAgMixCGltSFKJSoBogQQHdJ81PFHoANwuffJKQnxK07NlY5yc33uOfe952dBcIncvtCBbCA4rojSXFaU3uFvSQlIihIIpnIB6RLWBrNi/yFFDO15Hg73tfoajcZe0zQfIT4YhnGyS/iFJG3H5hEU/IUAj/iB+EIDrDx+8h7FwYFRLpe3dRggMd2DcBdKqRHgGuTE0Dk/4ohvi6fPnOVuERIq/gyCCYEXdFg+p4ecGIxwDb6mZ26X7sngB58nJsddxS3L6m87GF8grS6Der2+u1arfa9Wq+AHpEFarqvQdf0yXhIwll+C8fZZb8Ae6iUN7hng0iK0RHvpIdiFMYbV/F34+PTmxv8WqLY6l/xTwx5neyKeDcaunYejhw/C4MBxODVwAtYWUlCbT7GcaseOhGEicWErBrOsSZ2+Aroqs3wxnQDz9SgzeXX/KqvRszcz1x2DWe8G1ieta0sI5vwdBrdn1OPZwFyrgF2c6hAw8reg8uAiA+UdBsilHu8GBEMHa2UJrOU8g74wumFAeatOHOK23QG+ARKGeJfHwAnr2jSD4UzLwRDXoNls7kTC+t9NqqpCLBaDYrEIhUIB4vE4aJrmJr5OGsJmgaRht8lkWYZoNMpAOWf6YeFfgd/vHUjMbOEblKFewUsAQB+Sb3gVJy71CL0GvhFRFLA3EbeJI/gJPLRdKJRE/GwTpjxJz4T/FSi23zmbDOW99v8GCHDj7A5n4o0AAAAASUVORK5CYII=`,'santa-claus-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABkklEQVR42oWTyyuEYRTGv9xZYDJYIJI0K9eSsCArRQoL95pImYU0JQtZupSkFGU5xMIlhVKuk3uuC2XFhj/k52G+xsz0feO8m/Oc85zznve85xiGKSQzyjGPXHHDHot4aaOSjF9fljwPTBlBchm3DFHDAL1CGSK2K2BRgdc6b7TKuk1RgJyrjBUcsM4wfUaEkK4AD4mckRMw7CjvJdWGpbBPP8v46Q7AAnZJpcqGnMlJuKGTEcNWKMQXCrN5VuXHtsevh1b+0euYNaKKKh/6A05euOfTJveHGvxOSWj0OC1c2mTe1O2+cJNJp5pVNSxfmoM5NmiJTl+nnEbmpXnpwsWafteeblnMIaVW9AUGTTTGKyum3qCZKbSiJzOv7j/qfMni50naLT79qRU9BE2LuGX7qzL04QnqzeSRRNrPGJuWembC6Q6VkR50nnOhFekxcRxHuCLfX69Zdlr0JUmNdFs1rI47aiNsxXpyp90gZWsNlkg1UTwT2iFX9Nlr0lB5SKCDU9zEGP8JsVrwFyZJsfZ/A4NiXEmb6qi5AAAAAElFTkSuQmCC`,'shopping-bag-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADAklEQVR42rWUS0wTURSGWbhy5caVcQ80lGFBlJIWQkIkBBMUlLa0paEtlCgqKBJBTVt8sJCIhCACkSqUlwhKC7aihQJijVNApRBEjfERQdTEBwlk5t7j7QyJsABpgUlO5s6/ON/9zzlzgoLWeEx01h6TR+ck8dPo0UznDxwcU1mjZ5VW0UeVVVSl7ozdERToYxrVRZo8Wsbo0boMtFp/ajD1t5HOxEVuuUtlizpHAJ8JiI7ti90WGMCjcxDAsO+stEafIcnmDc/VJ4iGLozpdylte0OIBoquKFmAAO03I63J4AGidqVNVG+gs7YTfb7Eo0ta0odJXAkUsFDi0SQsJbKrukSlnD6inTGN6KScbhPdU9iiq9ed9LtEsntGLK6di4trncxJxjOHk179Skx0eVX7fryVJXzwnaf0Bxa/SPdPLOlzNXmRfeNCoXZIILg8SVHq6YiInasC5iQS95/4eFhMSQFGKv1/pKXBBEXBeHg4PAoN5c5eirqxKuBrTMwoB0hNDRhAwuw3gC08BoxsiwCs8TTgvgZgi/OByczYJMChfwBUUwrwyQnYeRsYlYLXZRsALJaRm5YbgDUU8A7OnwQ8YCEO8ngH6XLA1hr+mwD9BjANBsBTnYBaKgDdqQTUdI130N8I+GE9Vyp43wuo8zowCrn/APbuRUC2KkBtlQDvHMCaCgEPWoDJ1gC8sXOlQuYywN21xOEGmozuVwNqrgDca+ZA2N0G6BZJ3N8ATI52RQ/I7IM7LMx/ALbVAnZZAF4/APy0FVBHFe8mK3MFwBe0UOhHiR6TxD11AFM9fJOHW4DRa3gQAXIg+83ASsR2XALsbefKgSzlnBNfU/FQMz89Bbl8L7rrgFEGMEULZ/XAlBYDW5THj2n+EcBPmrk3I5MBI5dxA8AezyGA9I3/yajxKu/AV/sM5RasiqPZ/Krw3ZjcfmuWXW72mtvUJRBAd3AwjPKTZN7Udf2MzL+TAF4SF/aQEHhBUU2rAmbFYrMPsJCcvG6AgyT1LvsXCMyxPOdfNpvdAvdbAuwAAAAASUVORK5CYII=`,'shopping-bag-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAABn0lEQVR42o2TS0hbQRSG44MWFz5Aob5AxGLpQnfqwoKKRETRFgoVLHTRVRdNxYUgKERDEwQRFTeKoARUMA9fjSmVogZrFyoYCahFxJ1diZuCdCFff1pRL829OsP9Z4b5zj1nzpyx2QyNNpYIEmKLBfUGm1WjEjuTfKefCSJ4GOelOfyYMVaoFbrJIMs0ScPmeCs9fKRF6iEgowzpGJlm+FuBnbyRdgkc4ZF0iPx46Dv8fGNHR9yQbnPIHosc8UMaxofDiM/H9fcEtzSob864EbwDD5jgJNw4vhMni2Hl3XMPnHLSpM85Jk9jBakWuBK3QLOSOcMuXqo0juIwx1/wk69EeUaM13zhQEmtMccL5HyKfd3mrsxOZJJD2V/cGz/2ZOZVAqv8VhF8oPf6qIXx/v6ebkV7QYnmTs4U96jOYhrMK05VK36m+aUCdqoQ1qgzx+20U0o61XxSXhJxyU8jLutrShF8TsfVKolca/whRczy9GpVjFsmIYua0Tz7ds3Qxzr1FrihIqPCH+ghRowbA8qJ77/+mUslwacnE/vH/QFB2ZDM6c4GwQAAAABJRU5ErkJggg==`,'shopping-bag2-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAC80lEQVR42q2VbUhTURjHrwol9KUP0bdetAik+hCSZGFloihqGaholpTp7pYLli/zJSVKtonOt9IUpzPNLA01i0yzFyxcLTKxdJqmWx+0IoheULer89+5t9SpW2yzC3/uuc9zzv93nudwuBRlzSMTuDtKeTcdpLwxTjJ+KyWlPan/8sjoMw5SmiEC0RsHCd1J3hNERkrCS1yZeTZv51/zPkoSF2AS30hiaqIZSsrfZ7e/o5R/g905qcJ/WTIr1oXkDETNdgPI4vdsz6mGMCcLeVIFT2eT6XjX+U3jqsxjk9qqPU5kh+sLhJ3s2JzYnKOMZua+oa1a+0/zsefiFE1zJEbaeNB/rIJztgCHa1K5sTmxOXaOSWyCyNciYLRDoOtvDF8JAFO6a3UWASNt9CdTQGB1KvIeyiwC2Bw7Z0n8jtWASZ0ZY51y0beZOdYDloq5mwZjzF4wjWKLVdkEYO6lw/CueH6x8YQH4L4OM+nB8zFD72Xo+0tsAww8oPFNu3x303nHMRvshumSmAVATxEMfTYCXMqScfpZhfkWDJQui2mGlCjtrsSUtYBd5QnIfaVY6D1plX6kAsytc2DaL4BpSIReWwmmJY3Lp6oqEPRYwYGsArD63p+/0HuR77xwYAOMtBc3npZHcXm2neoBpfUtYjWuSodKo8SXUdLnJ1mY9d2CmZAd0Ptvg/HQZsySN3fAxPTHQJH1Z9BT7I/e8kBomiLwc/DKnwouRQDRfmgqSoNnuwLdUhGQfArMi0Iu/2vIhkPuqw9F3+0wrgrX0iTEdFbgZdJRIPLgcsBTuX33YE6rc4XYfb8UNcJAwHsrWvLFiwBuZSnYXp8Dnw4FPgwrbQesyonHmgIRFLQfd8Fq+UFwrZWSiqKAkwHYKxfCWX4WLtcleDtYaTugsC4OXgoRqrLCMRntgfqMUPhcTYRaHAImdj8kxQJ4V6choTkDn9WZnL6+vqi2CNA+iteYAuwR62H5h9OVcmS4NWbCXnN2Leth6vkbQIYpPRfeieQAAAAASUVORK5CYII=`,'shopping-bag2-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABnUlEQVR42o2TzytEURTHZ9gwk9WQlV87FmaaeZRmI1liYWExM5JSMw0mRYqImixFIs2QDWXpR9lQJNNEeVNKLKxkY+Vv+DjvejMaM++Ne7r3nnvf+Z57v/d8n8NR0hjkCp0cN4w4Kjc2OMbLMBF8HLCH0z58nLQE51hhlWdG2SRuD8hJ3nvqlF8rFwvwZHMGzZwxT6iwDjHHCa3lg3vks599dukmTFQsTBcpYREQr+dveFxyR9CEQUrGPMBYp2WMcE6sGJDBJaMJKOyaAPFcZIoBuho7uBRrL+y2ME2C5t+IPwCZE0xZPIhut3TQzzV9/wAQJKjmO2BbeV6DXVkA9WJmkVjkjYTy/LitAId8/GRTOw3mXMWkPLqzHGCZHSMbEzSSJMYCTQzJqQ9iHhvSHImwl3iXqt8yI+s2Qxw2pJkVwi988Slzr+QeKMuBBsZw4xP/USr8Kl0TeaeoxmP5rIYUTD66VH1dAQ1x+CsDLpSONBG3xhpRK4Chpd/rnKiusUXETkvpEktSUwo4o9P21/VxWrzRQVaIWls2L/pv4+2Mg2hKkxMAAAAASUVORK5CYII=`,'sleigh-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACoElEQVR42mNgGCxgf5aXxOG80MAjJTELjpXHlJxJS+OiquEHMv3+H69I+H+yLh2Mj5XFTaaqD4AWfDxSHIWwoDzCirpBlOk351BeCNjwE9Upv6keB3vTApSBvvhyDBhMx8pi+6luwfooB4MNUQ4PNkY7ftwY5ZRDVcP3ZfgGH8gKfL4nK+D/vryw/8cqEv8BI/zC1axQHqIMuG1uzvfMzk7zsa2t3n0HBw7UFORbcjAn6P/J2jR4BMPw8aqkt/8ZGJjwGn5VXz/xmoHBn3eOjv+/uLr+/+js/PeFjU0zSO5Imq8cMNy/H69MxDAckVxjZ+K3wMBgPtCC/zALQPi9k9MXkNzBTL/4A1n+OA0H+6Iy8TFeC4CGL0C34JOLy1+IBf7dh3KD8Vpwojr5O8kWfAbiZzY2xvsz/CYcyiNowU+SLQDhdw4O764FuN4+F+///1RNKm5LgJF/pjhS5JmtbdsHJ6fvr+ztzxNlATL+6OL8/3J6BO6ILo1tBCaOnzD1T21sIkmyAIRfurvgtOBiUvATZLXAJF+DYcFjS8v/n5ydQRGME79xdvr/2gUTf0TT98LWNhVhgb7+dJAFVMSHQZlvSqCZ8GQ/E2uGq4aGWtcNDFYB6R0X7Mx/XrQz/wRig7GRwb7Lpkanr1iaXbtsZX4dG75qbnrmspnxmQsOlv/PuVjtuKinJwZy+BQf03lTfUy/opb5WX4vgDn3AukVkp8HqELan+FfAROb6mO2GmjBH4ZVoaHM/QEGAiC8N8P35d50n8swPrF4R6pXMFDf/91pPg0g/jRfcwug4e+m+pisZ5jqa7oWyPlPA/x1mreZLcM0b1OXqd5mM0B4hp/Zkhl+5othfGLxNF+zOTP9LZYCXT4PLOZrUjjN20aQLq0RAOuCwIEc+Y+JAAAAAElFTkSuQmCC`,'sleigh-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABhElEQVR42qWUvy9DURTHX7UUaUKrYtEB3ZqSiKGxSAQLISSEpCEqJAwGA5sQjCWRSInBJJJGiL6S+DmInzHWaMXkb/g4fa167WuTF953OPeeez/3nXvOeU9R/v9go5cFlgjiNAdMsk4LfgEOzAGDhDRbz5Y5oIojzc7TbfYWYTpxcoHFLLDJDZfcYjWzuZI9zjkmyplYn3FDOcNMiXookVkRRwQya9Vc4ckF9pmRvAwySwwrtfRlrTYSyQXUzGiFZuYNEZwWBuZo/51lvFHKCgFBCc4I7OPASxd2I1DKCZ9sM41NB0QY51DerlKUcrRlnVchmQkR1nnG+MItdgNvyrGapxaqVLojrRFeNd8a/pyQdIBP+mghrRlqNN8uHuwSllSz2ET9A1IlL4/EFanwtfRNggeexOZTgjvucdHPRDoeLMIPpL6CvDfyJL8MRiXxMUWSGBW9yxkv2sioD+K8SWovqUsCz7il93/kkH5y5pVL7qHSqjDEjk7LNGXN9Vqk4Q//lG9/CVipays5sQAAAABJRU5ErkJggg==`,'snow-globe-24-color.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEbklEQVR42q2UfUybRRzHOzdd8CULwxglYMyciybqRJxuOhnRuGR/bCyLYzpAEzM2ooyBMCbDl47XwGQkkjLe+pawOYq8wwJMa4GCY0A3Gl4y3tKWtgiFIaXtU8Dx9e5KC6STmMmTfHMvz93ne/e73x2Pt8YHyDbateKDnE6cRMpaIiPRGFEdp5Mkz+lEQQB/E+9hvvkR4U5OK+kgMDDprzlKnRT2PxtW9IlU8xqp338GY/CnzQScZtdKFlxwKmP1cl0rQf+AiPRVkbqUthc4rTidzl0bzuc/QgAFjtXJCKACq0xGr7CyskOAfQ35GB4UsV1w9zphN5TRfwVrGuhb4hNXAWk4xhsJpMTRHquDVSPGMzmx2HU9D5HKIvK/AdycGZx9mvyvgV0jPfBAuFWV4a1TxFjt4zeWVvszOKsBZssUAcw4jEh/tiIbT2RFMYMj8iKo7krBcRMOE4uWjjFAe8XTzUCniG4ytiW44DaLHne6O1EnPAGlvAST94zMxDgoxJbsaPjXCBCqKIKZ7MhuKAdnMzLR+fQ83AwGaj63mVSpLniXqh21+SFQFB1C2aUDaL5xlZiMIbT6EjaknULsH1XY01CI9Hah6+CdoZ3TiltXwUfbYjz6yo9h4nbmMrwgDEpxEHrLgtEt+xi/ZDlMjCY9dhQmwkfEZwZU9T3ksEevOkwcKcyhM/9Rl8FkF/8IBZnuljL4iDIF+rbv8VdvtkuT3ZkYbDwNqbwKsb8VY1PGl9hVdxkhJEwTIzQBalftZH5U+vbyDlrizlEDza9RsOpkMKlSMN2TBZ00AjrxKSZT0w+YUmey8FBtTI9AcHUhdtcXQNYtXJF5xUulZL/LwND09bvUgIbJMngZJJtYaGbf9MLsTk/0bPeA+rNXWJ/TgMoj8yt4CuLx/nUBxoaXVk9SmRrYDCLfFW8Ob0N/5fHFjqqz0LcmYKIziWlxz7OA/9OYem0LeqMDWF94dTpCr32Lg3mRCCv5jrUj6zLQ1Ve08lKa3bJouD58mq6wvzKEhYcOXHzPG3a/reh4YTPUUYEugP4mH62SIBi7fnTEnl4wkqrO+JM0bXcz0MrPFFADqt+Fh9Fbfhz3l3Yw7+eFrpi3mDln0ZBkKGHjJocqHBfMKTu5lOYBcBPy824GMpngyZyci4sCQRZqco+iMf8QZsP8YP30dZiDX4Wa/wH6qsIYSDt0C7ebRZgc72Vtw5gGFts0q9ttxlkAD37Cy0vzShPOx8Op1LQLKK+Qob6hlumOupNBlK0KNLfIXSu3cTNL9RnMTasP//tr+sned9T8KJsyKe5vp9qTzy6Y0+I4a3qcbSH5zOz95CgzrdtTYyyLSadnVinxhAlHA/euYRDQjcAXgX3bHk507rGAbjfw9mK+z7bi1A+H9u+otO5+Tvd/RBmURZkM7i1K8fWvFcw735X1EmEu+IiTX+I9L77wkVfuN3jsYuS6amvuOfiK+eTA006+vPL6r6d4qeFv8Hj8k4+Txs31N4i4xcv44ql/ANJwI00OA9vTAAAAAElFTkSuQmCC`,'snow-globe-24.png':`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACNElEQVR42o2TS0hUURzGr1rWOG3EskVBVIsCy8eMvcBFi1ZZ4bIJbTCTsDCKpLAiI0hKpE2EXpKiphkieik9FtWiSBMatcDRVVEREa3atP713XPujDOZNefPOfeec77v/z6OkzMI0sg9RnmrOckdIgScuQaF7GeCE6zyqVWspVsnUQr+Bi/hLj1WHx2GsIF2fRdxlQQL/oTP5zl7WEpT1tl5PtJgLLXwmMJcwiWOmO9qWTkoegcVvJaCd5pVOu/iXDa8ghc0U0aYceo5wxDFvOQiAQbp1X2UckZsbJZwizqtHjzEfQ7TJspeZSjIB1p9zHbcNHwhYxn4iCwklKk26S6WY2GG2coWg5ugyBI20c96bUOinBJko6pwXJSHXqCK7rLWaoV+m0pLaJSmK6rBOAO4vgxzkidU6zZFzCS5RCcNltAibeuI8T0Dd3klSo9CrWcbgz6hk4gl7KbTfMdoUvHC1DKlCitYiijTmlA1PJfOsiOd1Dh1bJZL0/QJFOIXn2mVlSl+kJT0GtwjVqZ7aJJ5xkK3CIs1PynRLl9k6xvPeKD/KGtIzdThAqep5L1H0K7AEIa01nKNUpbL+lHZ75ohLOOnAF/lknXBcynCPpawU7fHNANKdXl2cxzghsKdW2I05zbfgI7cf0g80xg+Ien8Z9j2sC/hpvE6mYdcVzap4eksj2tsm6nSdr/CVx7X29BDTM3yuI9SA9jl7w/5BJewo1z3O3kOpSbkPfLRvPz35A3B3znRTUNmNWt+AAAAAElFTkSuQmCC`},'svg':{'bug.svg':`
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
<div class="row" onclick="UICustomizerEvent('SettingsDialog','open')">
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
