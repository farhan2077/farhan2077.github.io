import React from "react";

export default function GetNotified() {
  return (
    <>
      <h3 className="uppercase font-secondary text-blue-600 text-3xl text-center">
        get notified
      </h3>
      <section className="mt-5 md:mt-8 grid gap-y-4">
        <div className="text-center">
          <p className="text-primary">
            Sign up for my newsletter and
            <br />
            I'll email you every time I release a new project.
          </p>
          <div className="mt-5">
            {/* test test test test test */}
            <script src="https://f.convertkit.com/ckjs/ck.5.js" />
            <form
              action="https://app.convertkit.com/forms/2077593/subscriptions"
              method="post"
              data-sv-form={process.env.REACT_APP_FORM_ACCESS_ID}
              data-uid={process.env.REACT_APP_FORM_UID}
              data-format="inline"
              data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://farhan2077.github.io/#contact"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            >
              <div data-style="clean">
                <ul data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false">
                  <div className="">
                    <input
                      className="focus:outline-none border-2 border-blue-600 rounded md:rounded-l md:rounded-r-none placeholder-gray-400 bg-gray-50 py-2 md:py-3.5 font-primary text-center w-full md:w-96 shadow"
                      name="email_address"
                      aria-label="Enter your email address"
                      placeholder="Enter your email address"
                      required=""
                      type="email"
                    />
                    <button
                      data-element="submit"
                      className="block mx-auto md:inline px-2 py-2 md:py-3.5 rounded md:rounded-r md:rounded-l-none btn-blue w-full md:w-40 font-primary mt-3 md:mt-0 shadow"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* test test test test test */}
          </div>
        </div>
      </section>
    </>
  );
}
