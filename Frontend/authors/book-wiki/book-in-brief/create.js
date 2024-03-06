const fs = require('fs');

let array = [
    'Жыціе Ефрасінні Полацкай',
    'Летописец вялікіх князёў літоўскіх',
    'Беларуска-літоўскі летапіс (1446) – урывак «Пахвала вялікаму князю Вітаўту»',
    'Прадмова да кнігі «Юдзіф» (урывак)',
    'Паэма «Песня пра зубра»',
    'Апавяданне «Шляхціц Завальня»',
    'Апавяданне «Плачка»',
    'Апавяданне «Белая Сарока»',
    'Балада «Свіцязянка»',
    'Паэма «Тарас на Парнасе»',
    'Верш «Санет»',
    'Верш «Маладыя гады»',
    'Верш «Жывеш не вечна, чалавек...»',
    'Верш «Плакала лета, зямлю пакідаючы...»',
    'Верш «А хто там ідзе?»',
    'Верш «Мая малітва»',
    'Верш «Жняя»',
    'Верш «Явар і каліна»',
    'Верш «Роднае слова»',
    'Паэма «Бандароўна»',
    'Паэма «Новая зямля»',
    'Верш «Мой хлеб надзённы»',
    'Верш «Завушніцы»',
    'Верш «Ты яшчэ толькі намёк на чалавека...»',
    'Верш «Не воблака, а проста аблачынка...»',
    'Верш «Любоў мая...»',
    'Верш «Ты пакліч мяне. Пазаві...»',
    'Верш «Чаму ніколі не баюся я...»',
    'Фарс-вадэвіль «Пінская шляхта»',
    'Апавяданне «На пыльнай дарозе»',
    'Аповесць «Непаўторная вясна»'
];

function sanitizeFilename(filename) {
    // This regular expression finds characters that are not allowed in filenames on various operating systems.
    let regex = /[<>:"/\\|?*\s]+/g; // Added \s to match any whitespace character
    let sanitizedFilename = filename.replace(regex, '_');
    return sanitizedFilename;
}


function createSanitizedFiles(array) {
    array.forEach((item, index) => {
        let sanitizedFilename = sanitizeFilename(item);
        fs.writeFile(`${sanitizedFilename}.txt`, item, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log(`File ${sanitizedFilename}.txt was saved!`);
        });
    });
}

// Call the function with your array
createSanitizedFiles(array);