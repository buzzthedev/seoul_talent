import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const {fname, lname, dj, price, message} = req.body;

    // Check if all the required fields are provided
    if (!fname || !lname || !dj || !price || !message) {
        res.status(400).json({message: "Please enter all fields!"});
    } else {

        // Assuming you want to keep a check for bots similar to the 'privacy' field
        if (req.body.bot === undefined) {
            let transporter = await nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                service: 'outlook',
                port: 587,
                auth: {
                    user: "seoultalent@outlook.com",
                    pass: "Mmp37qX8m"
                }
            });

            // Update the email content with the new form fields
            await transporter.sendMail({
                from: "seoultalent@outlook.com",
                to: "seoultalent@outlook.com",
                subject: "New website enquiry",
                html: `Name: ${fname} ${lname}, DJ: ${dj}, Price: £${price}, Message: ${message}`
            });

            res.json({message: "Your message has been successfully sent!"});
        } else {
            res.status(400).json({message: "Bot submissions are not allowed!"});
        }
    }
}
