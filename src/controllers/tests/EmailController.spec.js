
const EmailController = require('../EmailController');
const EmailQueue = require('../../queue/MailQueue');
const MailQueue = require('../../queue/MailQueue');

jest.mock('../../queue/MailQueue');

describe("Email Controller", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Should sent email successfully", async () => {
        const request = {
            body: {
                email: "teste@gmail.com",
                firstName: "Wesley",
                lastName: "Coutinho"
            }
        }
        const template = `
        Olá ${request.body.firstName} ${request.body.lastName}, sua assinatura foi confirmada!
        Para acessar seus recursos exclusivos você precisa basta clicar aqui.
    `
        const reply = {
            code: jest.fn().mockReturnThis(),
            send: jest.fn()
        }

        await EmailController.sendEmail(request, reply);

        expect(EmailQueue.add).toHaveBeenCalledTimes(1);
        expect(EmailQueue.add).toHaveBeenCalledWith({
            to: "teste@gmail.com",
            from: process.env.EMAIL_FROM,
            subject: "Assinatura Confirmada",
            text: template
        });

        expect(reply.code).toHaveBeenCalledWith(200);
    })

    it("Should return error when not sent email", async () => {
        const request = {
            body: {
                email: "teste@gmail.com",
                firstName: "Wesley",
                lastName: "Coutinho"
            }
        }
        const reply = {
            code: jest.fn().mockReturnThis(),
            send: jest.fn()
        }

        MailQueue.add.mockRejectedValue(new Error("Mocking exception"));

        await EmailController.sendEmail(request, reply);

        expect(EmailQueue.add).toHaveBeenCalledTimes(1);
        expect(reply.code).toHaveBeenCalledWith(500);
        expect(reply.send).toHaveBeenCalledWith("Internal Server Error");
    })
})