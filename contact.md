+++
title = 'お問い合わせ'
layout = "post"
url = "/contact"
+++

<form id="contact" action="/thankyou" name="contact" method="POST" netlify-honeypot="bot-filed" data-netlify="true">
<input type="hidden" name="form-name" value="contact" />
  <p>
    <label><span>メールアドレス</span><input type="email" name="email" /></label>
  </p>
  <p>
    <label><span>お問い合わせ内容</span><textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">送信</button>
  </p>
</form>

<style>
    #contact {
        text-align: center;
    }

    #contact span {
        display: block;
        text-align: left;
    }

    #contact input, #contact textarea {
        border-radius: .25em;
        background-color: #f1f1f1;
        width: 100%;
    }

    #contact textarea {
        height: 150px;
    }

    #contact button {
        border: 0;
        position: relative;
        display: inline-block;
        padding: 0.25em 0.5em;
        text-decoration: none;
        color: #fff;
        background: #ff7878;
        border-bottom: solid 2px #dd3333;
        border-radius: 4px;
        box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
        font-weight: bold;
        width: 5em;
    }

    #contact button:active {
        border-bottom: solid 2px #ff7878;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
    }
</style>