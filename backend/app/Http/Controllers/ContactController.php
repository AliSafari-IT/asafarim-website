<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = env('MAIL_HOST');
            $mail->SMTPAuth = true;
            $mail->Username = env('MAIL_USERNAME');
            $mail->Password = env('MAIL_PASSWORD');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION') === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;

            $mail->Port = env('MAIL_PORT');

            $mail->setFrom(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            $mail->addAddress(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));

            $mail->isHTML(true);
            $mail->Subject = "Contact Form Submission from {$validated['name']}";
            $mail->Body = "<h2>Contact Form Message</h2>
                            <p><strong>Name:</strong> {$validated['name']}</p>
                            <p><strong>Email:</strong> {$validated['email']}</p>
                            <p><strong>Message:</strong> {$validated['message']}</p>";

            $mail->send();

            // Log successful email sending
            Log::info('Contact form submission successful: ' . $validated['name']);

            // Redirect back with a success message
            return redirect()->route('contact')->with('success', 'Thank you for your message, ' . $validated['name'] . '! We will get back to you shortly.');
        }
        // In the catch block
        catch (Exception $e) {
            Log::error('Mail Error: ' . $e->getMessage());
            return redirect()->route('contact')->with('error', "Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
        }
    }
}