<h1>Katyusha - LSB Steganography</h1>

Katyusha - LSB Steganography — это веб-программа, реализующая метод LSB с изображениями. LSB (Least Significant Bit — «Наименее значимый бит») — это метод стеганографии, который заключается в выделении наименее значимых бит изображения-контейнера с последующей их заменой на биты сообщения таким образом, чтобы исходное изображение и стегоконтейнер не были различимы человеческому глазу. Применяется для передачи секретных сообщений.

<h2>Использование</h2>

Пример использования: https://youtu.be/lRH7YrugOjA

1. Скачайте из релиза (Releases) программу и запустите её в любом интернет-браузере.
2. В блоке "Encode Message" нажмите кнопку "Выберите файл" и выберите любое изображение формата "*.jpeg" или ".bmp", а затем в пустое поле введите Ваше сообщение (секретное послание).
3. Нажмите кнопку "Encode" и изображение с Вашим посланием  (стегоконтейнер) скачается на компьютер в формате "*.png".
4. Если Вы хотите передать сообщение: отправьте стегоконтейнер по сети другому пользователю любым способом, но учтите, что необходимо использовать сервисы и функции, которые при загрузке или передаче изображения не сжимают его, и целостность файла сохраняется полностью, до единого бита, в противном случае, скрытое сообщение извлечь не получится, так как биты перемешаются между собой. Т.е. отправлять изображение нужно именно в виде файла, а не в виде простой картинки.
5. Нажмите кнопку "Выберите файл" в блоке "Decode Message", выберите Ваш только что скачанный файл, а затем нажмите кнопку "Decode", внизу появится скрытое сообщение (послание).

<h2>Как это работает?</h2>
<img src="https://github.com/emelyagr/Katyusha-LSB-Steganography/blob/main/Image%20composition.png">
<p>1 пиксель обычно равен 8/16/24 битам информации, которые содержат нули и единицы таким образом, что позволяют отобразить определённый цвет пикселя через палитру "RGB" (0–255: красного, зелёного, синего). То есть именно вот эта смесь пикселей каждого цвета (канала) создаёт определённый цвет. Например, жёлтый цвет содержит в себе 255 красного, 255 зелёного, и 0 синего. Есть и другие параметры записи цвета, например, жёлтый цвет в "HEX": #ffff00 (применяется в программировании). Или цветовая модель "HSV", в которой записывается цветовой тон (R, G, B), насыщенность и яркость (H: 60, S: 100, V: 100). Изображение состоит из множества пикселей и чем их больше, тем изображение чётче (качественнее) ("Image composition.png"). Соответственно небольшое изменение битов не будет заметно человеческому глазу, следовательно, их можно менять на скрытое послание. Больше пикселей изображения = больше скрытой информации. Чем больше размер скрываемого сообщения, тем ниже надёжность сокрытия. В некоторых способах изображение может заметно отличаться от исходного или просто качественного, это подразумевает слабую стойкость к простым атакам посредством просмотра изображения.</p>
<p>Самый широко распространённый метод стеганографии: "LSB" ("Least Significant Bit"; "Наименьший значащий бит" ("НЗБ")) — суть этого метода заключается в замене последних значащих битов в контейнере (изображения, аудио или видеозаписи) на биты скрываемого сообщения. Разница между пустым и заполненным контейнерами должна быть не ощутима для органов восприятия человека. На рисунке "Image composition.png" Вы можете увидеть, что представляет из себя замена наименее значащих битов (младших) на скрытое послание. С помощью "LSB" в изображение можно закодировать не только простое сообщение (слова), но и целые файлы других форматов (например видео, аудио, файлы форматов "*.txt", "*.pdf" и другие). Здесь важно отметить, что скрываемый файл по весу (размеру) должен быть меньше исходного изображения. Методы "LSB" являются неустойчивыми ко всем видам атак и могут быть использованы только при отсутствии шума в канале передачи данных, однако являются самыми популярными из-за простоты реализации. Также есть математические методы, выявляющие возможное наличие скрытого послания с определённым процентов вероятности, без выявления самого содержимого скрытого сообщения (Хи-квадрат, RS-анализ и др.). Некоторые люди любят записывать все свои пароли из огромного массива изображений на компьютере в одну не примечательную картинку, делать так конечно не рекомендуется, лучше спрятанного домашнего блокнотика ничего нет!</p>

<h2>Преимущества, недостатки и особенности</h2>

Преимущества программы:
1. Работоспособность.
2. Быстрая скорость шифрования (замены битов).
3. Отсутствие заимствованных библиотек (вся программа написана на чистом JavaScript коде, который довольно редко используется для стеганографии).
4. Файл формата "*.html", что позволяет легко его запускать в любом интернет-браузере, без страха выполнения вредоносного кода программы исполняемого файла.
5. Вся программа содержится в файле формата "*.html", включая "JavaScript" код и "CSS" стиль, что позволяет легко её использовать и делиться.
6. Кроссплатформенность (программу можно использовать на любом электронном устройстве, запустив её в интернет-браузере, а не в виде документа!).
7. Исходное изображение и стегоконтейнер не различимы для человеческого глаза.
8. Простой и приятный настраиваемый пользовательский интерфейс.
9. Простота, стиль и читабельность кода.

Недостатки программы:
1. Отсутствие возможности сокрытия файлов в изображении (за исключением кода файлов).
2. Отсутствие возможности создания стегоконтейнера из файла изначального формата "*.png".
3. Минимальная функциональность.

(С) Емельянов Григорий Андреевич. Все права защищены. Использование (копирование, сбор, обработка, хранение, распространение, предоставление и другие действия, и иное воспроизведение в какой бы то ни было форме) любых материалов, статей, книг, курсов, программных кодов, программ и всех содержащихся материалов (и информации) без полного указания автора и источников и/или разрешения автора запрещено. Все работы защищены ЦВЗ (цифровым водяным знаком).
