document.querySelector('.back-in-stock-container .notify-me').addEventListener('click', async function(e) {
    let variant_title = variant_titles[document.querySelector('#notify-variant-id').value];
    const { value: email } = await Swal.fire({
      title: `${variant_title}`,
      input: "email",
      confirmButtonText: "SUBSCRIBE",
      inputLabel: "Please enter your email address to subscribe",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              revision: '2023-07-15',
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              data: {
                type: 'back-in-stock-subscription',
                attributes: {
                  profile: {
                    data: {
                      type: 'profile',
                      attributes: {
                        email: email
                      }
                    }
                  },
                  channels: ['EMAIL']
                },
                relationships: {
                  variant: {
                    data: {
                      type: 'catalog-variant',
                      id: '$shopify:::$default:::' + document.querySelector('#notify-variant-id').value
                    }
                  }
                }
              }
            })
          };
          
          fetch('https://a.klaviyo.com/client/back-in-stock-subscriptions/?company_id=' + klaviyo_bis_key, options)
            .then(response => response)
            .then(response => { 
                Swal.fire({
                  text: "You're in! We'll let you know when it's back.",
                  icon: "success"
                });
            })
            .catch(err => { 
                Swal.fire({
                  text: "An error was encountered. Please try again later.",
                  icon: "error"
                });
            });
    }
})