//  3. - Understand the Hazards of Using Imperative Code

// tabs is an array of titles of each site open within the window
// tabs — Закриваємо третю вкладку у вікні відео та приєднуємося.
const Window = function(tabs) {
  this.tabs = tabs;
  // We keep a record of the array inside the object
  // Зберігаємо запис масиву всередині об'єкту
}

// When you join two windows into one window
// Коли ви поєднуєте два вікна в одне вікно
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
}

// When you open a new tab at the end
// Коли ви відкриваєте нову вкладку наприкінці
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  // Let's open a new tab for now
  // Давайте зараз відкриємо нову вкладку
  return this;
}

// When you close a tab
// Коли ви закриваєте вкладку
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index);
  // Get the tabs before the tab
  // Отримуємо вкладки перед вкладкою

  const tabAfterIndex = this.tabs.splice(1);    //  cange this line, argument
  // Get the tabs after the tab
  // Отримуємо вкладки після вкладки
  console.log("tabClose => tabAfterIndex ", tabAfterIndex );

  this.tabs = tabsBeforeIndex.concat(tabAfterIndex);
  // Join them together
  // Об'єднуємо їх разом

  // Only change code above this line

  return this;
}


// Let's create three browser windows
// Створимо три вікна браузера

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
// Your mailbox, drive, and other work sites
// Ваша поштова скринька, диск та інші робочі сайти

const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
// Social sites
// Соціальні сайти

const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);
// Entertainment sites
// Розважальні сайти

// ----------------------------------------------------------
// Now perform the tab opening, closing, and other operations
// Тепер виконуємо відкриття, закриття та інші операції вкладки

const finalTabs = socialWindow
    .tabOpen()                          // Відкриття нової вкладки для котячих мемов
    .join(videoWindow.tabClose(2))      // Закриваємо третю вкладку у вікні відео та приєднуємося
    .join(workWindow.tabClose(1)).tabOpen();
    //  Закриваємо другу вкладку у вікні работа та приєднуємося
    // Відкриття нової вкладки для котячих мемов




// console.log( workWindow );
// console.log( socialWindow );
// console.log( videoWindow );
console.log( "----------------------------" );
console.log( finalTabs );

