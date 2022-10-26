# SendTudo
Send Messages via Whatsapp.

## Install

With yarn:

```bash
  yarn add sendtudonode
```

With npm:

```bash
  npm install sendtudonode
```

## Send Message Example:

```bash
// with es5
import sendtudo from 'sendtudonode';
// or with javascript only
const sendtudo = require('sendtudonode');

export const test = async () => {

    // simple text message
    await sendtudo.sendWhatsappMessage({
        to: '99999999999', // whatsapp number
        message: 'the text message',
        publicKey: 'your public key',
        privateKey: 'your private key',
    }); // this method returns true or false

    // message using Template (created in https://web.sendtudo.com.br)
    await sendtudo.sendWhatsappMessage({
        to: '99999999999', // whatsapp number
        templateId: 'the id of template that was created',
        customParams: {
            name: 'John',
            age: 20,
            ...
        },
        publicKey: 'your public key',
        privateKey: 'your private key',
    }); // this method returns true or false
}
```
## Author
- Érick Nilson Souza Sodré Filho (Desenlike)

## Author
- Érick Nilson Souza Sodré Filho (Desenlike)

## License
- MIT