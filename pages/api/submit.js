// import { NextApiRequest, NextApiResponse } from "next"
import { google } from 'googleapis'

export default async function handler(
    req,
    res
) {
    if (req.method !== "POST") {
        return res.status(405).send({ message: 'Only POST requests allowed' })
    }

    const body = req.body


    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4',
        })


        const response = sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'B1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.email, body.question]
                ]
            }
        })
        console.log(response.status)


        return res.status(200).json({
            data: response.data
        })
    } catch (e) {
        res.status(500).send({ message: e.message ?? 'Something went wrong' })
    }
}