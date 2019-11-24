package com.smart.app.agilepro.service;

import java.io.IOException;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;

import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl {

    private String SENDGRID_API_KEY = "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";
    private final String FROM_EMAIL_ID = "noreply@agilepro.com";

    public void sendMail(final String toEmail, final String message) {
        Email from = new Email(FROM_EMAIL_ID);
        String subject = "Registration confirmation";
        Email to = new Email(toEmail);
        Content content = new Content("text/html", message);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid(SENDGRID_API_KEY);
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            System.out.println("Exception:" + ex);
        }
    }
}