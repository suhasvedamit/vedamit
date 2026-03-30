/**
 * Bound to your contact spreadsheet. Deploy as Web app:
 * Execute as: Me · Who has access: Anyone (or Anyone with Google account).
 * Set PUBLIC_CONTACT_SHEET_WEBAPP_URL in .env to the deployed /exec URL.
 *
 * The site posts application/x-www-form-urlencoded fields: name, email, phone,
 * service, message (see ContactForm.astro). They appear in e.parameter.* .
 *
 * Sheet rows: Timestamp, Name, Email, Phone, Service, Message — ensure row 1
 * headers match or adjust appendRow below.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var name = e.parameter.name;
  var email = e.parameter.email;
  var phone = e.parameter.phone;
  var service = e.parameter.service;
  var message = e.parameter.message;

  sheet.appendRow([new Date(), name, email, phone, service, message]);

  var subject = "New Contact Form Submission";
  var htmlBody =
    "Name: " +
    name +
    "<br>Email: " +
    email +
    "<br>Phone: " +
    phone +
    "<br>Service: " +
    service +
    "<br>Message: " +
    message;

  sendEmail("vedamitsolutions@gmail.com", subject, htmlBody);
  sendEmail("imsuhasgadhave@gmail.com", subject, htmlBody);

  return ContentService.createTextOutput("Success");
}

function sendEmail(email, subject, htmlBody) {
  try {
    MailApp.sendEmail({ to: email, subject: subject, htmlBody: htmlBody });
  } catch (err) {
    Logger.log("An error occurred: " + err.message);
  }
}
