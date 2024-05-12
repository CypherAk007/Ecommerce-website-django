## ProShop Ecommerce App

# If user logged in then redirect to shipping else login and then redirect to shipping
- error: navigate('/login?redirect=shipping')
- correct: navigate('/login?redirect=/shipping')