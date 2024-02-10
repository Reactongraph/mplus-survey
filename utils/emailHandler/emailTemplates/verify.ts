export const emailVerificationTemplate = (verificationLink: string) => `
<html>
<head>
<style>
  .button {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
  }
</style>
</head>
<body>
  <p>Dear user,</p>
  <p>Welcome to Mplus! Please use the following verification link to verify your email address:</p>
  <p><a class="button" href="${verificationLink}">Verify Your Email</a></p>
  <p>This link will be valid for the next 24 hours.</p>
  <p>If you have any questions or concerns, feel free to contact our support team at <a href="mailto:support@[yourdomain.com]">support@[yourdomain.com]</a>.</p>
  <p>Best regards,<br>The MPlus Team</p>
</body>
</html>
`;
