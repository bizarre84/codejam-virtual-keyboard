const Keyboard = {
  elements: {
    wrap: null,
    textarea: null,
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
  },

  properties: {
    value: "",
    capsLock: false
  },

  init() {
    this.elements.wrap = document.createElement("div");
    this.elements.textarea = document.createElement("textarea");
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    this.elements.wrap.classList.add("wrap");
    this.elements.textarea.classList.add("textarea");
    this.elements.textarea.setAttribute("cols", "100");
    this.elements.textarea.setAttribute("rows", "10");
    this.elements.main.classList.add("keyboard");
    this.elements.keysContainer.classList.add("keys");

    this.elements.keysContainer.appendChild(this._createKeys(getCookie("lang")));

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".key");

    document.body.append(this.elements.wrap);
    this.elements.wrap.append(this.elements.textarea);
    this.elements.wrap.append(this.elements.main);
    this.elements.main.append(this.elements.keysContainer);

    
    document.querySelectorAll(".textarea").forEach(element => {
      element.addEventListener("focus", () => {
          this.input(element.value, currentValue => {
              element.value = currentValue;
          });
      });
    });
    
    
  },

  _createKeys(cookie) {
    let objKeys = 
    [ 
       { en: '`', capsEn: '~', ru: 'ё', capsRu: 'Ё'}
      ,{ en: '1', capsEn: '!', ru: '1', capsRu: '!'}
      ,{ en: '2', capsEn: '@', ru: '2', capsRu: '\"'}
      ,{ en: '3', capsEn: '#', ru: '3', capsRu: '№'}
      ,{ en: '4', capsEn: '$', ru: '4', capsRu: ';'}
      ,{ en: '5', capsEn: '%', ru: '5', capsRu: '%'}
      ,{ en: '6', capsEn: '^', ru: '6', capsRu: ':'}
      ,{ en: '7', capsEn: '&', ru: '7', capsRu: '?'}
      ,{ en: '8', capsEn: '*', ru: '8', capsRu: '*'}
      ,{ en: '9', capsEn: '(', ru: '9', capsRu: '('}
      ,{ en: '0', capsEn: ')', ru: '0', capsRu: ')'}
      ,{ en: '-', capsEn: '_', ru: '-', capsRu: '_'}
      ,{ en: '=', capsEn: '+', ru: '=', capsRu: '+'}
      ,{ en: 'Backspace', capsEn: 'Backspace', ru: 'Backspace', capsRu: 'Backspace'}
      ,{ en: 'Tab', capsEn: 'Tab', ru: 'Tab', capsRu: 'Tab'}
      ,{ en: 'q', capsEn: 'Q', ru: 'й', capsRu: 'Й'}
      ,{ en: 'w', capsEn: 'W', ru: 'ц', capsRu: 'Ц'}
      ,{ en: 'e', capsEn: 'E', ru: 'у', capsRu: 'У'}
      ,{ en: 'r', capsEn: 'R', ru: 'к', capsRu: 'К'}
      ,{ en: 't', capsEn: 'T', ru: 'е', capsRu: 'Е'}
      ,{ en: 'y', capsEn: 'Y', ru: 'н', capsRu: 'Н'}
      ,{ en: 'u', capsEn: 'U', ru: 'г', capsRu: 'Г'}
      ,{ en: 'i', capsEn: 'I', ru: 'ш', capsRu: 'Ш'}
      ,{ en: 'o', capsEn: 'O', ru: 'щ', capsRu: 'Щ'}
      ,{ en: 'p', capsEn: 'P', ru: 'з', capsRu: 'З'}
      ,{ en: '[', capsEn: '{', ru: 'х', capsRu: 'Х'}
      ,{ en: ']', capsEn: '}', ru: 'ъ', capsRu: 'Ъ'}
      ,{ en: '\\', capsEn: '|', ru: '\\', capsRu: '/'}
      ,{ en: 'Caps Lock', capsEn: 'CAPS LOCK', ru: 'Caps Lock', capsRu: 'CAPS LOCK'}
      ,{ en: 'a', capsEn: 'A', ru: 'ф', capsRu: 'Ф'}
      ,{ en: 's', capsEn: 'S', ru: 'ы', capsRu: 'Ы'}
      ,{ en: 'd', capsEn: 'D', ru: 'в', capsRu: 'В'}
      ,{ en: 'f', capsEn: 'F', ru: 'а', capsRu: 'А'}
      ,{ en: 'g', capsEn: 'G', ru: 'п', capsRu: 'П'}
      ,{ en: 'h', capsEn: 'H', ru: 'р', capsRu: 'Р'}
      ,{ en: 'j', capsEn: 'J', ru: 'о', capsRu: 'О'}
      ,{ en: 'k', capsEn: 'K', ru: 'л', capsRu: 'Л'}
      ,{ en: 'l', capsEn: 'L', ru: 'д', capsRu: 'Д'}
      ,{ en: ';', capsEn: ':', ru: 'ж', capsRu: 'Ж'}
      ,{ en: '\'', capsEn: '"', ru: 'э', capsRu: 'Э'}
      ,{ en: 'Enter', capsEn: 'ENTER', ru: 'Enter', capsRu: 'ENTER'}
      ,{ en: 'Shift', capsEn: 'SHIFT', ru: 'Shift', capsRu: 'SHIFT'}
      ,{ en: 'z', capsEn: 'Z', ru: 'я', capsRu: 'Я'}
      ,{ en: 'x', capsEn: 'X', ru: 'ч', capsRu: 'Ч'}
      ,{ en: 'c', capsEn: 'C', ru: 'с', capsRu: 'С'}
      ,{ en: 'v', capsEn: 'V', ru: 'м', capsRu: 'М'}
      ,{ en: 'b', capsEn: 'B', ru: 'и', capsRu: 'И'}
      ,{ en: 'n', capsEn: 'N', ru: 'т', capsRu: 'Т'}
      ,{ en: 'm', capsEn: 'M', ru: 'ь', capsRu: 'Ь'}
      ,{ en: ',', capsEn: '<', ru: 'б', capsRu: 'Б'}
      ,{ en: '.', capsEn: '>', ru: 'ю', capsRu: 'Ю'}
      ,{ en: '/', capsEn: '?', ru: '.', capsRu: ','}
      ,{ en: 'Shift', capsEn: 'SHIFT', ru: 'Shift', capsRu: 'SHIFT'}
      ,{ en: 'Ctrl', capsEn: 'CTRL', ru: 'Ctrl', capsRu: 'CTRL'}
      ,{ en: 'Win', capsEn: 'WIN', ru: 'Win', capsRu: 'WIN'}
      ,{ en: 'Alt', capsEn: 'ALT', ru: 'Alt', capsRu: 'ALT'}
      ,{ en: 'Space', capsEn: 'SPACE', ru: 'Space', capsRu: 'SPACE'}
      ,{ en: 'Alt', capsEn: 'ALT', ru: 'Alt', capsRu: 'ALT'}
      ,{ en: 'Win', capsEn: 'WIN', ru: 'Win', capsRu: 'WIN'}
      ,{ en: 'Menu', capsEn: 'MENU', ru: 'Menu', capsRu: 'MENU'}
      ,{ en: 'Ctrl', capsEn: 'CTRL', ru: 'Ctrl', capsRu: 'CTRL'}
    ];
    
    const fragment = document.createDocumentFragment();
        let keyLayout = objKeys.map(a => a[cookie]);
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["Backspace", "\\", "Enter", "ShiftR"].indexOf(key) !== -1;

            keyElement.setAttribute("type", "button");
            keyElement.classList.add("key");

            switch (key) {
                case "Backspace":
                    keyElement.classList.add("wide");
                    keyElement.textContent = key
                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "Caps Lock":
                    keyElement.classList.add("wide", "activatable");
                    keyElement.textContent = key
                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("active", this.properties.capsLock);
                    });

                    break;

                case "Enter":
                    keyElement.classList.add("wide");
                    keyElement.textContent = key
                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "Space":
                    keyElement.classList.add("extra-wide");
                    keyElement.textContent = key
                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
            
        });

        return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
  },

  input(initialValue, oninput) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;

  },

};
document.addEventListener('DOMContentLoaded', function() {
  Keyboard.init();
  document.cookie = "lang=en";
  document.querySelector(".textarea").focus();
}, false);

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


