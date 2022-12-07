// import { NextApiRequest, NextApiResponse } from "next"
import { google } from 'googleapis'

const GOOGLE_CLIENT_ID = "108268096796678547799"
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDNJlFVCYLaQ33a\n1KQeOL4e+fRYsabJueN4u5VqTM+2oZFQSMF15arc5MF++g+Cgdn0UbHbP+MEXh/h\n7WKlo11C2xQCGxa39UW/dS0H9E1yE7p+/bUG0RNpYuk1dm5ZlKiO3lkCpQt4UM0E\nr8y6ORKKcuciqO7udtmY3TkVWnQ8M+SOlgrvdyHxa6Nx+5STkv1tfygImKrjHqyV\nxFVODqPbgflwuIxnGBYLzkNQ0rnXEzFMb5Dq35S6qWLFfZPB+HqX5jIoJceFyqtp\nyXyfhhkzKPzQudTOAD+dJhbgUOd5yK7ojddtZraAevYXMDYK+m9J2JWFLSyC047A\n7hr9aktXAgMBAAECggEABuItQnQyPs6a73fJFfaDcpiieUNkvEoPduKcbder9I3R\nSWdXjnQpWoYWdANB9/gRbyA6noezP1dFLJiBgdtMaszdDAEKrxt8vqLY4vZwjs5Y\nqKAsrdDgHN4jwxZ5N2pEiZ6uT+dnzh6v8mNPtEPr+ldGqCQQ+FFmlbl+i9fgJJDt\nzT6cLaRQLi3E042gJLCs/7m3LG+4YaeNxmT4oZ8TtgZjYkA0QcNNl2IbEfc8F3fl\n0AzlazzWZ2k/MWN76RY83M6XHgOt9txj5QS32rpCi95NN9NL7DZzjMIg6aCq5xZH\na0uUxArmnYYoGwTd8rARYTJQ/a4er1qrXW/GR09+CQKBgQDqhFT/73b/iI01IPic\n2Lb45gtg80HeOxzlywC91o8+fJj24GmMMAkgrRigFFpttItRsM6wbYwwXRFatmKP\nfdoG1kKnUQ0w2fbXpqBTFqOxHiSp+nlkA0Lcp6IcNXrWNctbFITJKJHwPoq8tHRZ\noYhaeBgJSfuvcGGJXEVyRCUrgwKBgQDf8UsBbK0mbUxxp7B2tCDbJ47qG2ezd3gB\neNYZUZRtvalmJFJvKfRfz6s5SfBQ8Umsn57X2/FLbGtfpY2m8zEzfT/mClfOI5Qt\nAZrqgF9n82PkOfX2nJhkzBvTHTTEzvhDOvKUinyv2ytKXK7xTWMsEmYR/ocDIPTK\nH/Tx8Jg0nQKBgHCWPVRtu1xsSxZxkMmEBTuy/U17G2k8SeBMODvrUPO3z5veGu3x\ndcBZOZRIkS1P2v7J+kCbJw1k8Nry6phm3BAiNveqosGMMsRPO3MIUGfMx99O345T\nPns+g0Y1qpZCVzGPxTvpnT6QV/zGSYFqWlLMiwWSniEYu8q9IJ399zZPAoGBALIP\n3EHftbXORnBAk7Fu/IkFZT+EVup+Xe9ds28iTNENc3qB+wHk7CiaqVy+C9VwZdJa\ngSTF/5CnPqEos/9Bc6erOXmiU7rW02UN164KMNIo1w6Lf6V9UjcjjCRLHsA2iXR7\nlJLDouz5aeyQ0ZGQpQBQCNTZ+2RjegCVdGBDm+KJAoGBAJBp6gJW+TDB4UjBmAd0\nCTyH2cCf+XaPUQTJln75Pfz/C/hpmUz888KEQ/qjqW1kppfdTcSdraDy2YsxUCAn\nW2WtxmsdbIyF2v/GELosYIOoL8vrIC/P95NUf++Yz4V23TXm/C8jBYgMm39iuxTb\nVlAmobmwomaf6/z3uRo2i/hO\n-----END PRIVATE KEY-----\n"
const GOOGLE_SHEET_ID = "1BiPZumzkK4t015CYr7BZvCQ3D_CWovFXhPDiwY0cgUE"
const GOOGLE_CLIENT_EMAIL = "spreadsheet@wise-splicer-370822.iam.gserviceaccount.com"

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
                client_email: GOOGLE_CLIENT_EMAIL,
                private_key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
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
            spreadsheetId: GOOGLE_SHEET_ID,
            range: 'B1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.email]
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