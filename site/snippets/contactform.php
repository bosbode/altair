
<?php ///////////////////////////////////////////////////////
// ----------------------------------------------------------
// SNIPPET
// ----------------------------------------------------------
/////////////////////////////////////////////////////////////

// Set defaults
$validation_error = false;
$server_error = false;

// Fetch GET parameter by key
$email   = get('email');
$name    = get('name');
$subject = get('subject') ? '[' . $site->title()->smartypants() . '] ' . get('subject') : '[' . $site->title()->smartypants() . '] Contact form';
$text    = get('text');

// Validation, and error logic
if(param('status') == 'go') {

	// Send email
	$contact = email(array(
		'to'      => "Contact Form <".$page->contact_to().">",
		'from'    => "$name <$email>",
		'subject' => "$subject",
		'body'    => "Message: \n\n $text"
	));

	if(!$name || !$email || !v::email($email) || !$text) {
		$validation_error = true;
	}
	else {
		if($contact->send()) {
			go($page->url() . '/status:send');
		}
		else {
			$server_error = true;
		}
	}
}

////////////////////////////////////////////////////////////
// [1] Send (ok) message
///////////////////////////////////////////////////////// ?>

<?php if(param('status') == 'send'): ?>

	<script>
		push_message.push({status: 'success', type: 'bar', text: 'Voila, your message is successfully send! You will hear from us soon.'<?php if(s::get('device_class') == 'desktop'): echo ' , timeout: 6000'; endif; ?>});
	</script>
	<noscript>
		<div class="Alert Alert--inline Alert--success">
			<div class="Alert-message">
				<p>Voila, your message is successfully send! You will hear from us soon.</p>
			</div>
			<button type="button" class="Alert-close" data-dismiss="Alert" aria-hidden="true" role="presentation">&times;</button>
		</div>
	</noscript>

<?php endif; ?>


<?php //////////////////////////////////////////////////////
// [2] Validation error message
///////////////////////////////////////////////////////// ?>

<?php if($validation_error == true): ?>

		<script>
			push_message.push({status: 'error', type: 'bar', text: 'The form could not be submitted. Please fill in all fields correctly.'<?php if(s::get('device_class') == 'desktop'): echo ' , timeout: 6000'; endif; ?>});
		</script>
		<noscript>
			<div class="Alert Alert--inline Alert--error js-dismissable">
				<div class="Alert-message">
					<p>The form could not be submitted. Please fill in all fields correctly.</p>
				</div>
				<button type="button" class="Alert-close" data-dismiss="Alert" aria-hidden="true" role="presentation">&times;</button>
			</div>
		</noscript>

<?php endif; ?>

<?php //////////////////////////////////////////////////////
// [3] Server error message
///////////////////////////////////////////////////////// ?>

<?php if($server_error == true): ?>

	<script>
		push_message.push({status: 'error', type: 'bar', text: 'The email could not be sent. Please try again later.'<?php if(s::get('device_class') == 'desktop'): echo ' , timeout: 6000'; endif; ?>});
	</script>
	<noscript>
		<div class="Alert Alert--inline Alert--warning js-dismissable">
			<div class="Alert-message">
				<p>The email could not be sent. Please try again later.</p>
			</div>
			<button type="button" class="Alert-close" data-dismiss="Alert" aria-hidden="true" role="presentation">&times;</button>
		</div>
	</noscript>

<?php endif; ?>

<?php /////////////////////////////////////////////////// ?>

<form action="<?php echo $page->url() ?>/status:go" method="post" class="Form">

	<fieldset>

		<ol class="Form-fields">

			<li class="Form-item Form-item--stacked<?php if(param('status') == 'go' && !$name): echo ' is-error'; endif; ?>">
				<label for="contactform-name" class="Form-label">Name</label>
				<input type="text" rel="persist" id="contactform-name" name="name" class="Form-input" value="<?php if(param('status') == 'go'): echo html($name); endif; ?>" autofocus="autofocus" spellcheck="false"/>
				<?php if(param('status') == 'go' && !$name): ?><small class="Form-helperError">Please enter a name</small><?php endif; ?>
			</li>

			<li class="Form-item Form-item--stacked<?php if(param('status') == 'go' && (!$email || !v::email($email))): echo ' is-error'; endif; ?>">
				<label for="contactform-email" class="Form-label">Email address</label>
				<input type="email" id="contactform-email" name="email" class="Form-input" value="<?php if(param('status') == 'go'): echo html($email); endif; ?>" spellcheck="false" />
				<?php if(param('status') == 'go' && (!$email || !v::email($email))): ?><small class="Form-helperError">Please enter a valid email address</small><?php endif; ?>
			</li>

			<?php /*
			<li class="Form-item Form-item--stacked">
				<label for="contactform-subject" class="Form-label">Subject</label>
				<input type="text" id="contactform-subject" name="subject" class="Form-input" value="<?php if(param('status') == 'go'): echo html(get('subject')); endif; ?>" spellcheck="true" />
			</li>
			*/ ?>

			<li class="Form-item Form-item--stacked<?php if(param('status') == 'go' && !$text): echo ' is-error'; endif; ?>">
				<label for="contactform-text" class="Form-label">Message</label>
				<?php if(param('status') == 'go' && !$text): ?><small class="Form-helperError">Please enter your message</small><?php endif; ?>
				<textarea id="contactform-text" name="text" class="Form-input Form-input--full" rows="8" cols="26" spellcheck="true"><?php if(param('status') == 'go'): echo html($text); endif; ?></textarea>
			</li>

		</ol>

	</fieldset>

	<input type="submit" name="submit" value="Send request" class="Button Button--primary" />

</form>
