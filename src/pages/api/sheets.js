import { google } from 'googleapis';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { Nome, Email, Telefone } = req.body;
    // console.log(name, message);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Cadastros!A2:Z',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[Nome, Email, Telefone, new Date().toLocaleString('pt-BR','America/Sao_Paulo')]],
      },
    });

    res.status(201).json({ message: 'It works!', response });
  }
  // res.status(200).json({ message: 'Hey!' });
}

export default handler;