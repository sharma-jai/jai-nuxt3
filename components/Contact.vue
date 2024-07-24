<template>
  <section class="contact-section">
    <div class="contact-section-width">
      <div>
        <div class="img-container">
          <div>
            <img
              src="/contact.svg"
              alt="personal email svg"
              width="890"
              height="730"
            />
          </div>
        </div>
        <div class="details-cta-container">
          <div>
            <h2>Get in touch with me</h2>
            <p v-if="isSeeking">
              If you have any inquiries, are interested in collaborating, or
              simply want to connect, please don't hesitate to reach out to me
              via email or any of the contact details provided in my resume. I
              look forward to hearing from you!
            </p>
            <p v-else>
              Although I’m not looking for any new opportunities, my inbox is
              always open. Whether you have a question, want to work together or
              just want to say hi, I’ll try my best to get back to you!
            </p>
          </div>
          <div>
            <a href="mailto:jai.sharma9782@gmail.com">
              <EnvelopeIcon /> Say Hello!
            </a>
            <a
              v-if="isSeeking"
              href="/resume/Jai-Resume.pdf"
              download="Jai-Resume"
              target="_blank"
            >
              <PaperClipIcon /> My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { EnvelopeIcon, PaperClipIcon } from "@heroicons/vue/24/outline";
const isSeeking = true;
</script>
