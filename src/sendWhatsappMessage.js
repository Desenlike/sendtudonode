const axios = require ('axios');
const generateJWT = require('../utils/generateJWT');

module.exports = sendWhatsappMessage = async ({
    to,
    message = null, 
    templateId = null, 
    customParams = null,
    publicKey,
    privateKey,
}) => {
    try {
        const token = generateJWT({
            privateKey,
            publicKey,
        });
        const data = {
            to,
        }
        if (!templateId) {
            data.message = message;
        } else {
            data.templateId = templateId;
            if (customParams) {
                data.customParams = customParams;
            }
        }
        await axios.post('https://api.sendtudo.com.br/messages', data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        return true;
    } catch (err) {
        return false;
    }
};
