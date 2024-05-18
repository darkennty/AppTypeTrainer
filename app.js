const appTypeTrainer = (elemID) => {
    const wrapper = document.getElementById(elemID);
    const menuContainer = document.createElement('div');

    wrapper.append(menuContainer);

    const mainMenuH1 = document.createElement('h1');
    mainMenuH1.append("Тренажёр слепой печати");
    menuContainer.append(mainMenuH1);

    const mainMenu = document.createElement('div');
    mainMenu.classList.add('menu');
    
    const mainForm = document.createElement('form');
    mainForm.setAttribute('action', '');
	mainForm.setAttribute('name', 'main');

    
    menuContainer.append(mainForm);
    
    const languageDiv = document.createElement('div');
    languageDiv.classList.add('selection');
    const languageLabel = document.createElement('label');
    languageLabel.append('Выберите язык:')
    
    const language = document.createElement('select');
    const langRU = document.createElement('option');
    langRU.append('Русский');
    const langEN = document.createElement('option');
    langEN.append('Английский');
    
    language.append(langRU, langEN);
    languageDiv.append(languageLabel, document.createElement('br'), language);
    mainMenu.append(languageDiv);
    menuContainer.append(mainMenu);
    
    
    
    const symbolSelection = document.createElement('div');
    symbolSelection.classList.add("symbols");
    mainMenu.append(symbolSelection);
    const symbolsLabel = document.createElement('label');
    symbolsLabel.append('Выберите символы:');
    
    const checkbox1 = document.createElement('input');
    checkbox1.setAttribute('type', 'checkbox');
    checkbox1.setAttribute('name', 'nameCheck');
    
    const checkboxes = document.createElement('div');
    checkboxes.classList.add('checkboxes');
    checkboxes.classList.add('non-foreign');
    
    const checkbox2 = document.createElement('input');
    const checkbox3 = document.createElement('input');
    const checkbox4 = document.createElement('input');
    const checkbox5 = document.createElement('input');
    const checkbox6 = document.createElement('input');
    const checkbox7 = document.createElement('input');
    const checkbox8 = document.createElement('input');
    symbolSelection.append(symbolsLabel, document.createElement('br'), checkboxes);
    
    const checkbox1Div = document.createElement("div");
    const checkbox2Div = document.createElement("div");
    const checkbox3Div = document.createElement("div");
    const checkbox4Div = document.createElement("div");
    const checkbox5Div = document.createElement("div");
    const checkbox6Div = document.createElement("div");
    const checkbox7Div = document.createElement("div");
    const checkbox8Div = document.createElement("div");
    
    checkbox1Div.append(checkbox1, document.createElement("label"));
    checkbox2Div.append(checkbox2, document.createElement("label"));
    checkbox3Div.append(checkbox3, document.createElement("label"));
    checkbox4Div.append(checkbox4, document.createElement("label"));
    checkbox5Div.append(checkbox5, document.createElement("label"));
    checkbox6Div.append(checkbox6, document.createElement("label"));
    checkbox7Div.append(checkbox7, document.createElement("label"));
    checkbox8Div.append(checkbox8, document.createElement("label"));
    
    checkboxes.append(checkbox1Div, checkbox2Div, checkbox3Div, checkbox4Div, checkbox5Div, checkbox6Div, checkbox7Div, checkbox8Div)
    
    const boxes = document.querySelectorAll(`.checkboxes input`);
    const labels = document.querySelectorAll(`.checkboxes label`)
    
    for (let i = 1; i <= boxes.length; i ++) {
        const checkbox = boxes[i-1];
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'nameCheck');
        checkbox.setAttribute('id', `cb_${i}`);
    }

    for (let i = 1; i <= labels.length; i ++) {
        const label = labels[i-1];
        label.setAttribute("for", `cb_${i}`);  
    }
    
    language.addEventListener("change", function (event) {
        checkboxes.classList.toggle("non-foreign");
        checkboxes.classList.toggle("foreign");
    });
    
    
    const time = document.createElement('div');
    time.classList.add("radio");
    const timeLabel = document.createElement('label');
    timeLabel.append("Время тренировки:");
    
    const timeRadio = document.createElement('div');
    const timeRadioDiv1 = document.createElement('div');
    const timeRadioDiv2 = document.createElement('div');
    const timeRadioDiv3 = document.createElement('div');
    
    const timeRadioInput1 = document.createElement('input');
    const timeRadioInput2 = document.createElement('input');
    const timeRadioInput3 = document.createElement('input');
    
    const timeRadioLabel1 = document.createElement('label');
    timeRadioLabel1.append("1 мин");
    const timeRadioLabel2 = document.createElement('label');
    timeRadioLabel2.append("2 мин");
    const timeRadioLabel3 = document.createElement('label');
    timeRadioLabel3.append("3 мин");
    
    timeRadioDiv1.append(timeRadioInput1, timeRadioLabel1);
    timeRadioDiv2.append(timeRadioInput2, timeRadioLabel2);
    timeRadioDiv3.append(timeRadioInput3, timeRadioLabel3);
    
    timeRadio.append(timeRadioDiv1, timeRadioDiv2, timeRadioDiv3);
    time.append(timeLabel, document.createElement("br"), timeRadio);
    mainMenu.append(time);
    
    const radioBtns = document.querySelectorAll(`.radio input`);
    const radioLabels = document.querySelectorAll(`.radio div label`);
    
    for (let i = 1; i <= radioBtns.length; i++) {
        const radio = radioBtns[i - 1];
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'nameRadio');
        radio.setAttribute('id', `radio_${i}`);
    }

    for (let i = 1; i < radioLabels.length; i++) {
        const label = radioLabels[i - 1];
        label.setAttribute('for', `radio_${i}`);
    }


    timeRadio.addEventListener("change", function (event) {
        for (let btn of radioBtns) {
            if (btn.checked == true) {
                btn.classList.add('checked');
            } else {
                btn.classList.remove('checked');
            }
        }
    }, {"once": true});
    
    const startButton = document.createElement('button');
    startButton.append("Начать тренировку");
    startButton.setAttribute("type", "submit");
    
    
    symbolSelection.addEventListener("change", function (event) {
        for (let checkbox of boxes) {
            if (checkbox.checked == true) {
                checkbox.classList.add('checked');
            } else {
                checkbox.classList.remove('checked');
            }
        }
    });
    
    mainForm.append(mainMenu);
    mainForm.append(startButton);
    
    mainForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let flag1 = false;
        let flag2 = false;
        const cbCheck = document.querySelectorAll('[type="checkbox"].checked');
        if (checkboxes.nextElementSibling) {
            checkboxes.nextElementSibling.remove();
        }
        if (cbCheck.length != 0) {
            flag1 = true;
        } else {
            console.log(checkboxes.nextElementSibling);
            checkboxes.insertAdjacentHTML(
                "afterend",
                `<div class="error">
                Выберите как минимум одно поле!
                </div>`
            );
        }
        const radioCheck = document.querySelectorAll('[type="radio"].checked');

        if (timeRadio.nextElementSibling) {
            timeRadio.nextElementSibling.remove();
        }

        if (radioCheck.length != 0) {
            flag2 = true;
        } else {
            console.log(timeRadio.nextElementSibling);

            timeRadio.insertAdjacentHTML(
                "afterend",
                `<div class="error">
                Выберите время!
                </div>`
            );
        }

        if (flag1 && flag2) {
            drawGame();
        }
    });
    
    const drawGame = () => {
        menuContainer.style.display = "none";

        const playContainer = document.createElement('div');
        wrapper.append(playContainer);

        // const colors = ["red", "yellow", "green", "deepskyblue", "purple"];
    
        const ru_1 = ['в', 'а', 'о', 'л', ' '];
        const ru_2 = ['ф', 'ы', 'д', 'ж', ' '];
        const ru_3 = ['м', 'и', 'т', 'ь', ' '];
        const ru_4 = ['е', 'п', 'н', 'р', ' '];
        const ru_5 = ['у', 'к', 'г', 'ш', ' '];
        const ru_6 = ['ч', 'с', 'б', 'ю', ' '];
        const ru_7 = ['й', 'ц', 'щ', 'з', ' '];
        const ru_8 = ['я', 'э', 'х', 'ъ', ' '];
    
        const en_1 = ['d', 'f', 'j', 'k', ' '];
        const en_2 = ['a', 's', 'l', ';', ' '];
        const en_3 = ['v', 'b', 'n', 'm', ' '];
        const en_4 = ['t', 'g', 'y', 'h', ' '];
        const en_5 = ['e', 'r', 'u', 'i', ' '];
        const en_6 = ['q', 'w', 'o', 'p', ' '];
        const en_7 = ['x', 'c', ',', '.', ' '];
        const en_8 = ['z', '!', '?', '/', ' '];
    

        const langSelect = document.querySelector('select');
        const selectedOptionIndex = langSelect.selectedIndex;
        let symbols = new Array();

        for (let box of boxes) {
            let sth;
            if (langSelect.options[selectedOptionIndex].text == "Русский") {
                if (box.checked === true) {
                    switch (box.id) {
                        case "cb_1" :
                            sth = ru_1;
                            break;

                        case "cb_2" :
                            sth = ru_2;
                            break;

                        case "cb_3" :
                            sth = ru_3;
                            break;

                        case "cb_4" :
                            sth = ru_4;
                            break;

                        case "cb_5" :
                            sth = ru_5;
                            break;

                        case "cb_6" :
                            sth = ru_6;
                            break;

                        case "cb_7" :
                            sth = ru_7;
                            break;

                        case "cb_8" :
                            sth = ru_8;
                            break;
                    }

                    for (let elem of sth) {
                        symbols.push(elem);
                    }
                }

            } else {
                if (box.checked === true) {
                    switch (box.id) {
                        case "cb_1" :
                            sth = en_1;
                            break;

                        case "cb_2" :
                            sth = en_2;
                            break;

                        case "cb_3" :
                            sth = en_3;
                            break;

                        case "cb_4" :
                            sth = en_4;
                            break;

                        case "cb_5" :
                            sth = en_5;
                            break;

                        case "cb_6" :
                            sth = en_6;
                            break;

                        case "cb_7" :
                            sth = en_7;
                            break;

                        case "cb_8" :
                            sth = en_8;
                            break;
                    }

                    for (let elem of sth) {
                        symbols.push(elem);
                    }
                }
            }
        }
    
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        const startTimeText = document.createElement('p');
        startTimeText.append(`Время: 00:00`);
        playContainer.append(startTimeText);
        
        const playDiv = document.createElement('div');
        playDiv.classList.add('play');
        playContainer.append(playDiv);
        
        const spaceDiv = document.createElement('div');
        spaceDiv.classList.add('space');
        const space = document.createElement('p');
        space.insertAdjacentHTML(
            "beforeend",
            `<span class="start">Нажмите Enter, </span>`
        );

        const stringDiv = document.createElement('div');
        stringDiv.classList.add('field');
        const string = document.createElement('p');
        string.insertAdjacentHTML(
            "beforeend",
            `<span class="start"> чтобы начать</span>`
        );
        spaceDiv.append(space);
        stringDiv.append(string);
        playDiv.append(spaceDiv, stringDiv);

        
        
        let doubleSpaceCheck = false;
        
        const enterFunc = (event) => {
            if (event.code == "Enter") {
                
                const del = document.querySelectorAll('.start');
                for (let elem of del) {
                    elem.remove();
                }

                space.insertAdjacentHTML(
                    "beforeend",
                    `<span class="start">"Shift + R" - начать заново</span>`
                );
                spaceDiv.style.textAlign = "center";
                spaceDiv.append(space);
                
                let rand;
                for (let index = 0; index < 20; index++) {
                    rand = getRandomInt(symbols.length);
                    
                    if (index == 0) {
                        while (symbols[rand] == ' ') {
                            rand = getRandomInt(symbols.length);
                        };
                    }

                    if (symbols[rand] == ' ') {
                        if (doubleSpaceCheck) {
                            do {
                                rand = getRandomInt(symbols.length);
                            } while (symbols[rand] == ' ');
                            doubleSpaceCheck = false;
                        } else {
                            doubleSpaceCheck = true;
                        }
                    } else {
                        doubleSpaceCheck = false;
                    }
                    
                    string.insertAdjacentHTML(
                        "beforeend",
                        `<span class="symbol" id="${symbols[rand]}">${symbols[rand]}</span>`
                    ); // ${colors[rand]}
                }
                document.removeEventListener("keyup", enterFunc);
                document.addEventListener("keyup", type);
            }
        }

        document.addEventListener("keyup", enterFunc);

        let startTime;
        let deadline;

        let flag = true;
        let symbolCount = 0;

        const type = (event) => {
            if (flag) {
                let elements = document.querySelectorAll(".symbol");

                if (event.key == elements[0].id) {
                    elements = document.querySelectorAll("[type='radio']");
                    if (elements[0].checked == true) {
                        deadline = 60;
                    } else if (elements[1].checked == true) {
                        deadline = 120;
                    } else {
                        deadline = 180;
                    }
                    startTime = Date.now();
                    
                    const interval = setInterval(() => {
                        playContainer.firstElementChild.remove();
                        let endTime = Date.now();
                        let finalTime = endTime - startTime;

                        const timeText = document.createElement('p');
                        finalTime = Math.floor(finalTime / 1000);

                        timeText.append(`Время: 0${parseInt(finalTime / 60)}`);
                        if (finalTime % 60 <= 9) {
                            timeText.append(`:0${finalTime % 60}`);
                        } else {
                            timeText.append(`:${finalTime % 60}`);
                        }

                        playContainer.prepend(timeText);
                        if (finalTime >= deadline) {
                            clearInterval(interval);

                            document.removeEventListener("keyup", type);

                            spaceDiv.classList.add("finish");
                            stringDiv.classList.add("finish");
                            const typingSpeed = symbolCount / (deadline / 60);
                            const countText = document.createElement('p');
                            countText.append(`Набрано символов: ${symbolCount} зн.`);
                            const speedText = document.createElement('p');
                            speedText.append(`Скорость печати: ${typingSpeed} зн/мин`);

                            playContainer.append(document.createElement('br'), countText, document.createElement('br'), speedText, document.createElement('br'));
                        }

                    }, 1000);
                    flag = false;
                }
            }

            let elements = document.querySelectorAll(".symbol");
            if (event.key == elements[0].id) {
                elements[0].remove();
                let rand = getRandomInt(symbols.length);

                if (symbols[rand] == ' ') {
                    if (doubleSpaceCheck) {
                        do {
                            rand = getRandomInt(symbols.length);
                        } while (symbols[rand] == ' ');
                        doubleSpaceCheck = false;
                    } else {
                        doubleSpaceCheck = true;
                    }
                } else {
                    doubleSpaceCheck = false;
                }

                string.insertAdjacentHTML(
                    "beforeend",
                    `<span class="symbol" id="${symbols[rand]}">${symbols[rand]}</span>`
                ); // ${colors[rand]}

                symbolCount += 1;
            }
        }


        const btnRepeat = document.createElement('button');
        btnRepeat.append("Начать заново");
        const btnMainMenu = document.createElement('button');
        btnMainMenu.append("Выйти в меню");
        
        playContainer.append(btnRepeat, btnMainMenu);

        btnRepeat.addEventListener("click" , function (event) {
            document.removeEventListener("keyup", type);
            document.removeEventListener("keyup", enterFunc);
            document.removeEventListener("keyup", restart);
            playContainer.remove();
            drawGame();
        });

        btnMainMenu.addEventListener("click" , function (event) {
            location.reload();
        });
        
        const restart = (event) => {
            if (event.code == 'KeyR' && (event.shiftKey)) {
                document.removeEventListener("keyup", restart);
                document.removeEventListener("keyup", type);
                document.removeEventListener("keyup", enterFunc);
                playContainer.remove();
                drawGame();
            }
        };

        document.addEventListener("keyup", restart);
    }
}