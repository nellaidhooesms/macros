require('dotenv').config();
const Imap = require('imap');
const { simpleParser } = require('mailparser');
const axios = require('axios');

// Configure IMAP
const imap = new Imap({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
});

// Function to open the INBOX
function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
}

// Function to send email content to Viber
async function sendToViber(subject, text) {
    const viberToken = process.env.VIBER_BOT_TOKEN;
    const viberUserId = process.env.VIBER_USER_ID;

    const message = `Subject: ${subject}\nMessage: ${text}`;

    try {
        const response = await axios.post('https://chatapi.viber.com/pa/send_message', {
            receiver: viberUserId,
            sender: {
                name: 'Your Bot Name',
                avatar: 'http://your-bot-avatar-url.com' // Optional: URL to your bot's avatar
            },
            type: 'text',
            text: message
        }, {
            headers: {
                'X-Viber-Auth-Token': viberToken
            }
        });
        console.log('Message sent to Viber:', response.data);
    } catch (error) {
        console.error('Error sending message to Viber:', error.message);
    }
}

// IMAP event handlers
imap.once('ready', () => {
    openInbox((err, box) => {
        if (err) throw err;
        imap.search(['UNSEEN'], (err, results) => {
            if (err) throw err;
            const f = imap.fetch(results, { bodies: '' });
            f.on('message', (msg, seqno) => {
                msg.on('body', (stream, info) => {
                    simpleParser(stream, (err, parsed) => {
                        if (err) throw err;
                        console.log('Email Subject:', parsed.subject);
                        console.log('Email Body:', parsed.text);
                        // Send email content to Viber
                        sendToViber(parsed.subject, parsed.text);
                    });
                });
                msg.once('end', () => {
                    console.log('Finished email');
                });
            });
            f.once('error', (err) => {
                console.log('Fetch error: ' + err);
            });
            f.once('end', () => {
                console.log('Done fetching all messages!');
                imap.end();
            });
        });
    });
});

imap.once('error', (err) => {
    console.log('Connection error: ' + err);
});

imap.once('end', () => {
    console.log('Connection ended');
});

imap.connect();