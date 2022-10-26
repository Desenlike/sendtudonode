import axios from 'axios';
import generateJWT from '../utils/generateJWT';

export const sendWhatsappMessage = async ({
    to,
    message = null, 
    templateId = null, 
    customParams = null,
    publicKey,
    privateKey,
}: {
    to: string;
    message?: string | null;
    templateId?: string | null;
    customParams?: object | null;
    publicKey: string;
    privateKey: string;
}) => {
    try {
        const token = generateJWT({
            privateKey,
            publicKey,
        });
        const data: {
            to: string;
            message?: string;
            templateId?: string;
            customParams?: object;
        } = {
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
