<script>
        // Функция для получения данных изображения
        function getImageData(image) {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            return ctx.getImageData(0, 0, canvas.width, canvas.height);
        }

        // Функция для установки данных изображения и получения закодированного изображения
        function setImageData(imageData) {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.putImageData(imageData, 0, 0);
            return canvas.toDataURL();
        }

        // Функция для кодирования сообщения в изображение
        function encodeMessage() {
            const imageInput = document.getElementById('imageInput');
            const messageInput = document.getElementById('messageInput').value;
            const image = new Image();
            image.onload = () => {
                const imageData = getImageData(image);
                // Преобразование сообщения в двоичный формат
                const binaryMessage = new TextEncoder().encode(messageInput).reduce((acc, byte) => {
                    return acc + byte.toString(2).padStart(8, '0');
                }, '');
                let dataIndex = 0;
                // Вставка двоичного сообщения в изображение
                for (let i = 0; i < binaryMessage.length; i++) {
                    imageData.data[dataIndex] = (imageData.data[dataIndex] & 254) | parseInt(binaryMessage[i], 2);
                    dataIndex += 4;
                }
                // Добавление нуль-терминатора
                for (let i = 0; i < 8; i++) {
                    imageData.data[dataIndex] = (imageData.data[dataIndex] & 254);
                    dataIndex += 4;
                }
                const encodedImage = setImageData(imageData);
                // Создание ссылки для скачивания закодированного изображения
                const link = document.createElement('a');
                link.href = encodedImage;
                link.download = 'encoded-image.png';
                link.click();
            }
            image.src = URL.createObjectURL(imageInput.files[0]);
        }

        // Функция для декодирования сообщения из изображения
        function decodeMessage() {
            const encodedImageInput = document.getElementById('encodedImageInput');
            const image = new Image();
            image.onload = () => {
                const imageData = getImageData(image);
                let binaryMessage = '';
                // Извлечение двоичного сообщения из изображения
                for (let i = 0; i < imageData.data.length; i += 4) {
                    binaryMessage += (imageData.data[i] & 1).toString();
                    if (binaryMessage.slice(-8) === '00000000') {
                        break;
                    }
                }
                const byteArray = binaryMessage.match(/.{1,8}/g).map(byte => parseInt(byte, 2));
                const message = new TextDecoder().decode(new Uint8Array(byteArray));
                document.getElementById('decodedMessage').textContent = message.replace(/\0/g, '');
            }
            image.src = URL.createObjectURL(encodedImageInput.files[0]);
        }
</script>