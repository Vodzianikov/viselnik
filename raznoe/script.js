// Загадать слово из массива слов [slovo, slovo, slovo]
// Сгенерировать span'ы с '_' согласно количеству букв в слове
// Должен быть инпут и кнопка
// в инпут нельзя вводить больше 1 символа
// На кнопку добавить обработчик события click
// Проверять букву пользователя на наличие буквы в слове
// Если совпадение НАШЛИ то заменить соотв.
// span с '_' на букву и очистить инпут

// если буква НЕ НАЙДЕНА то меняем изображение
// kartinka.src = `${counter}.png`
// очистить инпут

// Если каунтер равен 6 - програли
// если нет спанов с '_' - победа


const word = document.querySelector('.word');
const userInput = document.querySelector('#user-input');
const btn = document.querySelector('#btn-ok');
const imageWrapper = document.getElementsByClassName('wrapper')[0];

const words = ['apple', 'iphone', 'renault', 'spider', 'mazda', 'academy', 'city', 'house', 'airport', 'bmw'];

const secretWord = getRandomWord();
let counter = 1;
let countOf_ = secretWord.length;

console.log(secretWord);

function getRandomWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord.split('');
}

function updateInput() {
    userInput.value = '';
    userInput.focus();
}

function createSpans() {
    for (let i = 0; i < secretWord.length; i++) {
        const span = document.createElement('span');
        span.textContent = '_';
        span.classList.add('word_span');
        word.append(span);
    }
}

createSpans();

function btnHandler() {
    const spans = word.children;
    const userLetter = userInput.value;
    if (secretWord.includes(userLetter)) {
        secretWord.forEach((letter, ind) => {
            if (userLetter.toLocaleLowerCase() === letter.toLocaleLowerCase()) {
                spans[ind].textContent = userLetter;
                --countOf_;
            }
        });
        if (countOf_ === 0) {
            document.body.style.backgroundColor = 'green';
        }
    } else {
        ++counter;
        imageWrapper.children[0].src = `img/${counter}.png`;
        if (counter === 6) {
            document.body.style.backgroundColor = 'red';
            userInput.style.opacity = 0;
            btn.style.opacity = 0;
        }
    }
    updateInput();
}

btn.addEventListener('click', btnHandler);